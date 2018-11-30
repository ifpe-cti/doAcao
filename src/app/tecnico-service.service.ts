import { Injectable } from '@angular/core';
import { Tecnico } from './models/tecnico';
import { AngularFirestore, AngularFirestoreCollection } from "angularfire2/firestore";

import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TecnicoServiceService {

 
  constructor(private servicoFirebase: AngularFirestore) {
    this.tecnicoCollection = this.servicoFirebase.collection("tecnico");
  }

  private tecnicoCollection: AngularFirestoreCollection<Tecnico>;

  cadastrarTecnicoFirebase(tecnico: Tecnico) {
    this.tecnicoCollection.add(tecnico).then(
      resultado => {
        tecnico.id = resultado.id;
      });
  }

  listarTodos(): Observable<any[]> {
    let resultados: any[] = [];
    let tecnicos = new Observable<any[]>(observer => {
      this.tecnicoCollection.snapshotChanges().subscribe(result => {
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
    return tecnicos;
  }

  apagarTecnicoFirebase(tecnico): Promise<void> {
    return this.tecnicoCollection.doc(tecnico.id).delete();
  }


}