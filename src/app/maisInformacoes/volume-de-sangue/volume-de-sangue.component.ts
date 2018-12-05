import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-volume-de-sangue',
  templateUrl: './volume-de-sangue.component.html',
  styleUrls: ['./volume-de-sangue.component.css']
})
export class VolumeDeSangueComponent implements OnInit {

  constructor(private router:Router) { }

  voltarPagina(){
    this.router.navigate(['informacoes-sobre-doacao'])
  }

  ngOnInit() {
  }

}
