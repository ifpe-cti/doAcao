import { Component, OnInit } from '@angular/core';
import { Usuario } from '../models/usuario';
import { TecnicoService } from '../tecnicos.service';
import { Router } from '@angular/router';
import { SelectItem } from 'primeng/api';
import { Tecnico } from '../models/tecnico';


@Component({
  selector: 'app-listagem-tecnicos',
  templateUrl: './listagem-tecnicos.component.html',
  styleUrls: ['./listagem-tecnicos.component.css']
})
export class ListagemTecnicosComponent implements OnInit {

  tecnico: Tecnico = {nome: "", cpf: ""}; 

  displayDialog: boolean;

  selectedTecnico: Tecnico;

  newTecnico: boolean;

  tecnicos: Tecnico[];

  cols: any[];


  constructor(private tecnicoService: TecnicoService) { }
 
  showDialogToAdd() {
    this.newTecnico = true;
    this.tecnico = {nome: "qualquer nome", cpf: "kkk"};
    this.displayDialog = true;
  }

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
}

onRowSelect(event) {
  this.newTecnico = false;
  this.tecnico = this.cloneCar(event.data);
  this.displayDialog = true;
}

cloneCar(t: Tecnico): Tecnico {
  let tecnico = {nome: "xiuxiu", cpf: "123"};
  for (let prop in t) {
      tecnico[prop] = t[prop];
  }
  return tecnico;

}

  ngOnInit() {
    this.tecnicoService.listarTodos().subscribe(tecnicos => {
      this.tecnicos = tecnicos;

      this.cols = [
        { field: 'nome', header: 'Nome' },
        { field: 'cpf', header: 'CPF' },
      ];

    });

  }

}
