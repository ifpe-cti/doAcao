import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from "angularfire2/firestore";
import { Observable } from 'rxjs/Observable';
import { PedidoDeDoacao } from './models/pedido-de-doacao';

@Injectable({
  providedIn: 'root'
})
export class PedidosDoacaoService {

  constructor(private servicoFirebase: AngularFirestore) {
    this.pedidoDoacaoCollection = this.servicoFirebase.collection("pedido-de-doacao");
  }

  todosOsPedidos: PedidoDeDoacao[] = [];

  private pedidoDoacaoCollection: AngularFirestoreCollection<any>;

  cadastrarPedidoDeSangueFirebase(pedidoDeDoacao: PedidoDeDoacao) {
    this.pedidoDoacaoCollection.add(pedidoDeDoacao.toDocument()).then(
      resultado => {
        pedidoDeDoacao.id = resultado.id;
      });
  }

  listarTodos(): Observable<any[]> {
    let resultados: any[] = [];
    let pedidos = new Observable<any[]>(observer => {
      this.pedidoDoacaoCollection.snapshotChanges().subscribe(result => {
        result.map(documents => {
          let id = documents.payload.doc.id;
          let data = documents.payload.doc.data();
          let document = { id: id, ...data };
          resultados.push(document);
        });
        observer.next(resultados);
        observer.complete();
      });
    });
    return pedidos;
  }

  filtrarPedidosDeDoacaoPorTipoSanguineo(tipoSanguineo) {
    return new Observable<PedidoDeDoacao[]>(observer => {
      this.listarTodos()
        .subscribe(meuObservable => {
          this.todosOsPedidos = meuObservable as PedidoDeDoacao[]
          let pedidosFiltrados: any[] = [];

          for (let i = 0; i < this.todosOsPedidos.length; i++) {
            if (this.todosOsPedidos[i].tipoSanguineo == tipoSanguineo) {
              pedidosFiltrados.push(this.todosOsPedidos[i]);
            }
          }
          observer.next(pedidosFiltrados);
          observer.complete();

          return pedidosFiltrados;
        });
    });
  }

  atualizarPedidoFirebase(pedido: PedidoDeDoacao) {
    return this.pedidoDoacaoCollection.doc(pedido.id).update(pedido);
  }

  apagarPedidoFirebase(pedido): Promise<void> {
    return this.pedidoDoacaoCollection.doc(pedido.id).delete();
  }


}
