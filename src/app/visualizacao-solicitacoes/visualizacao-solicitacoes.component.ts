import { Component, OnInit } from '@angular/core';
import { SolicitacaoDeSangueService } from '../solicitacao-de-sangue.service';
import { Router } from '@angular/router';
import { MenusService } from '../menus.service';
import { MenuItem } from 'primeng/primeng';

@Component({
  selector: 'app-visualizacao-solicitacoes',
  templateUrl: './visualizacao-solicitacoes.component.html',
  styleUrls: ['./visualizacao-solicitacoes.component.css']
})
export class VisualizacaoSolicitacoesComponent implements OnInit {

  items: MenuItem[];

  solicitacoesSanguineas: any[] = [];
  solicitacaoSelecionada;


  constructor(private solicitacaoDeSangueService: SolicitacaoDeSangueService,
    private router: Router, private menusService: MenusService) { }

  ngOnInit() {
    this.items = this.items = this.menusService.itensHemope;

    this.solicitacaoDeSangueService.listarTodas().subscribe(solicitacoes => {
      this.solicitacoesSanguineas = solicitacoes;
    });
  }
}
