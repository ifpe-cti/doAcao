import { Injectable } from '@angular/core';
import { RequisicaoDeExames } from './models/requisicao-de-exames';
import { AngularFirestore, AngularFirestoreCollection } from "angularfire2/firestore";
import {Observable} from 'rxjs/Observable';

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

  listarTodos(){
    let resultados: any[] = [];
    let requisicaoExames = new Observable<any[]>(observer => {
      this.requisicaoDeExamesCollection.snapshotChanges().subscribe(result => {
        result.map(documents => {
          let id = documents.payload.doc.id;
          let data = documents.payload.doc.data();
          let document = { id: id, ...data };
          resultados.push(document);
        });
        observer.next(resultados);
        observer.complete();
      }); });
    return requisicaoExames;
  }

  apagarRequisicaoExamesFirebase(requisicao): Promise<void> {
    return this.requisicaoDeExamesCollection.doc(requisicao.id).delete();
  }


}


