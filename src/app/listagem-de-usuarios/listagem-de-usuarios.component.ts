import { Component, OnInit } from '@angular/core';
import {UsuariosService} from '../usuarios.service';
import { Router} from '@angular/router';
import { MenuItem } from 'primeng/primeng';
import { MenusService } from '../menus.service';
import { Usuario } from '../models/usuario';

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

  cols: any[];
  usuariosSelecionados: Usuario[] = [];

  constructor(private usuariosService: UsuariosService, 
    private router:Router, private menusService: MenusService) { }

    voltarPaginaInicial(){
      this.router.navigate(['dashboard-hemope']);
     }

 ngOnInit() {
    this.usuariosService.listarTodos().subscribe(usuarios => {
        this.usuarios = usuarios;   

        this.cols = [
          { field: 'nome', header: 'Nome' },
          { field: 'user', header: 'User' },
          { field: 'cpf', header: 'CPF' },
          { field: 'dataNascimento', header: 'Data de Nascimento' }
      ];

       });

       this.items = this.menusService.itensHemope;
  
      this.activeItem = this.items[6];
    }

}
