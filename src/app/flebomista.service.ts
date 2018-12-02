import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


import { Tecnico } from './models/tecnico';
import { Flebomista } from './models/flebomista';
import { AngularFirestore, AngularFirestoreCollection } from "angularfire2/firestore";


@Injectable({
  providedIn: 'root'
})
export class FlebomistaService {

  todosOsFlebomistas: Flebomista[];

  constructor(private servicoFirebase: AngularFirestore) {
    this.flebomistaCollection = this.servicoFirebase.collection("flebomista");
  }

  private flebomistaCollection: AngularFirestoreCollection<Flebomista>;

  cadastrarFlebomistaFirebase(flebomista: Flebomista) {
      this.flebomistaCollection.add(flebomista).then(
      resultado => {
        flebomista.id = resultado.id;
      });
  }



    listarTodos(): Observable<any[]> {
    let resultados: any[] = [];
    let flebomistas = new Observable<any[]>(observer => {
      this.flebomistaCollection.snapshotChanges().subscribe(result => {
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
    return flebomistas;
  }

  filtrarFlebomistasPorNome(nome) {
    return new Observable<String[]>(observer => {
      this.listarTodos()
        .subscribe(meuObservable => {
          this.todosOsFlebomistas = meuObservable as Flebomista[]
          let FlebomistasFiltrados: String[] = []
          for (let i = 0; i < this.todosOsFlebomistas.length; i++) {
            if (this.todosOsFlebomistas[i].nome.search(nome) != -1) { // VERIFICAR APENAS O INÍCIO DO CPF E NÃO ELE TODO 
              FlebomistasFiltrados.push(this.todosOsFlebomistas[i].nome);
            }
          }
          observer.next(FlebomistasFiltrados);
          observer.complete();
        }
        );
    })
  }


  resgatarFlebomistaPorCPF(cpf) {
    return new Observable<Flebomista[]>(observer => {
      this.listarTodos()
        .subscribe(meuObservable => {
          this.todosOsFlebomistas = meuObservable as Flebomista[]
          let flebomistas: Tecnico[];
          let tecnicoCPF: String[];
          for (let i = 0; i < this.todosOsFlebomistas.length; i++) {
            if (this.todosOsFlebomistas[i].cpf.search(cpf) != -1) { // VERIFICAR APENAS O INÍCIO DO CPF E NÃO ELE TODO 
              flebomistas.push(this.todosOsFlebomistas[i]);
              tecnicoCPF.push(this.todosOsFlebomistas[i].cpf);
            }
          }
          observer.next(flebomistas);
          observer.complete();
        }
        );
    })
  }


  apagarFlebomistaFirebase(flebomista): Promise<void> {
    return this.flebomistaCollection.doc(flebomista.id).delete();
  }




}