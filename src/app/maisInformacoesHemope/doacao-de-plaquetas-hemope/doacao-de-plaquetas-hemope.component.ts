import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/primeng';
import { MenusService } from '../../menus.service';

@Component({
  selector: 'app-doacao-de-plaquetas-hemope',
  templateUrl: './doacao-de-plaquetas-hemope.component.html',
  styleUrls: ['./doacao-de-plaquetas-hemope.component.css']
})
export class DoacaoDePlaquetasHemopeComponent implements OnInit {

  constructor(private menusSevice: MenusService, private router:Router) { }

  items: MenuItem[];

  ngOnInit() {
    this.items = this.menusSevice.itensMaisInformacoesHemope;
  }

}
