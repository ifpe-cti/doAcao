import { Component, OnInit } from '@angular/core';
import {UsuariosService} from './../usuarios.service';
import { Router} from '@angular/router';
import { MenuItem } from 'primeng/primeng';
import { MenusService } from '../menus.service';
import { Usuario } from './../models/usuario';

@Component({
  selector: 'app-listagem-de-usuarios',
  templateUrl: './listagem-de-usuarios.component.html',
  styleUrls: ['./listagem-de-usuarios.component.css']
})
export class ListagemDeUsuariosComponent implements OnInit {
 
 

  usuarios: any[] = [];
  cols: any[];
  usuario: Usuario;

  //usuarioSelecionado;
  items: MenuItem[];
  activeItem: MenuItem;
  //usuariosSelecionados: Usuario[] = [];

  constructor(private usuariosService: UsuariosService, 
    private router:Router, private menusService: MenusService) { }

    voltarPaginaInicial(){
      this.router.navigate(['dashboard-hemope']);
     }
   
     listar(){
      this.usuariosService.listarTodos().subscribe(usuarios => {
        this.usuarios = usuarios;
      });
    }
    aceitar(){
      //aceitou o pedido, faz o que?
      alert("ok");
    }
    rejeitar(){
      this.usuariosService.apagarUsuarioFirebase(this.usuarios)
    }

    ngOnInit() {
      this.listar();
    this.cols = [
      { field: 'nome', header: 'Nome' },
      { field: 'idUsuarioPedido', header: 'Usuário' }
    ]
    /*this.usuariosService.listarTodos().subscribe(usuarios => {
        this.usuarios = usuarios;   

        this.cols = [
          { field: 'nome', header: 'Nome' },
          { field: 'user', header: 'User' },
          { field: 'cpf', header: 'CPF' },
          { field: 'dataNascimento', header: 'Data de Nascimento' }
      ];

       });*/
       

       this.items = this.menusService.itensHemope;
  
      this.activeItem = this.items[6];
    
}

  }
 