import { Component, OnInit } from '@angular/core';
import { SolicitacaoDeSangueService } from '../solicitacao-de-sangue.service';
import { PedidosDoacaoService } from '../pedidos-doacao.service';
import { Router } from '@angular/router';
import { MenusService } from '../menus.service';
import { MenuItem } from 'primeng/primeng';
import { SolicitacaoSanguinea } from '../models/solicitacaoSanguinea';
import { PedidoDeDoacao } from '../models/pedido-de-doacao';

@Component({
  selector: 'app-visualizacao-solicitacoes',
  templateUrl: './visualizacao-solicitacoes.component.html',
  styleUrls: ['./visualizacao-solicitacoes.component.css']
})
export class VisualizacaoSolicitacoesComponent implements OnInit {

  items: MenuItem[];

  solicitacaoSanguinea: SolicitacaoSanguinea = new SolicitacaoSanguinea();

  pedidoDeDoacao: PedidoDeDoacao = new PedidoDeDoacao();

  displayDialog: boolean;
  selectedSolicitacao: SolicitacaoSanguinea;
  newSolicitacao: boolean;

  solicitacoes: SolicitacaoSanguinea[] = [];
  cols: any[];


  constructor(private solicitacaoDeSangueService: SolicitacaoDeSangueService,
    private router: Router, private menusService: MenusService, private pedidosDoacaoService: PedidosDoacaoService) { }

  showDialogToAdd() {
    this.newSolicitacao = true;
    this.solicitacaoSanguinea = new SolicitacaoSanguinea();
    this.displayDialog = true;
  }

  save() {
    let solicitacoes = [...this.solicitacoes];
    if (this.newSolicitacao)
      solicitacoes.push(this.solicitacaoSanguinea);
    else
      solicitacoes[this.solicitacoes.indexOf(this.selectedSolicitacao)] = this.solicitacaoSanguinea;

    this.solicitacoes = solicitacoes;
    this.solicitacaoSanguinea = null;
    this.displayDialog = false;
  }

/**
 * 
  delete() {
    let index = this.solicitacoes.indexOf(this.selectedSolicitacao);
    this.solicitacoes = this.solicitacoes.filter((val, i) => i != index);
    this.solicitacaoSanguinea = null;
    this.displayDialog = false;

    this.solicitacaoDeSangueService.apagarSolicitacaoFirebase(this.selectedSolicitacao);
  }
 */


  onRowSelect(event) {
    this.newSolicitacao = false;
    this.solicitacaoSanguinea = this.cloneSolicitacao(event.data);
    this.displayDialog = true;
  }

  cloneSolicitacao(s: SolicitacaoSanguinea): SolicitacaoSanguinea {
    let solicitacao: SolicitacaoSanguinea = new SolicitacaoSanguinea()
    for (let prop in s) {
      solicitacao[prop] = s[prop];
    }
    return solicitacao;

  }

  aprovar(){
    this.pedidoDeDoacao.cpfUsuario = this.selectedSolicitacao.cpfUsuario;
    this.pedidoDeDoacao.nomeUsuario = this.solicitacaoSanguinea.nomeUsuario;
    this.pedidoDeDoacao.tipoSanguineo = this.solicitacaoSanguinea.tipoSanguineo;
    
   this.pedidosDoacaoService.cadastrarPedidoDeSangueFirebase(this.pedidoDeDoacao);

   let index = this.solicitacoes.indexOf(this.selectedSolicitacao);
   this.solicitacoes = this.solicitacoes.filter((val, i) => i != index);
   this.solicitacaoSanguinea = null;
   this.displayDialog = false;

  this.solicitacaoDeSangueService.apagarSolicitacaoFirebase(this.selectedSolicitacao);

  }

  ngOnInit() {
    this.items = this.items = this.menusService.itensHemope;

    this.solicitacaoDeSangueService.listarTodas().subscribe(solicitacoesSanguineas => {
      this.solicitacoes = solicitacoesSanguineas;
    });

    this.cols = [
      { field: 'nomeUsuario', header: 'Nome do solicitante' },
      { field: 'cpfUsuario', header: 'CPF do solicitante' },
      { field: 'tipoSanguineo', header: 'Tipo do sangue solicitado' }
    ]

  }
}
