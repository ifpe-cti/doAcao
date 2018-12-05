import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/primeng';
import { MenusService } from '../../menus.service';

@Component({
  selector: 'app-janela-imunologica',
  templateUrl: './janela-imunologica.component.html',
  styleUrls: ['./janela-imunologica.component.css']
})
export class JanelaImunologicaComponent implements OnInit {

  constructor(private menusSevice: MenusService, private router:Router) { }

  items: MenuItem[];

  ngOnInit() {
    this.items = this.menusSevice.itensMaisInformacoes;
  }

}
