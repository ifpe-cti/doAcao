import { Injectable } from '@angular/core';
import { FichaMedica } from './models/ficha-medica';
import { AngularFirestore, AngularFirestoreCollection } from "angularfire2/firestore";




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