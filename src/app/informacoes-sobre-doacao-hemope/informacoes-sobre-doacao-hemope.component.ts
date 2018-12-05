import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/primeng';
import { MenusService } from '../menus.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-informacoes-sobre-doacao-hemope',
  templateUrl: './informacoes-sobre-doacao-hemope.component.html',
  styleUrls: ['./informacoes-sobre-doacao-hemope.component.css']
})
export class InformacoesSobreDoacaoHemopeComponent implements OnInit {

  constructor(private menusSevice: MenusService, private router:Router) { }

  items: MenuItem[];

  ngOnInit() {
    this.items = this.menusSevice.itensMaisInformacoesHemope;
  }

}
