import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/primeng';
import { MenusService } from '../../menus.service';

@Component({
  selector: 'app-intervalo-hemope',
  templateUrl: './intervalo-hemope.component.html',
  styleUrls: ['./intervalo-hemope.component.css']
})
export class IntervaloHemopeComponent implements OnInit {

  constructor(private menusSevice: MenusService, private router:Router) { }

  items: MenuItem[];

  ngOnInit() {
    this.items = this.menusSevice.itensMaisInformacoesHemope;
  }

}
