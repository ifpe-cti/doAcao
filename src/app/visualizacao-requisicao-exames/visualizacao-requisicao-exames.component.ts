import { Component, OnInit } from '@angular/core';
import {RequisicaoDeExameService} from '../requisicao-de-exame.service';
import { Router} from '@angular/router';
import { MenuItem } from 'primeng/primeng';
import {MenusService} from '../menus.service';
import {TecnicoService} from '../tecnicos.service';
import { RequisicaoDeExames } from '../models/requisicao-de-exames';
import { Tecnico } from '../models/tecnico';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-visualizacao-requisicao-exames',
  templateUrl: './visualizacao-requisicao-exames.component.html',
  styleUrls: ['./visualizacao-requisicao-exames.component.css']
})
export class VisualizacaoRequisicaoExamesComponent implements OnInit {

  items: MenuItem[];
  exame: RequisicaoDeExames = new RequisicaoDeExames()

  displayDialog: boolean;
  selectedExame: RequisicaoDeExames;
  newExame: boolean;
  exames: RequisicaoDeExames[];
  cols: any[];

  tiposDocumento: SelectItem[];
  orgaosExpeditores: SelectItem[];

  tecnicos: Tecnico[] = [];
  

  constructor(private requisicaoExamesService: RequisicaoDeExameService, 
    private router:Router,  private menusSevice: MenusService, private tecnicoService: TecnicoService) { }

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
    let exame: RequisicaoDeExames = new RequisicaoDeExames()

    for (let prop in e) {
        exame[prop] = e[prop];
    }
    return exame;
  }
  
 
  ngOnInit() { 
      this.items = this.menusSevice.itensHemope;
 
      this.tiposDocumento = [
        { label: 'Tipo de Documento', value: null },
        { label: 'Cédula de Identidade', value: "Carteira de Identidade" },
        { label: 'Identificação Oficial para Estrangeiros', value: 'Identificação Oficial para Estrangeiros' },
        { label: 'Carteira de Previcência Social', value: 'Carteira de Previcência Social' },
        { label: 'Passaporte', value: 'Passaporte' },
        { label: 'Certificado de Reservista', value: 'Certificado de Reservista' },
        { label: 'Carteira Nacional de Habilitação', value: 'Carteira Nacional de Habilitação' }
      ]
  
      this.orgaosExpeditores = [
        { label: 'Órgão Expeditor', value: null },
        { label: 'SSP — Secretaria de Segurança Pública', value: "SSP" },
        { label: 'SSD — Secretaria de Defesa Social', value: "SSD" },
        { label: 'DETRAN — Departamento Estadual de Trânsito', value: "DETRAN" },
        { label: 'MA — Ministério da Aeronáutica', value: "MA" },
        { label: 'MM — Ministério da Marinha', value: "MM" },
        { label: 'ME — Ministério do Exército', value: "ME" },
        { label: 'MT — Ministério do Trabalho', value: "MT" },
        { label: 'CNIG — Conselho Nacional de Imigração', value: "CNIG" },
      ]

      this.cols = [
        { field: 'numeroDocumentoDoador', header: 'Número do documento do doador' },
        { field: 'etiquetaDaAmostra', header: 'Etiqueta da amostra' },
      ];

    this.requisicaoExamesService.listarTodos().subscribe(requisicaoExames => {
      this.exames = requisicaoExames;
    });

    this.tecnicoService.listarTodos().subscribe(tecnicos => {
      this.tecnicos = tecnicos;
    })
    
  }

}
