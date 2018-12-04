import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-janela-imunologica',
  templateUrl: './janela-imunologica.component.html',
  styleUrls: ['./janela-imunologica.component.css']
})
export class JanelaImunologicaComponent implements OnInit {

  constructor(private router:Router) { }

  voltarPagina(){
    this.router.navigate(['informacoes-sobre-doacao'])
  }
  ngOnInit() {
  }

}
