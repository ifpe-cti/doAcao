import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tipos-sanguineos',
  templateUrl: './tipos-sanguineos.component.html',
  styleUrls: ['./tipos-sanguineos.component.css']
})
export class TiposSanguineosComponent implements OnInit {
  
  data: any;

  constructor(private router:Router) { 
    this.data = {
      labels: ['A+','B+','O+','AB+','A-','B-','O-','AB-'],
      datasets: [
          {
              data: [300, 50, 100, 20, 12, 47,87,9],
              backgroundColor: [
                  "#FF6384",
                  "#36A2EB",
                  "#FFCE56",
                  "#FF6384",
                  "#36A2EB",
                  "#FFCE56",
                  "#FF6384",
                  "#36A2EB",
              ],
              hoverBackgroundColor: [
                  "#FF6384",
                  "#36A2EB",
                  "#FFCE56",
                  "#FF6384",
                  "#36A2EB",
                  "#FFCE56",
                  "#FF6384",
                  "#36A2EB",
              ]
          }]    
      };
  }

  voltarPagina(){
    this.router.navigate(['informacoes-sobre-doacao'])
  }

  ngOnInit() {
  }

}
