import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doacao-de-plaquetas',
  templateUrl: './doacao-de-plaquetas.component.html',
  styleUrls: ['./doacao-de-plaquetas.component.css']
})
export class DoacaoDePlaquetasComponent implements OnInit {

  constructor(private router:Router) { }

  voltarPagina(){
    this.router.navigate(['informacoes-sobre-doacao'])
  }
  ngOnInit() {
  }

}
