import { Component, OnInit } from '@angular/core';
import {Usuario} from './../models/usuario';
import {AgendamentoDeDoacoesService} from './../agendamento-de-doacoes.service';
import {AgendamentoDoacao} from './../models/agendamento-de-doacoes';
import { Router} from '@angular/router';
import { MenuItem } from 'primeng/primeng';
import {UsuariosService} from './../usuarios.service';


@Component({
  selector: 'app-agendamento-doacoes-hemope',
  templateUrl: './agendamento-doacoes-hemope.component.html',
  styleUrls: ['./agendamento-doacoes-hemope.component.css']
})
export class AgendamentoDoacoesHemopeComponent implements OnInit {

  constructor(private AgendamentoDeDoacoesService: AgendamentoDeDoacoesService, 
    private router:Router, private servicoUsuario: UsuariosService) {

      this.agendamentoDoacao = {nomeDoador:"", dataAgendamento: null, 
      numeroDocumentoDoador:""
    }
  }


  agendamentoDoacao: AgendamentoDoacao;
  items: MenuItem[];
  results:String [];

  search(cpf) {
    this.servicoUsuario.filtrarUsuariosPorCPF(cpf.query).subscribe(data => {
        this.results = data;
    });
} 
 
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
      this.items = [
        {label: '  Página inicial', icon: '', routerLink:'/dashboard-hemope'},
        {label: '  Adicionar exame', icon: '', routerLink:'/requisicao-do-exame'},
        {label: '  Adicionar ficha médica', icon: '', routerLink:'/fichas-medicas'},
        {label: '  Agendar doação', icon: '', routerLink:'/agendamento-de-doacoes-hemope'},
        {label: '  Todos os exames', icon: '', routerLink:'/visualizacao-requisicao-exames'},
        {label: '  Todas as fichas médicas', icon: '', routerLink:'/visualizacao-fichas-medicas'},
        {label: '  Todas os usuários', icon: '', routerLink:'/listagem-usuarios'},
    ];
    }
  }
  