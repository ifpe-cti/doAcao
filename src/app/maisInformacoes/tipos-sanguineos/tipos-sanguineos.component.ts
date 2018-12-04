import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tipos-sanguineos',
  templateUrl: './tipos-sanguineos.component.html',
  styleUrls: ['./tipos-sanguineos.component.css']
})
export class TiposSanguineosComponent implements OnInit {

  constructor(private router:Router) { }

  voltarPagina(){
    this.router.navigate(['informacoes-sobre-doacao'])
  }

  ngOnInit() {
  }

}
