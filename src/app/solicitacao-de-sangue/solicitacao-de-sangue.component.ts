import { Component, OnInit } from '@angular/core';
import {UsuariosService} from './../usuarios.service';
import { Router} from '@angular/router';
import { MenuItem } from 'primeng/primeng';
import { MenusService } from '../menus.service';
import { SolicitacaoSanguinea } from '../models/solicitacaoSanguinea';
import { Usuario } from '../models/usuario';


@Component({
  selector: 'app-solicitacao-de-sangue',
  templateUrl: './solicitacao-de-sangue.component.html',
  styleUrls: ['./solicitacao-de-sangue.component.css']
})
export class SolicitacaoDeSangueComponent implements OnInit {

  cpf: String;
  senha: String;
  solicitacaoSanguinea: SolicitacaoSanguinea;
  usuario: Usuario[];

  constructor(private usuariosService: UsuariosService, 
    private router:Router, private menusService: MenusService) { 
      this.solicitacaoSanguinea = {
       nomeUsuario: "", numeroDocumentoDoador: "", tipoSanguineo: ""

      }
    }
/**
 *  this.listarTodos()
    .subscribe(meuObservable => 
      this.todosOsUsuarios = meuObservable as Usuario[]
    );
 */
   

  buscarDados(){
  if(this.usuariosService.usuarioLogado.cpf = this.cpf){
    this.usuariosService.usuarioLogado.nome = this.solicitacaoSanguinea.nomeUsuario;
    this.usuariosService.usuarioLogado.cpf = this.solicitacaoSanguinea.numeroDocumentoDoador;
    this.usuariosService.usuarioLogado.tipoSanguineo = this.solicitacaoSanguinea.tipoSanguineo;
  }  
  
 
}
  ngOnInit() {
  }

}
