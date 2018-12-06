import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/primeng';
import { MenusService } from '../../menus.service';

@Component({
  selector: 'app-estoque-de-sangue-hemope',
  templateUrl: './estoque-de-sangue-hemope.component.html',
  styleUrls: ['./estoque-de-sangue-hemope.component.css']
})
export class EstoqueDeSangueHemopeComponent implements OnInit {

  constructor(private menusSevice: MenusService, private router:Router) { }

  items: MenuItem[];

  ngOnInit() {
    this.items = this.menusSevice.itensMaisInformacoesHemope;
  }

}
