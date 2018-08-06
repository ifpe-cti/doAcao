import {Component, OnInit} from '@angular/core';
import {Usuario} from './../models/usuario';
import {UsuariosService} from './../usuarios.service';
import {Message} from 'primeng/components/common/api';
import { MenuItem } from 'primeng/primeng';
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

  
    constructor(private servicoUsuario: UsuariosService, private router:Router) { }
    

    loginUsuario(user, senha){
      user = this.userUsuario;
      senha = this.senhaUsuario;
      this.servicoUsuario.loginUsuario(user, senha).subscribe(usuario => {
        if(usuario == null){
          alert("Usuário não cadastrado no banco.")
        } else{
          console.log("Usuario "+ usuario.nome + " logado.");

          this.servicoUsuario.usuarioLogado = usuario; 
          
          this.router.navigate(['dashboard']); 
        }
      });
    }

    redirecionarLoginGoogle(){
      this.router.navigate(['/login-google']);
    }
    redirecionarCadastro(){
      this.router.navigate(['/cadastro']); 
     }
   
  ngOnInit() {
   
  }
}
