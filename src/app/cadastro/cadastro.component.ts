import { Component, OnInit } from '@angular/core';
import {Usuario} from './../models/usuario';
import {UsuariosService} from './../usuarios.service';
import {Message} from 'primeng/components/common/api';
import { Router} from '@angular/router';
import { FichaMedica } from '../models/ficha-medica';

 

@Component({
  selector: 'cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})


export class CadastroComponent implements OnInit {

  usuario:Usuario;

 

  constructor(private servicoUsuario: UsuariosService, private router:Router) {
    this.usuario = {nome:"", user:"", dataNascimento:"", senha:"", 
    fichasMedicas: [], tipo: "usuario", cpf: ""}
   }
  

  cadastroUsuario() { 
    this.servicoUsuario.cadastrarUsuarioFirebase(this.usuario);
    this.router.navigate(['/login']); 
    console.log("Novo usuário cadastrado: " + this.usuario.nome);

   
  
   } 
   
   ngOnInit() {
  
  }  
      
 }

     
 

  
