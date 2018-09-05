import { Injectable } from '@angular/core';
import { RequisicaoDeExames } from './models/requisicao-de-exames';
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


