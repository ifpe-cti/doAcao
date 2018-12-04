import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/primeng';
import { MenusService } from '../menus.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-informacoes-sobre-doacao',
  templateUrl: './informacoes-sobre-doacao.component.html',
  styleUrls: ['./informacoes-sobre-doacao.component.css']
})
export class InformacoesSobreDoacaoComponent implements OnInit {

  constructor(private menusSevice: MenusService, private router:Router) { }

  items: MenuItem[];

  ngOnInit() {
    this.items = this.menusSevice.itensMaisInformacoes;
  }

}
