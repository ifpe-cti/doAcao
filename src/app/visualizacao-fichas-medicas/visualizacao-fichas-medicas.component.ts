import { Component, OnInit } from '@angular/core';
import {FichasMedicasService} from './../fichas-medicas.service';
import { Router} from '@angular/router';


@Component({
  selector: 'app-visualizacao-fichas-medicas',
  templateUrl: './visualizacao-fichas-medicas.component.html',
  styleUrls: ['./visualizacao-fichas-medicas.component.css']
})
export class VisualizacaoFichasMedicasComponent implements OnInit {

  fichasMedicas: any[] = [];
  fichaMedicaSelecionada;

  constructor(private fichasMedicasService: FichasMedicasService, 
    private router:Router) { }

  listarTodos(){
    this.fichasMedicasService.listarTodos().subscribe(fichasMedicas => {
      this.fichasMedicas = fichasMedicas;
    });
  }

  ngOnInit() {
  }

}
