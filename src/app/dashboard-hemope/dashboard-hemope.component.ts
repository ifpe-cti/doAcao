import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { MenuItem } from 'primeng/primeng';
import {UsuariosService} from '../usuarios.service';
import {Router} from '@angular/router';
import { MenusService } from '../menus.service';
import { Message } from 'primeng/components/common/api';
import { FormGroup } from '../../../node_modules/@angular/forms';


@Component({
  selector: 'app-dashboard-hemope',
  templateUrl: './dashboard-hemope.component.html',
  styleUrls: ['./dashboard-hemope.component.css']
})
export class DashboardHemopeComponent implements OnInit {


  constructor(public authService: AuthService, private router:Router,
    private usuarioService: UsuariosService, private menusSevice: MenusService) { }

    items: MenuItem[];
    msgs: Message[];
    gruposUsuario: any[];
   
    quemSomos(){
      alert("Esse projeto é uma Prática Profissional Orientada (PPO). Orientado por Leonardo Soares e cujas orientandas são Joanne Gabriela e Milena Siqueira.");
    }

    maisInformacoes(){}

  ngOnInit() {
    this.items = this.menusSevice.itensHemope;
    this.msgs = [];
  }
}




 

   


