import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { MenuItem } from 'primeng/primeng';
import {UsuariosService} from './../usuarios.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboard-hemope',
  templateUrl: './dashboard-hemope.component.html',
  styleUrls: ['./dashboard-hemope.component.css']
})
export class DashboardHemopeComponent implements OnInit {


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

     redirecionarVisualizacaoAgendamentos(){
      this.router.navigate(['/visualizacao-agendamentos']);
     }

     redirecionarVisualizacaoFichasMedicas(){
      this.router.navigate(['/visualizacao-fichas-medicas']);
     }

     redirecionarVisualizacaoRequisicaoExames(){
      this.router.navigate(['/visualizacao-requisicao-exames']);
     }

     redirecionarListagemUsuarios(){
      this.router.navigate(['/listagem-de-usuarios']);
     }


  ngOnInit() {
    this.items = [
      {label: '  Adicioanr exame', icon: 'fa-book', routerLink:'/requisicao-de-exames'},
      {label: '  Adicionar ficha médica', icon: 'fa-book', routerLink:'/fichas-medicas'},
      {label: '  Agendar doação', icon: 'fa-book', routerLink:'/agendamento-de-doacoes'},
      {label: '  Todos os exames', icon: 'fa-book', routerLink:'/visualizacao-requisicao-exames'},
      {label: '  Todas as fichas médicas', icon: 'fa-book', routerLink:'/visualizacao-fichas-medicas'},
      {label: '  Todas os usuários', icon: 'fa-book', routerLink:'/listagem-usuarios'},
  ];
  }
}




 

   


