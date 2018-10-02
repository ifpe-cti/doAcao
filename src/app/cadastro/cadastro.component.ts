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
   /*if(this.nomeUsuario == null || this.userUsuario == null || 
   this.dataNascimentoUsuario == null || this.senhaUsuario == null){
   } else{
*;
  /*let novoUsuario: Usuario = {nome: this.nomeUsuario, user:this.userUsuario, senha:this.senhaUsuario, 
    dataNascimento: this.dataNascimentoUsuario, fichasMedicas: this.fichasMedicas}; // criação de um objeto da classe Usuario

    // limpa os campos do html do cadastro uma vez que os dados já foram salvos 
   */

    this.servicoUsuario.cadastrarUsuarioFirebase(this.usuario);
    this.router.navigate(['/login']); 
    
    console.log("Novo usuário cadastrado: " + this.usuario.nome);

   
  
   } 
   
   ngOnInit() {
  
  }  
      
 }

     
 

  
