import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/primeng';
import { MenusService } from '../../menus.service';

@Component({
  selector: 'app-volume-de-sangue-hemope',
  templateUrl: './volume-de-sangue-hemope.component.html',
  styleUrls: ['./volume-de-sangue-hemope.component.css']
})
export class VolumeDeSangueHemopeComponent implements OnInit {

  constructor(private menusSevice: MenusService, private router:Router) { }

  items: MenuItem[];

  ngOnInit() {
    this.items = this.menusSevice.itensMaisInformacoesHemope;
  }

}
