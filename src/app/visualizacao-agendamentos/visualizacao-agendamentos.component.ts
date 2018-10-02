import { Component, OnInit } from '@angular/core';
import {AgendamentoDeDoacoesService} from './../agendamento-de-doacoes.service';
import {AgendamentoDoacao} from './../models/agendamento-de-doacoes';
import { Router} from '@angular/router';

@Component({
  selector: 'app-visualizacao-agendamentos',
  templateUrl: './visualizacao-agendamentos.component.html',
  styleUrls: ['./visualizacao-agendamentos.component.css']
})
export class VisualizacaoAgendamentosComponent implements OnInit {

  agendamentoDoacoes: any[] = [];
  userSelecionado;

  constructor(private AgendamentoDeDoacoesService: AgendamentoDeDoacoesService, 
    private router:Router) { }

  listarTodos(){
    this.AgendamentoDeDoacoesService.listarTodos().subscribe(agendamentoDoacoes => {
      this.agendamentoDoacoes = agendamentoDoacoes;
    });
  }

  ngOnInit() {
  }

}
