import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alteracoes-nos-exames',
  templateUrl: './alteracoes-nos-exames.component.html',
  styleUrls: ['./alteracoes-nos-exames.component.css']
})
export class AlteracoesNosExamesComponent implements OnInit {

  constructor(private router:Router) { }

  voltarPagina(){
    this.router.navigate(['informacoes-sobre-doacao'])
  }
  ngOnInit() {
  }

}
