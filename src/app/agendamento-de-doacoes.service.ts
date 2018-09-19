import { Injectable } from '@angular/core';
import { AgendamentoDoacao } from './models/agendamento-de-doacoes';
import { AngularFirestore, AngularFirestoreCollection } from "angularfire2/firestore";

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

  
  apagarAgendamentoDeDoacao(agendamento): Promise<void> {
    return this.agendamentosDoacoesCollection.doc(agendamento.id).delete();
  }


}
