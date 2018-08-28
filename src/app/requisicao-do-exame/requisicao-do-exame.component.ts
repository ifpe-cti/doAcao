import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { RequisicaoDeExames } from '../models/requisicao-de-exames';
import {RequisicaoDeExameService} from './../requisicao-de-exame.service';
import {UsuariosService} from './../usuarios.service';
import { Observable } from '../../../node_modules/rxjs';



@Component({
  selector: 'app-requisicao-do-exame',
  templateUrl: './requisicao-do-exame.component.html',
  styleUrls: ['./requisicao-do-exame.component.css']
})
export class RequisicaoDoExameComponent implements OnInit {

  nomeDoador: String;
  doador: Observable<any>;
  numeroDocumento: String;
  tipoDocumento: String;
  orgaoExpeditor: String;
  nomePai: String;
  nomeMae: String;
  tecnicoResponsavel: String;
  etiquetaAmostra: String;

  
  constructor(private servicoRequisicaoExames: RequisicaoDeExameService, private router:Router,
    private servicoUsuario: UsuariosService) {}


  getUsuario(nomeCompleto:String){
    nomeCompleto = this.nomeDoador;
    this.doador =  this.servicoUsuario.getUsuarioByName(nomeCompleto); 
   }

  adicionarRequisicaoExame(){

      if(this.nomeDoador == null || this.numeroDocumento == null || this.tipoDocumento == null || 
        this.orgaoExpeditor == null || this.nomePai == null || this.nomeMae == null ||
        this.tecnicoResponsavel == null || this.etiquetaAmostra == null ){
          alert("Algumas informações necessárias estão com o campo vazio"); // colocar o growl
      } else {

        this.getUsuario(this.nomeDoador);

        let novaRequisicaoExame: RequisicaoDeExames = {doador: this.doador, numeroDeDocumentoDoador:this.numeroDocumento,
          tipoDeDocumentoDoador: this.tipoDocumento, orgaoExpeditorDoador:this.orgaoExpeditor, 
          nomePaiDoador: this.nomePai, nomeMaeDoador: this.nomeMae, tecnicoResponsavel: this.tecnicoResponsavel, 
          etiquetaDaAmostra: this.etiquetaAmostra};

          this.nomeDoador = "";
          this.numeroDocumento = "";
          this.numeroDocumento = "";
          this.orgaoExpeditor = "";
          this.nomePai = "";
          this.nomeMae = "";
          this.tecnicoResponsavel = "";
          this.etiquetaAmostra = ""; 

         this.servicoRequisicaoExames.cadastrarRequisicaoExamesFirebase(novaRequisicaoExame);

         console.log("Nova ficha médica adicionada: " + novaRequisicaoExame.id);

         this.voltarPaginaInicial();
        
      }

  }

    voltarPaginaInicial(){
      this.router.navigate(['dashboard']);
     }

  ngOnInit() {
  }

}
