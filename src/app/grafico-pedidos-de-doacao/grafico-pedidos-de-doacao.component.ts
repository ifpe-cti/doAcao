import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../usuarios.service';
import { MenuItem } from 'primeng/primeng';
import { MenusService } from '../menus.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-grafico-pedidos-de-doacao',
  templateUrl: './grafico-pedidos-de-doacao.component.html',
  styleUrls: ['./grafico-pedidos-de-doacao.component.css']
})
export class GraficoPedidosDeDoacaoComponent implements OnInit {

  items: MenuItem[];
  data: any;

  constructor( private router: Router,
    private servicoUsuario: UsuariosService, private menusService: MenusService) {
    
    this.data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
          {
              label: 'My First dataset',
              backgroundColor: '#42A5F5',
              borderColor: '#1E88E5',
              data: [65, 59, 80, 81, 56, 55, 40]
          },
          {
              label: 'My Second dataset',
              backgroundColor: '#9CCC65',
              borderColor: '#7CB342',
              data: [28, 48, 40, 19, 86, 27, 90]
          }
      ]
  }
   }

  ngOnInit() {
  }

}
