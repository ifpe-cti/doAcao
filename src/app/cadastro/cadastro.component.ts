import { Component, OnInit } from '@angular/core';
import { Usuario } from './../models/usuario';
import { UsuariosService } from './../usuarios.service';
import { Router } from '@angular/router';
import {SelectItem} from 'primeng/api';



@Component({
  selector: 'cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})


export class CadastroComponent implements OnInit {

  tiposSanguineos: SelectItem[];
  usuario: Usuario;
  tipoSanguineoSelecionado: String;


  constructor(private servicoUsuario: UsuariosService, private router: Router) {
    this.usuario = {
      nome: "", user: "", dataNascimento: "", senha: "",
      tipoUsuario: "usuario", cpf: "", tipoSanguineo: ""
    }
  }


  cadastroUsuario() {  
    this.servicoUsuario.cadastrarUsuarioFirebase(this.usuario);
    this.router.navigate(['/login']);
   
    console.log("Novo usuário cadastrado: " + this.usuario.nome);
  }

  ngOnInit() {

    this.tiposSanguineos = [
      {label: 'Tipo Sanguíneo', value: null},
      {label:"A+", value: "A+"},         
      {label: 'A-', value: 'A-'},
      {label: 'B+', value: 'B+'},
      {label: 'B-', value: 'B-'},
      {label: 'AB+', value: 'AB+'},
      {label: 'AB-', value: 'AB-'},
      {label: 'O+', value: 'O+'},
      {label: 'O-', value: 'O-'}
    ];

  }

}





