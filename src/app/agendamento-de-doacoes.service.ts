import { Injectable } from '@angular/core';
import { AgendamentoDoacao } from './models/agendamento-de-doacoes';
import { AngularFirestore, AngularFirestoreCollection } from "angularfire2/firestore";
import {Observable} from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class AgendamentoDeDoacoesService {

 
  constructor(private servicoFirebase: AngularFirestore) {
    this.agendamentosDoacoesCollection = this.servicoFirebase.collection("agendamento-de-doacoes");
  }

  private agendamentosDoacoesCollection: AngularFirestoreCollection<AgendamentoDoacao>;

  adicionarAgendamentoDeDoacao(agendamento: AgendamentoDoacao) {
    this.agendamentosDoacoesCollection.add(agendamento).then(
      resultado => {
        agendamento.id = resultado.id;
      });
  }

  listarTodos(){
    let resultados: any[] = [];
    let meuObservable = new Observable<any[]>(observer => {
      this.agendamentosDoacoesCollection.snapshotChanges().subscribe(result => {
        result.map(documents => {
          let id = documents.payload.doc.id;
          let data = documents.payload.doc.data();
          let document = { id: id, ...data };
          resultados.push(document);
        });
        observer.next(resultados);
        observer.complete();
      }); });
    return meuObservable;
  }

  apagarAgendamentoDeDoacao(agendamento): Promise<void> {
    return this.agendamentosDoacoesCollection.doc(agendamento.id).delete();
  }


}
