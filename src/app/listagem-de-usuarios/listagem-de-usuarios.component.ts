import { Component, OnInit } from '@angular/core';
import {UsuariosService} from './../usuarios.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-listagem-de-usuarios',
  templateUrl: './listagem-de-usuarios.component.html',
  styleUrls: ['./listagem-de-usuarios.component.css']
})
export class ListagemDeUsuariosComponent implements OnInit {
 
 

  usuarios: any[] = [];
  usuarioSelecionado;

  constructor(private usuariosService: UsuariosService, 
    private router:Router) { }

 ngOnInit() {
    this.usuariosService.listarTodos().subscribe(usuarios => {
        this.usuarios = usuarios;   
       });
  }

}
