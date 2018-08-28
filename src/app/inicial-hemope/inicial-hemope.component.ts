import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-inicial-hemope',
  templateUrl: './inicial-hemope.component.html',
  styleUrls: ['./inicial-hemope.component.css']
})
export class InicialHemopeComponent implements OnInit {

  constructor(private router:Router) { }


  redirecionarVisualizacaoDeDoacoes(){
    this.router.navigate(['/visualizacao-agendamentos']);
  }

  redirecionarFichasMedicas(){
    this.router.navigate(['/visualizacao-fichas-medicas']);
  }

  redirecionarRequisicaoDeExames(){
    
  }

  redirecionarViewBancoDeSangue(){
    this.router.navigate(['/visualizacao-banco-de-sangue']);
  }

  ngOnInit() {
  }

}
