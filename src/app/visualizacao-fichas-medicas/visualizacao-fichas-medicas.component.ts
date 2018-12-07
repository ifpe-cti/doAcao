import { Component, OnInit } from '@angular/core';
import {FichasMedicasService} from '../fichas-medicas.service';
import { Router} from '@angular/router';
import { MenuItem } from 'primeng/primeng';
import { MenusService } from '../menus.service';
import { FichaMedica } from '../models/ficha-medica';


@Component({
  selector: 'app-visualizacao-fichas-medicas',
  templateUrl: './visualizacao-fichas-medicas.component.html',
  styleUrls: ['./visualizacao-fichas-medicas.component.css']
})
export class VisualizacaoFichasMedicasComponent implements OnInit {
 
  items: MenuItem[];

  fichaMedica: FichaMedica = new FichaMedica()

  displayDialog: boolean;
  selectedFicha: FichaMedica;
  newFicha: boolean;
  fichasMedicas: FichaMedica[] = [];
  cols: any[];

  constructor(private fichasMedicasService: FichasMedicasService, 
    private router:Router, private menusService: MenusService) { }

  save() {
      let fichas = [...this.fichasMedicas];
      if (this.newFicha)
          this.fichasMedicas.push(this.fichaMedica);
      else
          fichas[this.fichasMedicas.indexOf(this.selectedFicha)] = this.fichaMedica;
  
      this.fichasMedicas = fichas;
      this.fichaMedica = null;
      this.displayDialog = false;
  }
  
  delete() {
      let index = this.fichasMedicas.indexOf(this.selectedFicha);
      this.fichasMedicas = this.fichasMedicas.filter((val, i) => i != index);
      this.fichaMedica = null;
      this.displayDialog = false;
  
      this.fichasMedicasService.apagarFichaMedicaFirebase(this.selectedFicha);
  }
  
  onRowSelect(event) {
    this.newFicha = false;
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
    this.items = this.menusService.itensHemope;

    this.cols = [
      { field: 'cpfDoador', header: 'CPF do Doador' },
      { field: 'numeroDoTubo', header: 'Número do tubo' },
    ];

    this.fichasMedicasService.listarTodos().subscribe(fichasMedicas => {
      this.fichasMedicas = fichasMedicas;
    });
  }

}
