import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { MenuItem } from 'primeng/primeng';
import { UsuariosService } from '../usuarios.service';
import { Router } from '@angular/router';
import { MenusService } from '../menus.service';
import { Message } from 'primeng/components/common/api';
import { FormGroup } from '@angular/forms';


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
   
    display: boolean = false;

    quemSomos() {
        this.display = true;
    }
    
    maisInformacoes(){
      this.router.navigate(['/informacoes-sobre-doacao']);
   }


  ngOnInit() {
    this.items = this.menusSevice.itensHemope;
    this.msgs = [];
  }
}




 

   


