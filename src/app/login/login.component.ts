import {Component, OnInit} from '@angular/core';
import {Usuario} from './../models/usuario';
import {UsuariosService} from './../usuarios.service';
import {Message} from 'primeng/components/common/api';

import {Router} from '@angular/router';
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

  user = {
    email: '',
    password: ''
  };
 
    constructor(private servicoUsuario: UsuariosService, private router:Router, private authService: AuthService) { }

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

       redirecionarCadastro(){
        this.router.navigate(['/cadastro']); 
       }

       redirecionarLoginGoogle(){
        this.router.navigate(['/login-google']); 
       }
    
  
    loginUsuario(user, senha){
      user = this.userUsuario;
      senha = this.senhaUsuario;
      this.servicoUsuario.loginUsuario(user, senha).subscribe(usuario => {
        if(usuario == null){
          alert("Usuário não cadastrado no banco.")
        } else{
          console.log("Usuario "+ usuario.nome + " logado.");
          this.servicoUsuario.usuarioLogado = usuario; 
         
          if(usuario.tipo = "hemope"){
             this.router.navigate(['/inicial-hemope']);
          } 
          if(usuario.tipo = "usuario"){
            this.router.navigate(['/inicial']);
          }
        }


      });
     }
  

  ngOnInit() {
     
  }
}
