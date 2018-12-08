import { Injectable } from '@angular/core';
import { Usuario } from './models/usuario';
import { AngularFirestore, AngularFirestoreCollection } from "angularfire2/firestore";

import { Observable } from 'rxjs';


@Injectable()
export class UsuariosService {

  usuarioLogado: Usuario;
  todosOsUsuarios: Usuario[];

  usuarioModel = new Usuario();


    private usuarioCollection: AngularFirestoreCollection<Usuario>;
  usuariosRef: AngularFirestoreCollection<Usuario>


  constructor(private servicoFirebase: AngularFirestore) {

    this.usuariosRef = this.servicoFirebase.collection<Usuario>('usuarios');
    
    this.usuarioCollection = this.servicoFirebase.collection('usuario')

  }

  save(){
    this.usuariosRef.add(this.usuarioModel);
  }

  cadastrarUsuarioFirebase(usuario: Usuario) {
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

  listarTodos(): Observable<any[]> {
    let resultados: any[] = [];
    let usuarios = new Observable<any[]>(observer => {
      this.usuarioCollection.snapshotChanges().subscribe(result => {
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
    return usuarios;
  }

  filtrarUsuariosPorNome(nome) {
    return new Observable<String[]>(observer => {
      this.listarTodos()
        .subscribe(meuObservable => {
          this.todosOsUsuarios = meuObservable as Usuario[]
          let usuariosFiltrados: String[] = []
          for (let i = 0; i < this.todosOsUsuarios.length; i++) {
            if (this.todosOsUsuarios[i].nome.search(nome) != -1) { 
              usuariosFiltrados.push(this.todosOsUsuarios[i].nome);
            }
          }

          observer.next(usuariosFiltrados);
          observer.complete();
        }
        );
    })
  }


  filtrarUsuariosPorCPF(cpf) {
    return new Observable<String[]>(observer => {
      this.listarTodos()
        .subscribe(meuObservable => {
          this.todosOsUsuarios = meuObservable as Usuario[]
          let usuariosFiltrados: String[] = []
          for (let i = 0; i < this.todosOsUsuarios.length; i++) {
            if (this.todosOsUsuarios[i].cpf.search(cpf) != -1) { // VERIFICAR APENAS O INÍCIO DO CPF E NÃO ELE TODO 
              usuariosFiltrados.push(this.todosOsUsuarios[i].cpf);
            }
          }
          observer.next(usuariosFiltrados);
          observer.complete();
        }
        );
    })
  }


  resgatarUsuarioPorCPF(cpf) {
    return new Observable<Usuario[]>(observer => {
      this.listarTodos()
        .subscribe(meuObservable => {
          this.todosOsUsuarios = meuObservable as Usuario[]
          let usuarios: Usuario[];
          let usuariosCPF: String[];
          for (let i = 0; i < this.todosOsUsuarios.length; i++) {
            if (this.todosOsUsuarios[i].cpf.search(cpf) != -1) { // VERIFICAR APENAS O INÍCIO DO CPF E NÃO ELE TODO 
              usuarios.push(this.todosOsUsuarios[i]);
              usuariosCPF.push(this.todosOsUsuarios[i].cpf);
            }
          }
          observer.next(usuarios);
          observer.complete();
        }
        );
    })
  }

  filtrarUsuariosPorTipoSanguineo(tipoSanguineo) {
    return new Observable<String[]>(observer => {
      this.listarTodos()
        .subscribe(meuObservable => {
          this.todosOsUsuarios = meuObservable as Usuario[]
          let usuariosFiltrados: String[] = []
          for (let i = 0; i < this.todosOsUsuarios.length; i++) {
            if (this.todosOsUsuarios[i].tipoSanguineo.search(tipoSanguineo)) {
              usuariosFiltrados.push(this.todosOsUsuarios[i].nome);
            }
          }

          observer.next(usuariosFiltrados);
          observer.complete();
        }
        );
    })
  }

  updateUsuarioFirebase(idObjeto: String, objeto: Usuario) {
    let usuarioEditado = new Observable<any>(observer => {
      this.usuarioCollection.doc('usuario' + '/' + idObjeto).update(objeto).then(result => {
        observer.next();
        observer.complete();
      });
    });
    return usuarioEditado;
  }


  atualizarUsuarioFirebase(usuario: Usuario){
    return this.usuarioCollection.doc(usuario.id).update(usuario);
  }


apagarUsuarioFirebase(usuario): Promise < void> {
  return this.usuarioCollection.doc(usuario.id).delete();
}

logoutUsuario(){
  this.usuarioLogado = null;
}


}



