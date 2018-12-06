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

  data: any;
  items: MenuItem[];

  constructor(private menusSevice: MenusService, private router:Router) { 
    this.items = this.menusSevice.itensMaisInformacoes;
    this.data = {
      labels: ['A+','B+','O+','AB+','A-','B-','O-','AB-'],
      datasets: [
          {
              data: [36,9,37,3,6,2,7,1],
              backgroundColor: [
                "#FF0040",
                "#FE2E64",
                "#FA5882",
                "#F7819F",
                "#F5A9BC",
                "#F6CED8",
                "#FE2E9A",
                "#DF0174",
              ],
              hoverBackgroundColor: [
                "#FF0040",
                "#FE2E64",
                "#FA5882",
                "#F7819F",
                "#F5A9BC",
                "#F6CED8",
                "#FE2E9A",
                "#DF0174",
              ]
          }]    
      };
  }

  ngOnInit() {
    this.items = this.menusSevice.itensMaisInformacoesHemope;
  }

}
