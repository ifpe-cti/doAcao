import { Component, OnInit } from '@angular/core';
import {Usuario} from './../models/usuario';
import {AgendamentoDeDoacoesService} from './../agendamento-de-doacoes.service';
import {AgendamentoDoacao} from './../models/agendamento-de-doacoes';
import { Router} from '@angular/router';
import { MenuItem } from 'primeng/primeng';
import { MenusService } from '../menus.service';


@Component({
  selector: 'app-agendamento-de-doacoes',
  templateUrl: './agendamento-de-doacoes.component.html',
  styleUrls: ['./agendamento-de-doacoes.component.css']
})
export class AgendamentoDeDoacoesComponent implements OnInit {

  constructor(private AgendamentoDeDoacoesService: AgendamentoDeDoacoesService, 
    private router:Router, private menusService: MenusService) {

      this.agendamentoDoacao = {nomeDoador:"", dataAgendamento: null, 
      numeroDocumentoDoador:""
    }
  }

  agendamentoDoacao: AgendamentoDoacao;
  items: MenuItem[];
 
  voltarPaginaInicial(){
    this.router.navigate(['dashboard']);
   }
   
  agendarDoacao(){
     this.AgendamentoDeDoacoesService.adicionarAgendamentoDeDoacao(this.agendamentoDoacao);
     console.log("Nova doação agendada: " + this.agendamentoDoacao.nomeDoador + 
     this.agendamentoDoacao.numeroDocumentoDoador);
     this.router.navigate(['dashboard-hemope']);
  
    }

      ngOnInit() {
        this.items = this.menusService.itensUsuario;

  }
}  
  


 