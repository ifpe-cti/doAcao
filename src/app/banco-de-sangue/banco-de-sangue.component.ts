import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banco-de-sangue',
  templateUrl: './banco-de-sangue.component.html',
  styleUrls: ['./banco-de-sangue.component.css']
})

export class BancoDeSangueComponent implements OnInit {

  data: any;

  constructor() {
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

ngOnInit() {

}

  
}  

