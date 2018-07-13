import { Injectable } from '@angular/core';
import { AgendamentoDoacao } from './models/agendamento-de-doacoes';
import { Routes, RouterModule } from '@angular/router';
import { Message } from 'primeng/components/common/api';

import { routing } from './app.routing';
import { Router } from '@angular/router';

import { AngularFirestore, AngularFirestoreCollection } from "angularfire2/firestore";
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireModule } from 'angularfire2';
import { Observable } from 'rxjs';

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
