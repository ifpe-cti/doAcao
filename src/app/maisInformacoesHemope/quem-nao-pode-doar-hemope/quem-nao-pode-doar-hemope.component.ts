import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/primeng';
import { MenusService } from '../../menus.service';

@Component({
  selector: 'app-quem-nao-pode-doar-hemope',
  templateUrl: './quem-nao-pode-doar-hemope.component.html',
  styleUrls: ['./quem-nao-pode-doar-hemope.component.css']
})
export class QuemNaoPodeDoarHemopeComponent implements OnInit {

  constructor(private menusSevice: MenusService, private router:Router) { }

  items: MenuItem[];

  ngOnInit() {
    this.items = this.menusSevice.itensMaisInformacoesHemope;
  }

}
