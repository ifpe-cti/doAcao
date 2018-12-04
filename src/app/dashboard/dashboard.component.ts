import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { MenuItem } from 'primeng/primeng';
import { UsuariosService } from '../usuarios.service';
import { Router } from '@angular/router';
import { MenusService } from '../menus.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(public authService: AuthService, private router: Router,
    private usuarioService: UsuariosService, private menusService: MenusService) { }

  items: MenuItem[];
  gruposUsuario: any[];
  //idUsuarioLogado = this.usuarioService.usuarioLogado.id;
  quemSomos(){
    alert("Esse projeto é uma Prática Profissional Orientada (PPO). Orientado por Leonardo Soares e cujas orientandas são Joanne Gabriela e Milena Siqueira.");
  }
  
  maisInformacoes(){
    this.router.navigate(['/informacoes-sobre-doacao']);
 }

  ngOnInit() {
    this.items = this.menusService.itensUsuario;
  }
}









