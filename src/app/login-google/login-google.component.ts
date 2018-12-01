import { Component, OnInit } from '@angular/core';
import {Usuario} from '../models/usuario';
import {UsuariosService} from '../usuarios.service';
import {Message} from 'primeng/components/common/api';

import {Router} from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login-google',
  templateUrl: './login-google.component.html',
  styleUrls: ['./login-google.component.css']
})
export class LoginGoogleComponent implements OnInit {
 
  user = {
    email: '',
    password: ''
  };

  constructor(private servicoUsuario: UsuariosService, private router:Router,
     private authService: AuthService, ) { }
    
    redirecionarLoginGoogle(){
      this.router.navigate(['dashboard']); 
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
        .catch((err) => console.log('error: ' + err)); //erro aqui
    }
     <button type="buton" class="btn btn-primary btn-block" style="margin-bottom: 20px" (click)="signInWithEmail()" [disabled]="formCtrl.form.invalid">
       Login with Email
        </button>
*/
       redirecionarCadastro(){
        this.router.navigate(['/dashboard']); 
       }

  
    
  ngOnInit() {}

}
