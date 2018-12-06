import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/primeng';
import { MenusService } from '../../menus.service';

@Component({
  selector: 'app-tipos-sanguineos-hemope',
  templateUrl: './tipos-sanguineos-hemope.component.html',
  styleUrls: ['./tipos-sanguineos-hemope.component.css']
})
export class TiposSanguineosHemopeComponent implements OnInit {

  constructor(private menusSevice: MenusService, private router:Router) { }

  items: MenuItem[];

  ngOnInit() {
    this.items = this.menusSevice.itensMaisInformacoesHemope;
  }

}
