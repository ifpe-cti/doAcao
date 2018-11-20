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
}
