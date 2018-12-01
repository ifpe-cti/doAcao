import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { MenuItem } from 'primeng/primeng';
import {UsuariosService} from '../usuarios.service';
import {Router} from '@angular/router';
import { MenusService } from '../menus.service';

@Component({
  selector: 'app-dashboard-hemope',
  templateUrl: './dashboard-hemope.component.html',
  styleUrls: ['./dashboard-hemope.component.css']
})
export class DashboardHemopeComponent implements OnInit {


  constructor(public authService: AuthService, private router:Router,
    private usuarioService: UsuariosService, private menusSevice: MenusService) { }

    items: MenuItem[];

    gruposUsuario: any[];
   
  ngOnInit() {
    this.items = this.menusSevice.itensHemope;

  }
}




 

   


