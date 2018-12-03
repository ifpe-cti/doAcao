import { Component, OnInit } from '@angular/core';
import {RequisicaoDeExameService} from '../requisicao-de-exame.service';
import { Router} from '@angular/router';
import { MenuItem } from 'primeng/primeng';
import {MenusService} from '../menus.service';
import { RequisicaoDeExames } from '../models/requisicao-de-exames';

@Component({
  selector: 'app-visualizacao-requisicao-exames',
  templateUrl: './visualizacao-requisicao-exames.component.html',
  styleUrls: ['./visualizacao-requisicao-exames.component.css']
})
export class VisualizacaoRequisicaoExamesComponent implements OnInit {

  items: MenuItem[];
  exame: RequisicaoDeExames = {idDoador: "", numeroDocumentoDoador: "", 
  tipoDocumentoDoador: "", orgaoExpeditorDoador: "", nomeMaeDoador:"", 
  nomePaiDoador: "", tecnicoResponsavel: "", etiquetaDaAmostra: ""}; 

  displayDialog: boolean;
  selectedExame: RequisicaoDeExames;
  newExame: boolean;
  exames: RequisicaoDeExames[];
  cols: any[];
  

  constructor(private requisicaoExamesService: RequisicaoDeExameService, 
    private router:Router,  private menusSevice: MenusService) { }

    showDialogToAdd() {
      this.newExame = true;

      this.exame = {idDoador: "", numeroDocumentoDoador: "", 
      tipoDocumentoDoador: "", orgaoExpeditorDoador: "", nomeMaeDoador:"", 
      nomePaiDoador: "", tecnicoResponsavel: "", etiquetaDaAmostra: ""};
      this.displayDialog = true;
    }
  
  save() {
      let exames = [...this.exames];
      if (this.newExame)
          exames.push(this.exame);
      else
          exames[this.exames.indexOf(this.selectedExame)] = this.exame;
  
      this.exames = exames;
      this.exame = null;
      this.displayDialog = false;
  }
  
  delete() {
      let index = this.exames.indexOf(this.selectedExame);
      this.exames = this.exames.filter((val, i) => i != index);
      this.exame = null;
      this.displayDialog = false;
  
      this.requisicaoExamesService.apagarRequisicaoExamesFirebase(this.selectedExame);
  }
  
  onRowSelect(event) {
    this.newExame = false;
    this.exame = this.cloneExame(event.data);
    this.displayDialog = true;
  }
  
  cloneExame(e: RequisicaoDeExames): RequisicaoDeExames {
    let exame = {idDoador: "", numeroDocumentoDoador: "", 
    tipoDocumentoDoador: "", orgaoExpeditorDoador: "", nomeMaeDoador:"", 
    nomePaiDoador: "", tecnicoResponsavel: "", etiquetaDaAmostra: ""};

    for (let prop in e) {
        exame[prop] = e[prop];
    }
    return exame;
  
  }
  
 
  ngOnInit() { 
      this.items = this.menusSevice.itensHemope;
 
      this.cols = [
        { field: 'numeroDocumentoDoador', header: 'Número do documento do doador' },
        { field: 'etiquetaDaAmostra', header: 'Etiqueta da amostra' },
      ];

    this.requisicaoExamesService.listarTodos().subscribe(requisicaoExames => {
      this.exames = requisicaoExames;
    });
  }

}
