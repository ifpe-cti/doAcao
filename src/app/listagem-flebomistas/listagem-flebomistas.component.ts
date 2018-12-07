import { Component, OnInit } from '@angular/core';
import {FlebomistaService} from '../flebomista.service';
import { Router} from '@angular/router';
import { MenuItem } from 'primeng/primeng';
import { MenusService } from '../menus.service';
import { Flebomista } from '../models/flebomista';


@Component({
  selector: 'app-listagem-flebomistas',
  templateUrl: './listagem-flebomistas.component.html',
  styleUrls: ['./listagem-flebomistas.component.css']
})
export class ListagemFlebomistasComponent implements OnInit {

  items: MenuItem[];

  flebomista: Flebomista = new Flebomista()

  displayDialog: boolean;

  selectedFlebomista: Flebomista;

  newFlebomista: boolean;

  flebomistas: Flebomista[];

  cols: any[];


  constructor(private flebomistaService: FlebomistaService,
    private menusService: MenusService, private router:Router) { }

save() {
    let tecnicos = [...this.flebomistas];
    if (this.newFlebomista)
        tecnicos.push(this.flebomista);
    else
        tecnicos[this.flebomistas.indexOf(this.selectedFlebomista)] = this.flebomista;

    this.flebomistas = tecnicos;
    this.flebomista = null;
    this.displayDialog = false;
}

delete() {
    let index = this.flebomistas.indexOf(this.selectedFlebomista);
    this.flebomistas = this.flebomistas.filter((val, i) => i != index);
    this.flebomista = null;
    this.displayDialog = false;

    this.flebomistaService.apagarFlebomistaFirebase(this.selectedFlebomista);
}

onRowSelect(event) {
  this.newFlebomista = false;
  this.flebomista = this.cloneFlebomista(event.data);
  this.displayDialog = true;
}

cloneFlebomista(f: Flebomista): Flebomista {
  let flebomista: Flebomista = new Flebomista()
  for (let prop in f) {
      flebomista[prop] = f[prop];
  }
  return flebomista;

}

  ngOnInit() {
    this.items = this.menusService.itensHemope;

    this.flebomistaService.listarTodos().subscribe(flebomistas => {
      this.flebomistas = flebomistas;

      this.cols = [
        { field: 'nome', header: 'Nome' },
        { field: 'cpf', header: 'CPF' },
      ];

    });

  }

}
