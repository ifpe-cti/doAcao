import { Component, OnInit } from '@angular/core';
import {Usuario} from './../models/usuario';
import {AgendamentoDeDoacoesService} from './../agendamento-de-doacoes.service';
import {AgendamentoDoacao} from './../models/agendamento-de-doacoes';
import { Router} from '@angular/router';

@Component({
  selector: 'app-agendamento-de-doacoes',
  templateUrl: './agendamento-de-doacoes.component.html',
  styleUrls: ['./agendamento-de-doacoes.component.css']
})
export class AgendamentoDeDoacoesComponent implements OnInit {

  constructor(private AgendamentoDeDoacoesService: AgendamentoDeDoacoesService, private router:Router) {}

  dataAgendamento: Date;
  nomeDoador:String;
  numeroDocumento:String;


  agendarDoacao(){
   
    if(this.dataAgendamento == null || this.nomeDoador == null || 
    this.numeroDocumento == null){
      alert("Há campos ainda não preenchidos")
    } else{
 
   let novoAgendamento: AgendamentoDoacao = {dataAgendamento:this.dataAgendamento,
     nomeDoador:this.nomeDoador, numeroDocumentoDoador:this.numeroDocumento};

     this.dataAgendamento = null;
     this.nomeDoador = "";
     this.numeroDocumento = "";
  
 
     this.AgendamentoDeDoacoesService.adicionarAgendamentoDeDoacao(novoAgendamento);
 
     console.log("Nova doação agendada: " + novoAgendamento.nomeDoador + novoAgendamento.numeroDocumentoDoador);
 
    this.router.navigate(['/inicial']);
   
    }
       
  }
  


  ngOnInit() {

  }
}