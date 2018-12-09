import { Component, OnInit } from '@angular/core';
import {FichasMedicasService} from '../fichas-medicas.service';
import { Router} from '@angular/router';
import { MenuItem } from 'primeng/primeng';
import { MenusService } from '../menus.service';
import { UsuariosService } from '../usuarios.service';
import { FichaMedica } from '../models/ficha-medica';

@Component({
  selector: 'app-visualizacao-ficha-medica-individual',
  templateUrl: './visualizacao-ficha-medica-individual.component.html',
  styleUrls: ['./visualizacao-ficha-medica-individual.component.css']
})
export class VisualizacaoFichaMedicaIndividualComponent implements OnInit {

  fichasFiltradas: FichaMedica [] = [];

  constructor(private usuariosService: UsuariosService, private fichasMedicasService: FichasMedicasService) { }

  ngOnInit() {
    this.fichasMedicasService.filtrarFichasMedicasPorCPF(this.usuariosService.usuarioLogado.cpf).subscribe(fichasFiltradas => {
      this.fichasFiltradas = fichasFiltradas;
    });
  }
}
