import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { MenuItem } from 'primeng/primeng';
import { MenusService } from '../menus.service';
import { TecnicoService } from '../tecnicos.service';
import { Tecnico } from '../models/tecnico';


@Component({
  selector: 'app-listagem-tecnicos',
  templateUrl: './listagem-tecnicos.component.html',
  styleUrls: ['./listagem-tecnicos.component.css']
})
export class ListagemTecnicosComponent implements OnInit {

  items: MenuItem[];
  tecnico: Tecnico = new Tecnico()

  displayDialog: boolean;

  selectedTecnico: Tecnico;

  newTecnico: boolean;

  tecnicos: Tecnico[];

  cols: any[];


  constructor(private tecnicoService: TecnicoService,
    private menusService: MenusService, private router:Router) { }


save() {
    let tecnicos = [...this.tecnicos];
    if (this.newTecnico)
        tecnicos.push(this.tecnico);
    else
        tecnicos[this.tecnicos.indexOf(this.selectedTecnico)] = this.tecnico;

    this.tecnicos = tecnicos;
    this.tecnico = null;
    this.displayDialog = false;
}

delete() {
    let index = this.tecnicos.indexOf(this.selectedTecnico);
    this.tecnicos = this.tecnicos.filter((val, i) => i != index);
    this.tecnico = null;
    this.displayDialog = false;

    this.tecnicoService.apagarTecnicoFirebase(this.selectedTecnico);
}

onRowSelect(event) {
  this.newTecnico = false;
  this.tecnico = this.cloneTecnico(event.data);
  this.displayDialog = true;
}

cloneTecnico(t: Tecnico): Tecnico {
  let tecnico: Tecnico = new Tecnico()
  for (let prop in t) {
      tecnico[prop] = t[prop];
  }
  return tecnico;

}

  ngOnInit() {
    this.items = this.menusService.itensHemope;

    this.tecnicoService.listarTodos().subscribe(tecnicos => {
      this.tecnicos = tecnicos;

      this.cols = [
        { field: 'nome', header: 'Nome' },
        { field: 'cpf', header: 'CPF' },
      ];

    });

  }

}
