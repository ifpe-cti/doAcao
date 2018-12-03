import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from "angularfire2/firestore";
import { Observable } from 'rxjs/Observable';
import { SolicitacaoSanguinea } from './models/solicitacaoSanguinea';

@Injectable({
  providedIn: 'root'
})
export class SolicitacaoDeSangueService {


  constructor(private servicoFirebase: AngularFirestore) {
    this.solicitacaoSangueCollection = this.servicoFirebase.collection("solicitacao-sanguinea");
  }

  private solicitacaoSangueCollection: AngularFirestoreCollection<SolicitacaoSanguinea>;

  cadastrarSolicitacaoSanguineaFirebase(solicitacaoSangue: SolicitacaoSanguinea) {
    this.solicitacaoSangueCollection.add(solicitacaoSangue).then(
      resultado => {
        solicitacaoSangue.id = resultado.id;
      });
  }

  listarTodas(): Observable<any[]> {
    let resultados: any[] = [];
    let solicitacoes = new Observable<any[]>(observer => {
      this.solicitacaoSangueCollection.snapshotChanges().subscribe(result => {
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
    return this.solicitacaoSangueCollection.doc(solicitacao.id).delete();
  }


}
