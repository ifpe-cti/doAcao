import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-impedimentos',
  templateUrl: './impedimentos.component.html',
  styleUrls: ['./impedimentos.component.css']
})
export class ImpedimentosComponent implements OnInit {

  constructor(private router:Router) { }

  voltarPagina(){
    this.router.navigate(['informacoes-sobre-doacao'])
  }
  ngOnInit() {
  }

}
