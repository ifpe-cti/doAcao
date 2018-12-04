import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doacao-de-medula',
  templateUrl: './doacao-de-medula.component.html',
  styleUrls: ['./doacao-de-medula.component.css']
})
export class DoacaoDeMedulaComponent implements OnInit {

  constructor(private router:Router) { }

  voltarPagina(){
    this.router.navigate(['informacoes-sobre-doacao'])
  }
  ngOnInit() {
  }

}
