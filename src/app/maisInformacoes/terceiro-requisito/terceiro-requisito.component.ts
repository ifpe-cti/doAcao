import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/primeng';
import { MenusService } from '../../menus.service';

@Component({
  selector: 'app-terceiro-requisito',
  templateUrl: './terceiro-requisito.component.html',
  styleUrls: ['./terceiro-requisito.component.css']
})
export class TerceiroRequisitoComponent implements OnInit {

  constructor(private menusSevice: MenusService, private router:Router) { }

  items: MenuItem[];


  ngOnInit() {
    this.items = this.menusSevice.itensMaisInformacoes;
  }

}
