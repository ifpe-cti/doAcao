import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/primeng';
import { MenusService } from '../../menus.service';

@Component({
  selector: 'app-reacoes-adversas-hemope',
  templateUrl: './reacoes-adversas-hemope.component.html',
  styleUrls: ['./reacoes-adversas-hemope.component.css']
})
export class ReacoesAdversasHemopeComponent implements OnInit {

  constructor(private menusSevice: MenusService, private router:Router) { }

  items: MenuItem[];

  ngOnInit() {
    this.items = this.menusSevice.itensMaisInformacoesHemope;
  }

}
