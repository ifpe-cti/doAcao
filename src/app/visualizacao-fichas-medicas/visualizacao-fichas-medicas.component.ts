import { Component, OnInit } from '@angular/core';
import {FichasMedicasService} from './../fichas-medicas.service';
import { Router} from '@angular/router';
import { MenuItem } from 'primeng/primeng';
import { MenusService } from '../menus.service';


@Component({
  selector: 'app-visualizacao-fichas-medicas',
  templateUrl: './visualizacao-fichas-medicas.component.html',
  styleUrls: ['./visualizacao-fichas-medicas.component.css']
})
export class VisualizacaoFichasMedicasComponent implements OnInit {
 
  items: MenuItem[];

  fichasMedicas: any[] = [];
  fichaMedicaSelecionada;

  constructor(private fichasMedicasService: FichasMedicasService, 
    private router:Router, private menusService: MenusService) { }

    voltarPaginaInicial(){
      this.router.navigate(['dashboard-hemope']);
     }

  ngOnInit() {
    this.items = this.menusService.itensHemope;

    this.fichasMedicasService.listarTodos().subscribe(fichasMedicas => {
      this.fichasMedicas = fichasMedicas;
    });
  }

}
