import { Component, OnInit } from '@angular/core';
import {RequisicaoDeExameService} from './../requisicao-de-exame.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-visualizacao-requisicao-exames',
  templateUrl: './visualizacao-requisicao-exames.component.html',
  styleUrls: ['./visualizacao-requisicao-exames.component.css']
})
export class VisualizacaoRequisicaoExamesComponent implements OnInit {

  requisicaoExames: any[] = [];
  requisicaoSelecionada;

  constructor(private requisicaoExamesService: RequisicaoDeExameService, 
    private router:Router) { }

  ngOnInit() {
    this.requisicaoExamesService.listarTodos().subscribe(requisicaoExames => {
      this.requisicaoExames = requisicaoExames;
    });
  }

}
