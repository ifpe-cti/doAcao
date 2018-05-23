import { Component, OnInit } from '@angular/core';
import {Usuario} from './../models/usuario';
import {UsuariosService} from './../usuarios.service';
import {AgendamentoDoacao} from './../models/agendamentoDoacao';

@Component({
  selector: 'app-agendamento-de-doacoes',
  templateUrl: './agendamento-de-doacoes.component.html',
  styleUrls: ['./agendamento-de-doacoes.component.css']
})
export class AgendamentoDeDoacoesComponent implements OnInit {

  doadores: AgendamentoDoacao[];
  loading: boolean;

  agendamentosDataTable: any[];

  agendamento1: AgendamentoDoacao = {usuarioNome: "Joanne Gabriela", dataAgendamento: "07/08/2018"};
  agendamento2: AgendamentoDoacao = {usuarioNome: "Milena Siqueira", dataAgendamento: "18/04/2018"};

  constructor() {}

  ngOnInit() {
    this.doadores.push(this.agendamento1);
    this.doadores.push(this.agendamento2);


    this.loading = true;


    this.agendamentosDataTable = [
        {field: 'nomeUsuario', header: 'Nome do Doador'},
        {field: 'dataAgendamento', header: 'Data Escolhida'},
        
    ];
}


  }


