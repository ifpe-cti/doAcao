import { Component, OnInit } from '@angular/core';
import {FichasMedicasService} from './../fichas-medicas.service';
import { Router} from '@angular/router';
import { MenuItem } from 'primeng/primeng';


@Component({
  selector: 'app-visualizacao-fichas-medicas',
  templateUrl: './visualizacao-fichas-medicas.component.html',
  styleUrls: ['./visualizacao-fichas-medicas.component.css']
})
export class VisualizacaoFichasMedicasComponent implements OnInit {
 
  items: MenuItem[];

  fichasMedicas: any[] = [];
  fichaMedicaSelecionada;

  constructor(private fichasMedicasService: FichasMedicasService, 
    private router:Router) { }

    voltarPaginaInicial(){
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

    this.fichasMedicasService.listarTodos().subscribe(fichasMedicas => {
      this.fichasMedicas = fichasMedicas;
    });
  }

}
