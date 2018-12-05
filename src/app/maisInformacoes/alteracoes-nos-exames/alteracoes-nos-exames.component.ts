import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/primeng';
import { MenusService } from '../../menus.service';

@Component({
  selector: 'app-alteracoes-nos-exames',
  templateUrl: './alteracoes-nos-exames.component.html',
  styleUrls: ['./alteracoes-nos-exames.component.css']
})
export class AlteracoesNosExamesComponent implements OnInit {

  constructor(private menusSevice: MenusService, private router:Router) { }

  items: MenuItem[];

  ngOnInit() {
    this.items = this.menusSevice.itensMaisInformacoes;
  }

}
