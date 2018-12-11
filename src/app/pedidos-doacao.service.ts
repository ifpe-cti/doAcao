import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from "angularfire2/firestore";
import { Observable } from 'rxjs/Observable';
import { SolicitacaoSanguinea } from './models/solicitacaoSanguinea';

@Injectable({
  providedIn: 'root'
})
export class PedidosDoacaoService {

 constructor(private servicoFirebase: AngularFirestore) {
    this.pedidoDoacaoCollection = this.servicoFirebase.collection("pedido-de-doacao");
  }

  private pedidoDoacaoCollection: AngularFirestoreCollection<any>;

  cadastrarPedidoDeSangueFirebase(solicitacaoSangue: SolicitacaoSanguinea) {
    this.pedidoDoacaoCollection.add(solicitacaoSangue.toDocument()).then(
      resultado => {
        solicitacaoSangue.id = resultado.id;
      });
  }

  listarTodas(): Observable<any[]> {
    let resultados: any[] = [];
    let solicitacoes = new Observable<any[]>(observer => {
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
    return solicitacoes;
  }

  apagarSolicitacaoFirebase(solicitacao): Promise<void> {
    return this.pedidoDoacaoCollection.doc(solicitacao.id).delete();
  }


}
