import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-porque-doar',
  templateUrl: './porque-doar.component.html',
  styleUrls: ['./porque-doar.component.css']
})
export class PorqueDoarComponent implements OnInit {

  constructor(private router:Router) { }

  voltarPagina(){
    this.router.navigate(['informacoes-sobre-doacao'])
  }
  ngOnInit() {
  }

}
