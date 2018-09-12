import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { RequisicaoDeExames } from '../models/requisicao-de-exames';
import {RequisicaoDeExameService} from './../requisicao-de-exame.service';
import {UsuariosService} from './../usuarios.service';



@Component({
  selector: 'app-requisicao-do-exame',
  templateUrl: './requisicao-do-exame.component.html',
  styleUrls: ['./requisicao-do-exame.component.css']
})
export class RequisicaoDoExameComponent implements OnInit {

  requisicaoExames: RequisicaoDeExames;

  
  constructor(private servicoRequisicaoExames: RequisicaoDeExameService, private router:Router,
    private servicoUsuario: UsuariosService) {
      this.requisicaoExames = {nomeDoador: "", numeroDeDocumentoDoador:"", tipoDeDocumentoDoador:"",
    orgaoExpeditorDoador: "", nomeMaeDoador: "", nomePaiDoador: "", tecnicoResponsavel: "", 
    etiquetaDaAmostra:""}

    }

    voltarPaginaInicial(){
      this.router.navigate(['dashboard']);
     }
  

  adicionarRequisicaoExame(){


         this.servicoRequisicaoExames.cadastrarRequisicaoExamesFirebase(this.requisicaoExames);

         console.log("Nova ficha médica adicionada: " + this.requisicaoExames.id);

         this.router.navigate(['dashboard']);
        
      }

  ngOnInit() {
    }
}

  


