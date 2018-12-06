import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/primeng';
import { MenusService } from '../../menus.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alteracoes-nos-exames',
  templateUrl: './alteracoes-nos-exames.component.html',
  styleUrls: ['./alteracoes-nos-exames.component.css']
})
export class AlteracoesNosExamesComponent implements OnInit {

  constructor(private menusSevice: MenusService, private router:Router) { }

  items: MenuItem[];

  ngOnInit() {
    this.items = this.menusSevice.itensMaisInformacoesHemope;
  }

}
