import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/primeng';
import { MenusService } from '../../menus.service';

@Component({
  selector: 'app-janela-imunologica-hemope',
  templateUrl: './janela-imunologica-hemope.component.html',
  styleUrls: ['./janela-imunologica-hemope.component.css']
})
export class JanelaImunologicaHemopeComponent implements OnInit {

  constructor(private menusSevice: MenusService, private router:Router) { }

  items: MenuItem[];

  ngOnInit() {
    this.items = this.menusSevice.itensMaisInformacoesHemope;
  }

}
