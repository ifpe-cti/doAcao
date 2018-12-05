import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pos-doacao',
  templateUrl: './pos-doacao.component.html',
  styleUrls: ['./pos-doacao.component.css']
})
export class PosDoacaoComponent implements OnInit {

  constructor(private router:Router) { }

  voltarPagina(){
    this.router.navigate(['informacoes-sobre-doacao'])
  }
  ngOnInit() {
  }

}
