import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/primeng';
import { MenusService } from '../../menus.service';

@Component({
  selector: 'app-estoque-de-sangue',
  templateUrl: './estoque-de-sangue.component.html',
  styleUrls: ['./estoque-de-sangue.component.css']
})
export class EstoqueDeSangueComponent implements OnInit {

  constructor(private menusSevice: MenusService, private router:Router) { }

  items: MenuItem[];

  ngOnInit() {
    this.items = this.menusSevice.itensMaisInformacoes;
  }

}
