import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-importancia',
  templateUrl: './importancia.component.html',
  styleUrls: ['./importancia.component.css']
})
export class ImportanciaComponent implements OnInit {

  constructor(private router:Router) { }

  voltarPagina(){
    this.router.navigate(['informacoes-sobre-doacao'])
  }
  ngOnInit() {
  }

}
