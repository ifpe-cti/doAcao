import { Component, OnInit } from '@angular/core';
import {AgendamentoDeDoacoesService} from './../agendamento-de-doacoes.service';
import { Router} from '@angular/router';
import { MenusService } from '../menus.service';
import { MenuItem } from 'primeng/primeng';

@Component({
  selector: 'app-visualizacao-agendamentos',
  templateUrl: './visualizacao-agendamentos.component.html',
  styleUrls: ['./visualizacao-agendamentos.component.css']
})
export class VisualizacaoAgendamentosComponent implements OnInit {
  items: MenuItem[];

  agendamentoDoacoes: any[] = [];
  agendamentoSelecionado;

  constructor(private agendamentoDeDoacoesService: AgendamentoDeDoacoesService, 
    private router:Router, private menusService: MenusService) { }

    voltarPaginaInicial(){
      this.router.navigate(['dashboard-hemope']);
     }

  ngOnInit() { 

    this.items = this.items = this.menusService.itensHemope;
    this.agendamentoDeDoacoesService.listarTodos().subscribe(agendamentoDoacoes => {
      this.agendamentoDoacoes = agendamentoDoacoes;
    });
  }

}
