import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-estoque-de-sangue',
  templateUrl: './estoque-de-sangue.component.html',
  styleUrls: ['./estoque-de-sangue.component.css']
})
export class EstoqueDeSangueComponent implements OnInit {

  constructor(private router:Router) { }

  voltarPagina(){
    this.router.navigate(['informacoes-sobre-doacao'])
  }
  ngOnInit() {
  }

}
