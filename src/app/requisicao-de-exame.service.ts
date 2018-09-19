import { Injectable } from '@angular/core';
import { RequisicaoDeExames } from './models/requisicao-de-exames';
import { AngularFirestore, AngularFirestoreCollection } from "angularfire2/firestore";

@Injectable({
  providedIn: 'root'
})
export class RequisicaoDeExameService {

  constructor(private servicoFirebase: AngularFirestore) {
    this.requisicaoDeExamesCollection = this.servicoFirebase.collection("requisicao-de-exames");
  }

  private requisicaoDeExamesCollection: AngularFirestoreCollection<RequisicaoDeExames>;  

  cadastrarRequisicaoExamesFirebase(requisicao: RequisicaoDeExames) {
    this.requisicaoDeExamesCollection.add(requisicao).then(
      resultado => {
        requisicao.id = resultado.id;
      });
  }

  apagarRequisicaoExamesFirebase(requisicao): Promise<void> {
    return this.requisicaoDeExamesCollection.doc(requisicao.id).delete();
  }


}


