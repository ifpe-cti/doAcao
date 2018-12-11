import { Component, OnInit } from '@angular/core';
import { PedidosDoacaoService } from '../pedidos-doacao.service';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/primeng';
import { MenusService } from '../menus.service';
import { UsuariosService } from '../usuarios.service';
import { PedidoDeDoacao } from '../models/pedido-de-doacao';
import { Usuario } from '../models/usuario';


@Component({
  selector: 'app-listagem-pedidos-por-sangue',
  templateUrl: './listagem-pedidos-por-sangue.component.html',
  styleUrls: ['./listagem-pedidos-por-sangue.component.css']
})
export class ListagemPedidosPorSangueComponent implements OnInit {

  usuarioLogado: Usuario = this.usuarioService.usuarioLogado;

  pedidosFiltrados: PedidoDeDoacao [] = [];
  cols: any[];
  items: MenuItem[];

  pedidoDeDoacao: PedidoDeDoacao;

  displayDialog: boolean;
  selectedPedido: PedidoDeDoacao;
 

  newPedido: boolean;


  constructor(private pedidosDeDoacaoService: PedidosDoacaoService, private usuarioService: UsuariosService,
  private menusService: MenusService) { }

  onRowSelect(event) {
    this.newPedido = false;
    this.pedidoDeDoacao = this.cloneFichaMedica(event.data);
    this.displayDialog = true;
  }
  
  cloneFichaMedica(p: PedidoDeDoacao): PedidoDeDoacao {
    let pedido: PedidoDeDoacao = new PedidoDeDoacao()

    for (let prop in p) {
        pedido[prop] = p[prop];
    }
    return pedido;
  }


  ngOnInit() {
      this.pedidosDeDoacaoService.filtrarPedidosDeDoacaoPorTipoSanguineo(this.usuarioLogado.tipoSanguineo).subscribe( pedidos => {
      this.pedidosFiltrados = pedidos;
    })

    this.cols = [
      { field: 'nomeUsuario', header: 'Nome do solicitante' },
      { field: 'tipoSanguineo', header: 'Tipo do sangue solicitado'}
    ]

    this.items = this.menusService.itensUsuario;

  }

}
