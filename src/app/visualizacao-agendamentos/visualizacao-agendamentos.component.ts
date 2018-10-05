import { Component, OnInit } from '@angular/core';
import {AgendamentoDeDoacoesService} from './../agendamento-de-doacoes.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-visualizacao-agendamentos',
  templateUrl: './visualizacao-agendamentos.component.html',
  styleUrls: ['./visualizacao-agendamentos.component.css']
})
export class VisualizacaoAgendamentosComponent implements OnInit {

  agendamentoDoacoes: any[] = [];
  agendamentoSelecionado;

  constructor(private agendamentoDeDoacoesService: AgendamentoDeDoacoesService, 
    private router:Router) { }

    voltarPaginaInicial(){
      this.router.navigate(['dashboard-hemope']);
     }

  ngOnInit() { 
    this.agendamentoDeDoacoesService.listarTodos().subscribe(agendamentoDoacoes => {
      this.agendamentoDoacoes = agendamentoDoacoes;
    });
  }

}
