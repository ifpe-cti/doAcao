import { Injectable } from '@angular/core';
import { Tecnico } from './models/tecnico';
import { AngularFirestore, AngularFirestoreCollection } from "angularfire2/firestore";


import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TecnicoService {
  todosOsTecnicos: Tecnico[];

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

  filtrarTecnicosPorCPF(cpf) {
    return new Observable<String[]>(observer => {
      this.listarTodos()
        .subscribe(meuObservable => {
          this.todosOsTecnicos = meuObservable as Tecnico[]
          let TecnicosFiltrados: String[] = []
          for (let i = 0; i < this.todosOsTecnicos.length; i++) {
            if (this.todosOsTecnicos[i].cpf.search(cpf) != -1) { // VERIFICAR APENAS O INÍCIO DO CPF E NÃO ELE TODO 
              TecnicosFiltrados.push(this.todosOsTecnicos[i].cpf);
            }
          }
          observer.next(TecnicosFiltrados);
          observer.complete();
        }
        );
    })
  }


  resgatarTecnicoPorCPF(cpf) {
    return new Observable<Tecnico[]>(observer => {
      this.listarTodos()
        .subscribe(meuObservable => {
          this.todosOsTecnicos = meuObservable as Tecnico[]
          let tecnicos: Tecnico[];
          let tecnicoCPF: String[];
          for (let i = 0; i < this.todosOsTecnicos.length; i++) {
            if (this.todosOsTecnicos[i].cpf.search(cpf) != -1) { // VERIFICAR APENAS O INÍCIO DO CPF E NÃO ELE TODO 
              tecnicos.push(this.todosOsTecnicos[i]);
              tecnicoCPF.push(this.todosOsTecnicos[i].cpf);
            }
          }
          observer.next(tecnicos);
          observer.complete();
        }
        );
    })
  }

  

  apagarTecnicoFirebase(tecnico): Promise<void> {
    return this.tecnicoCollection.doc(tecnico.id).delete();
  }



 /* constructor(private servicoFirebase: AngularFirestore) {
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
  }*/


}