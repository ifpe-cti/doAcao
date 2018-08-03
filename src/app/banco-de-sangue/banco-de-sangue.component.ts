import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-banco-de-sangue',
  templateUrl: './banco-de-sangue.component.html',
  styleUrls: ['./banco-de-sangue.component.css']
})

export class BancoDeSangueComponent implements OnInit {

  data: any;

  constructor(private router:Router) {
      this.data = {
          labels: ['O','B','A'],
          datasets: [
              {
                  data: [300, 50, 100],
                  backgroundColor: [
                      "#FF6384",
                      "#36A2EB",
                      "#FFCE56"
                  ],
                  hoverBackgroundColor: [
                      "#FF6384",
                      "#36A2EB",
                      "#FFCE56"
                  ]
              }]    
          };
  }
  voltarPaginaInicial(){
    this.router.navigate(['dashboard']);
   }

ngOnInit() {

}

  
}  

