import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-requisicao-do-exame',
  templateUrl: './requisicao-do-exame.component.html',
  styleUrls: ['./requisicao-do-exame.component.css']
})
export class RequisicaoDoExameComponent implements OnInit {

  sexosUsuario: String[];
  sexoEscolhido: String;

  
  constructor(private router:Router) {
    }

    voltarPaginaInicial(){
      this.router.navigate(['/inicial']);
    }




  ngOnInit() {
  }

}
