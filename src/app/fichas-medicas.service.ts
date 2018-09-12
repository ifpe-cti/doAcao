import { Injectable } from '@angular/core';
import { FichaMedica } from './models/ficha-medica';
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
export class FichasMedicasService {

  constructor(private servicoFirebase: AngularFirestore) {
    this.fichaMedicaCollection = this.servicoFirebase.collection("fichas-medicas");
  }

  private fichaMedicaCollection: AngularFirestoreCollection<FichaMedica>;


  
  adicionarFichaMedicaFirebase(fichaMedica: FichaMedica) {
    this.fichaMedicaCollection.add(fichaMedica).then(
      resultado => {
        fichaMedica.id = resultado.id;
      });
  }

  
  apagarFichaMedicaFirebase(fichaMedica): Promise<void> {
    return this.fichaMedicaCollection.doc(fichaMedica.id).delete();
  }


}