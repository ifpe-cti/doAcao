import { Component, OnInit } from '@angular/core';
import {Usuario} from './../models/usuario';
import {UsuariosService} from './../usuarios.service';
import {Message} from 'primeng/components/common/api';
import { RoteamentoService } from './../roteamento.service';
import { Router} from '@angular/router';
import { FichaMedica } from '../models/ficha-medica';

 

@Component({
  selector: 'cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})


export class CadastroComponent implements OnInit {


  msgs: Message[] = [];
  nomeUsuario: String;
  userUsuario: String;
  dataNascimentoUsuario: String;
  senhaUsuario: String;
  controladorIdUsuario: number;
  fichasMedicas: FichaMedica[];
 

  constructor(private servicoUsuario: UsuariosService, private router:Router,
  private roteamentoService: RoteamentoService) { }
  

  cadastroUsuario() { 
   if(this.nomeUsuario == null || this.userUsuario == null || 
   this.dataNascimentoUsuario == null || this.senhaUsuario == null){
   } else{

  let novoUsuario: Usuario = {nome: this.nomeUsuario, user:this.userUsuario, senha:this.senhaUsuario, 
    dataNascimento: this.dataNascimentoUsuario, fichasMedicas: this.fichasMedicas}; // criação de um objeto da classe Usuario

    // limpa os campos do html do cadastro uma vez que os dados já foram salvos 
    this.nomeUsuario = "";
    this.userUsuario = "";
    this.dataNascimentoUsuario = "";
    this.senhaUsuario = "";

    this.servicoUsuario.cadastrarUsuarioFirebase(novoUsuario);

    console.log("Novo usuário cadastrado: " + novoUsuario.nome);

    this.router.navigate(['/login']); 
  
   }
      
 }
     
  ngOnInit() {

  }
    
  }  

  
