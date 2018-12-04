import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reacoes-adversas',
  templateUrl: './reacoes-adversas.component.html',
  styleUrls: ['./reacoes-adversas.component.css']
})
export class ReacoesAdversasComponent implements OnInit {

  constructor(private router:Router) { }

  voltarPagina(){
    this.router.navigate(['informacoes-sobre-doacao'])
  }
  ngOnInit() {
  }

}
