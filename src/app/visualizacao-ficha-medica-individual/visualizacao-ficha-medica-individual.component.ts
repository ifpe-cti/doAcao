import { Component, OnInit } from '@angular/core';
import { FichasMedicasService } from '../fichas-medicas.service';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/primeng';
import { MenusService } from '../menus.service';
import { UsuariosService } from '../usuarios.service';
import { FichaMedica } from '../models/ficha-medica';
import { Usuario } from '../models/usuario';

@Component({
  selector: 'app-visualizacao-ficha-medica-individual',
  templateUrl: './visualizacao-ficha-medica-individual.component.html',
  styleUrls: ['./visualizacao-ficha-medica-individual.component.css']
})
export class VisualizacaoFichaMedicaIndividualComponent implements OnInit {

  fichasIndividuais: any[] = [];

  usuarioLogado: Usuario = this.usuariosService.usuarioLogado;
  cols: any[];

  items: MenuItem[];
  activeItem: MenuItem;

  displayDialog: boolean;
  selectedFichaMedica: FichaMedica;
  fichaMedica: FichaMedica;

  newFichaMedica: boolean;

  constructor(private usuariosService: UsuariosService, private fichasMedicasService: FichasMedicasService,
    private menusService: MenusService) { }


  onRowSelect(event) {
    this.newFichaMedica = false;
    this.fichaMedica = this.cloneFichaMedica(event.data);
    this.displayDialog = true;
  }

  cloneFichaMedica(f: FichaMedica): FichaMedica {
    let ficha: FichaMedica = new FichaMedica()

    for (let prop in f) {
      ficha[prop] = f[prop];
    }
    return ficha;
  }


  ngOnInit() {

    this.fichasMedicasService.filtrarFichasMedicasPorCPF(this.usuarioLogado.cpf).subscribe(fichasFiltradas => {
      this.fichasIndividuais = fichasFiltradas;
    })

    this.cols = [
      { field: 'cpfDoador', header: 'CPF do Doador' },
      { field: 'numeroDoTubo', header: 'Número do tubo' },
    ];

    this.items = this.items = this.menusService.itensUsuario;


  }
}
