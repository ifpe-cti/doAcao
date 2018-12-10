import { Component, OnInit } from '@angular/core';
import { Usuario } from '../models/usuario';
import { UsuariosService } from '../usuarios.service';
import { Message } from 'primeng/components/common/api';

import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: Usuario;
  userUsuario: String;
  senhaUsuario: String;

  msgs: Message[] = [];



  user = {
    email: '',
    password: ''
  };

  constructor(private servicoUsuario: UsuariosService, private router: Router, private authService: AuthService) { }

  showSuccess() {
    this.msgs = [];
    this.msgs.push({ severity: 'success', summary: 'Login efetuado com sucesso' });
  }
  showError() {
    this.msgs = [];
    this.msgs.push({ severity: 'error', summary: 'User ou senha incorretos', detail: 'Os dados digitados não estão cadastrados no banco de dados ou não condizem' });
  }

  signInWithGoogle() {
    this.authService.signInWithGoogle()
      .then((res) => {
        this.router.navigate(['dashboard'])
      })
      .catch((err) => console.log(err));
  }

  /*
  signInWithEmail() {
    this.authService.signInRegular(this.user.email, this.user.password)
      .then((res) => {
        console.log(res);
        this.router.navigate(['dashboard']);
      })
      .catch((err) => console.log('error: ' + err));
  }*/

  redirecionarCadastro() {
    this.router.navigate(['/cadastro']);
  }

  redirecionarLoginGoogle() {
    this.router.navigate(['/login-google']);
  }

  loginUsuario(user, senha) {
    user = this.userUsuario;
    senha = this.senhaUsuario;
    this.servicoUsuario.loginUsuario(user, senha).subscribe(usuario => {
      if (usuario == null) {
        this.showError();
      } else {

        this.servicoUsuario.loginUsuario(user, senha).subscribe(meuObservable => {
          this.servicoUsuario.usuarioLogado = meuObservable as Usuario;

          console.log(this.servicoUsuario.usuarioLogado.cpf)

          if (this.servicoUsuario.usuarioLogado.tipoUsuario == "hemocentro") {
            this.router.navigate(['/dashboard-hemope']);
          }

          if (this.servicoUsuario.usuarioLogado.tipoUsuario == "usuario") {
            this.router.navigate(['/dashboard']);
          }
        })
      }
    });
  }


  ngOnInit() {

  }
}
