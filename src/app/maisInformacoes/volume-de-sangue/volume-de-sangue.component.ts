import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/primeng';
import { MenusService } from '../../menus.service';

@Component({
  selector: 'app-volume-de-sangue',
  templateUrl: './volume-de-sangue.component.html',
  styleUrls: ['./volume-de-sangue.component.css']
})
export class VolumeDeSangueComponent implements OnInit {

  constructor(private menusSevice: MenusService, private router:Router) { }

  items: MenuItem[];


  ngOnInit() {
    this.items = this.menusSevice.itensMaisInformacoes;
  }

}
