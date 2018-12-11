import { Component, OnInit } from '@angular/core';
import { PedidosDoacaoService } from '../pedidos-doacao.service';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/primeng';
import { MenusService } from '../menus.service';
import { PedidoDeDoacao } from '../models/pedido-de-doacao';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-listagem-pedidos',
  templateUrl: './listagem-pedidos.component.html',
  styleUrls: ['./listagem-pedidos.component.css']
})
export class ListagemPedidosComponent implements OnInit {

  pedidosDeDoacao: PedidoDeDoacao [] = [];
  items: MenuItem[];

  pedidoSelecionado;



  pedidoDoacao: PedidoDeDoacao = new PedidoDeDoacao();

  displayDialog: boolean;
  selectedPedidoDoacao: PedidoDeDoacao;
  newPedidoDoacao: boolean;
  cols: any[];

  constructor(private menusService: MenusService, private pedidosDeDoacaoService: PedidosDoacaoService) { }

  update() {
    let pedidos = [...this.pedidosDeDoacao];
    if (this.newPedidoDoacao)
      pedidos.push(this.pedidoDoacao);
    else
      pedidos[this.pedidosDeDoacao.indexOf(this.selectedPedidoDoacao)] = this.pedidoDoacao;

    this.pedidosDeDoacao = pedidos;
    this.pedidoDoacao = null;
    this.displayDialog = false;
    
    this.pedidosDeDoacaoService.atualizarPedidoFirebase(this.pedidoDoacao);
  }

  delete() {
    let index = this.pedidosDeDoacao.indexOf(this.selectedPedidoDoacao);
    this.pedidosDeDoacao = this.pedidosDeDoacao.filter((val, i) => i != index);
    this.pedidoDoacao = null;
    this.displayDialog = false;

    this.pedidosDeDoacaoService.apagarPedidoFirebase(this.selectedPedidoDoacao);
  }

  onRowSelect(event) {
    this.newPedidoDoacao = false;
    this.pedidoDoacao = this.clonePedidoDoacao(event.data);
    this.displayDialog = true;
  }

  clonePedidoDoacao(p: PedidoDeDoacao): PedidoDeDoacao {
    let pedido = new PedidoDeDoacao();

    for (let prop in p) {
      pedido[prop] = p[prop];
    }
    return pedido;
  }


  ngOnInit() {
    this.pedidosDeDoacaoService.listarTodos().subscribe( pedidos => { 
      this.pedidosDeDoacao = pedidos;
    })

    this.items = this.menusService.itensHemope;

  }

}
