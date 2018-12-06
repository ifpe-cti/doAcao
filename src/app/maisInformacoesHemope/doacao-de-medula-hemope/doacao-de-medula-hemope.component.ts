import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/primeng';
import { MenusService } from '../../menus.service';

@Component({
  selector: 'app-doacao-de-medula-hemope',
  templateUrl: './doacao-de-medula-hemope.component.html',
  styleUrls: ['./doacao-de-medula-hemope.component.css']
})
export class DoacaoDeMedulaHemopeComponent implements OnInit {

  constructor(private menusSevice: MenusService, private router:Router  ) { }

  items: MenuItem[];

  ngOnInit() {
    this.items = this.menusSevice.itensMaisInformacoesHemope;
  }

}
