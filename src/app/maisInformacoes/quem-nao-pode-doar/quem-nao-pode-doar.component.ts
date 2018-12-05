import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/primeng';
import { MenusService } from '../../menus.service';

@Component({
  selector: 'app-quem-nao-pode-doar',
  templateUrl: './quem-nao-pode-doar.component.html',
  styleUrls: ['./quem-nao-pode-doar.component.css']
})
export class QuemNaoPodeDoarComponent implements OnInit {

  constructor(private menusSevice: MenusService, private router:Router) { }

  items: MenuItem[];


  ngOnInit() {
    this.items = this.menusSevice.itensMaisInformacoes;
  }

}
