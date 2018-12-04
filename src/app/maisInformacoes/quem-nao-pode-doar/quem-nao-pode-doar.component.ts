import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quem-nao-pode-doar',
  templateUrl: './quem-nao-pode-doar.component.html',
  styleUrls: ['./quem-nao-pode-doar.component.css']
})
export class QuemNaoPodeDoarComponent implements OnInit {

  constructor(private router:Router) { }

  voltarPagina(){
    this.router.navigate(['informacoes-sobre-doacao'])
  }

  ngOnInit() {
  }

}
