import { Injectable } from '@angular/core';
import { Usuario } from './models/usuario';
import { Routes, RouterModule } from '@angular/router';
import { Message } from 'primeng/components/common/api';
import { routing } from './app.routing';
import { Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection } from "angularfire2/firestore";
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireModule } from 'angularfire2';
import { Observable } from 'rxjs';



@Injectable()
export class UsuariosService {

  usuarioLogado: Usuario;
  usuariosFiltrados : Usuario [];
  todosOsUsuarios: Usuario [];

  constructor(private servicoFirebase: AngularFirestore) {
    this.usuarioCollection = this.servicoFirebase.collection("usuario");
  }

  private usuarioCollection: AngularFirestoreCollection<Usuario>;  

  cadastrarUsuarioFirebase(usuario: Usuario) {
    console.log(usuario)
    this.usuarioCollection.add(usuario).then(
      resultado => {
        usuario.id = resultado.id;
      });
  }

 
  listarTodos(): Observable<any[]> {
    let resultados: any[] = [];
    let meuObservable = new Observable<any[]>(observer => {
      this.usuarioCollection.snapshotChanges().subscribe(result => {
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
/**
 *  for(let i = 0; i < this.todosOsUsuarios.length; i++){
      if(this.todosOsUsuarios[i].cpf == cpf){ // VERIFICAR APENAS O INÍCIO DO CPF E NÃO ELE TODO 
        this.usuariosFiltrados.push(this.todosOsUsuarios[i]);
      }
    }
 * 
 */


  filtrarUsuariosPorCPF(cpf: String){

    this.listarTodos()
    .subscribe(meuObservable => 
      this.todosOsUsuarios = meuObservable as Usuario[]
    );

   
  }

  
  


  loginUsuario(user: String, senha: String): Observable<any> {
    let usuario = new Observable<any>(observer => {
      let collectionFiltrada = this.servicoFirebase.collection<Usuario>('usuario', ref =>
        ref.where('user', '==', user)
           .where('senha', '==', senha));
      let resultados = collectionFiltrada.snapshotChanges().subscribe(result => {
        let document;
        result.map(documents => {
          let id = documents.payload.doc.id;
          let data = documents.payload.doc.data();
          document = { id: id, ...data };
        });
        observer.next(document);
        observer.complete();
      });
    });
    return usuario;
  }

  getUsuarioByDocumento(numeroDocumento: String){
    let usuario = new Observable<any>(observer => {
      let collectionFiltrada = this.servicoFirebase.collection<Usuario>('usuario', ref =>
        ref.where('nome', '==', numeroDocumento)); // OBSERVAR!!!!!!!!!
          
      let resultados = collectionFiltrada.snapshotChanges().subscribe(result => {
        let document;
        result.map(documents => {
          let id = documents.payload.doc.id;
          let data = documents.payload.doc.data();
          document = { id: id, ...data };
        });
        observer.next(document);
        observer.complete();
      });
    });

    return usuario;

  }


  apagarUsuarioFirebase(usuario): Promise<void> {
    return this.usuarioCollection.doc(usuario.id).delete();
  }



}



