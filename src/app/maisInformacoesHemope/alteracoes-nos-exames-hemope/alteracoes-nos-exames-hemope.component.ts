import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/primeng';
import { MenusService } from '../../menus.service';

@Component({
  selector: 'app-alteracoes-nos-exames-hemope',
  templateUrl: './alteracoes-nos-exames-hemope.component.html',
  styleUrls: ['./alteracoes-nos-exames-hemope.component.css']
})
export class AlteracoesNosExamesHemopeComponent implements OnInit {

  constructor(private menusSevice: MenusService, private router:Router) { }

  items: MenuItem[];

  ngOnInit() {
    this.items = this.menusSevice.itensMaisInformacoesHemope;
  }

}
