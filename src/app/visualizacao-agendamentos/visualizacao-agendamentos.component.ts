import { Component, OnInit } from '@angular/core';
import { AgendamentoDeDoacoesService } from '../agendamento-de-doacoes.service';
import { Router } from '@angular/router';
import { MenusService } from '../menus.service';
import { MenuItem } from 'primeng/primeng';
import { AgendamentoDoacao } from '../models/agendamento-de-doacoes';

@Component({
  selector: 'app-visualizacao-agendamentos',
  templateUrl: './visualizacao-agendamentos.component.html',
  styleUrls: ['./visualizacao-agendamentos.component.css']
})
export class VisualizacaoAgendamentosComponent implements OnInit {

  items: MenuItem[];
  activeItem: MenuItem;

  agendamentos: any[] = [];

  agendamento: AgendamentoDoacao = new AgendamentoDoacao()
  displayDialog: boolean;
  selectedAgendamento: AgendamentoDoacao;
  newAgendamento: boolean;
  cols: any[];


  constructor(private agendamentoDeDoacoesService: AgendamentoDeDoacoesService,
    private router: Router, private menusService: MenusService) { }

  save() {
    let agendamentos = [...this.agendamentos];
    if (this.newAgendamento)
      agendamentos.push(this.agendamento);
    else
      agendamentos[this.agendamentos.indexOf(this.selectedAgendamento)] = this.agendamento;

    this.agendamentos = agendamentos;
    this.agendamento = null;
    this.displayDialog = false;
  }

  delete() {
    let index = this.agendamentos.indexOf(this.selectedAgendamento);
    this.agendamentos = this.agendamentos.filter((val, i) => i != index);
    this.agendamento = null;
    this.displayDialog = false;

    this.agendamentoDeDoacoesService.apagarAgendamentoDeDoacao(this.selectedAgendamento);
  }

  onRowSelect(event) {
    this.newAgendamento = false;
    this.agendamento = this.cloneUsuario(event.data);
    this.displayDialog = true;
  }

  cloneUsuario(a: AgendamentoDoacao): AgendamentoDoacao {
    let agendamento: AgendamentoDoacao = new AgendamentoDoacao()
    for (let prop in a) {
      agendamento[prop] = a[prop];
    }
    return agendamento;

  }

  ngOnInit() {
    this.agendamentoDeDoacoesService.listarTodos().subscribe(agendamentos => {
      this.agendamentos = agendamentos;
    });

this.cols = [
      { field: 'data', header: 'Data agendada' },
      { field: 'cpfDoador', header: 'CPF do doador' },
    ];

    this.items = this.items = this.menusService.itensHemope;
  }

  



}
