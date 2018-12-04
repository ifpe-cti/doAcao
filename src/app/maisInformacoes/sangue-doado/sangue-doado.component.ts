import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sangue-doado',
  templateUrl: './sangue-doado.component.html',
  styleUrls: ['./sangue-doado.component.css']
})
export class SangueDoadoComponent implements OnInit {

  constructor(private router:Router) { }

  voltarPagina(){
    this.router.navigate(['informacoes-sobre-doacao'])
  }
  ngOnInit() {
  }

}
