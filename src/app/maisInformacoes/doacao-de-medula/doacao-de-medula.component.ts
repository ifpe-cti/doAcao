import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/primeng';
import { MenusService } from '../../menus.service';

@Component({
  selector: 'app-doacao-de-medula',
  templateUrl: './doacao-de-medula.component.html',
  styleUrls: ['./doacao-de-medula.component.css']
})
export class DoacaoDeMedulaComponent implements OnInit {

  constructor(private menusSevice: MenusService, private router:Router) { }

  items: MenuItem[];

  ngOnInit() {
    this.items = this.menusSevice.itensMaisInformacoes;
  }

}
