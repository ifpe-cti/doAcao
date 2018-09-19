import { Injectable } from '@angular/core';
import { BancoDeSangue } from './models/banco-de-sangue';
import { AngularFirestore, AngularFirestoreCollection } from "angularfire2/firestore";



@Injectable({
  providedIn: 'root'
})
export class BancoDeSangueService {

 
  constructor(private servicoFirebase: AngularFirestore) {
    this.bancoDeSangueCollection = this.servicoFirebase.collection("banco-de-sangue");
  }

  private bancoDeSangueCollection: AngularFirestoreCollection<BancoDeSangue>;

// insersão de dados no Banco de Sangue que será feito pela primeira vez que o sistema for iniciado
 adicionarValoresIniciaisBancoDeSangue(bancoCriado: BancoDeSangue) {
    this.bancoDeSangueCollection.add(bancoCriado).then(
      resultado => {
        bancoCriado.id = resultado.id;
      });
  }


 /** Fazer método de Updade para quando algum valor no Banco de Sangue precise ser alterado, não
  * seja necessário apagar o banco já criado e refazer um novo inserindo novos valores.
  */
  
  }

  
