import { Component, OnInit } from '@angular/core';
import {UsuariosService} from './../usuarios.service';
import { Router} from '@angular/router';
import { MenuItem } from 'primeng/primeng';

@Component({
  selector: 'app-listagem-de-usuarios',
  templateUrl: './listagem-de-usuarios.component.html',
  styleUrls: ['./listagem-de-usuarios.component.css']
})
export class ListagemDeUsuariosComponent implements OnInit {
 
 

  usuarios: any[] = [];
  usuarioSelecionado;
  items: MenuItem[];
  activeItem: MenuItem;

  constructor(private usuariosService: UsuariosService, 
    private router:Router) { }

    voltarPaginaInicial(){
      this.router.navigate(['dashboard-hemope']);
     }

 ngOnInit() {
    this.usuariosService.listarTodos().subscribe(usuarios => {
        this.usuarios = usuarios;   
       });

       this.items = [
        {label: '  Página inicial', icon: '', routerLink:'/dashboard-hemope'},
        {label: '  Adicioanr exame', icon: '', routerLink:'/requisicao-de-exames'},
        {label: '  Adicionar ficha médica', icon: '', routerLink:'/fichas-medicas'},
        {label: '  Agendar doação', icon: '', routerLink:'/agendamento-de-doacoes'},
        {label: '  Todos os exames', icon: '', routerLink:'/visualizacao-requisicao-exames'},
        {label: '  Todas as fichas médicas', icon: '', routerLink:'/visualizacao-fichas-medicas'},
        {label: '  Todas os usuários', icon: '', routerLink:'/listagem-usuarios'},
    ];
  
      this.activeItem = this.items[6];
    }

}
