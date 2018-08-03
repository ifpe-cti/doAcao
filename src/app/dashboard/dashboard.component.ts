import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { MenuItem } from 'primeng/primeng';
import {UsuariosService} from './../usuarios.service';
import {Message} from 'primeng/components/common/api';
import {Router} from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(public authService: AuthService, private router:Router,
    private usuarioService: UsuariosService  ) { }

    items: MenuItem[];
    gruposUsuario: any[];
    //idUsuarioLogado = this.usuarioService.usuarioLogado.id;

    redirecionarInclusaodeExames(){
      this.router.navigate(['/requisicao-do-exame']);
     }

     redirecionarFichaMedicas(){
      this.router.navigate(['/fichas-medicas']);
     }


     redirecionarBancoDeSangue(){
      this.router.navigate(['/banco-de-sangue']);
     }

     redirecionarAgendamentoDeDoacoes(){
      this.router.navigate(['/agendamento-de-doacoes']);
     }


  ngOnInit() {
    this.items = [
      {label: 'Página Inicial', icon: 'fa-calendar', routerLink:'/inicial'},
      {label: 'Sair', icon: 'fa-book', routerLink:'/login'},
  ];
  }
}




 

   


