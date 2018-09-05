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

  getUsuarioByName(nomeCompleto: String){
    let usuario = new Observable<any>(observer => {
      let collectionFiltrada = this.servicoFirebase.collection<Usuario>('usuario', ref =>
        ref.where('nome', '==', nomeCompleto));
          
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



