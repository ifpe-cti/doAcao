import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-terceiro-requisito',
  templateUrl: './terceiro-requisito.component.html',
  styleUrls: ['./terceiro-requisito.component.css']
})
export class TerceiroRequisitoComponent implements OnInit {

  constructor(private router:Router) { }

  voltarPagina(){
    this.router.navigate(['informacoes-sobre-doacao'])
  }

  ngOnInit() {
  }

}
