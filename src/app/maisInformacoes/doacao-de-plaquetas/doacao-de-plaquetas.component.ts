import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/primeng';
import { MenusService } from '../../menus.service';

@Component({
  selector: 'app-doacao-de-plaquetas',
  templateUrl: './doacao-de-plaquetas.component.html',
  styleUrls: ['./doacao-de-plaquetas.component.css']
})
export class DoacaoDePlaquetasComponent implements OnInit {

  constructor(private menusSevice: MenusService, private router:Router) { }

  items: MenuItem[];

  ngOnInit() {
    this.items = this.menusSevice.itensMaisInformacoes;
  }

}
