import { Component, OnInit } from '@angular/core';
import {Usuario} from './../models/usuario';
import {AgendamentoDeDoacoesService} from './../agendamento-de-doacoes.service';
import {AgendamentoDoacao} from './../models/agendamento-de-doacoes';
import { Router} from '@angular/router';
import { MenuItem } from 'primeng/primeng';
import { MenusService } from '../menus.service';
import { UsuariosService } from './../usuarios.service';


@Component({
  selector: 'app-agendamento-de-doacoes',
  templateUrl: './agendamento-de-doacoes.component.html',
  styleUrls: ['./agendamento-de-doacoes.component.css']
})
export class AgendamentoDeDoacoesComponent implements OnInit {

  constructor(private AgendamentoDeDoacoesService: AgendamentoDeDoacoesService, 
    private router:Router, private menusService: MenusService, private servicoUsuario: UsuariosService) {

      this.agendamentoDoacao = {idDoador:"", dataAgendamento: null, 
    }
  }

  agendamentoDoacao: AgendamentoDoacao;
  items: MenuItem[];

  usuarios: Usuario [] = [];
  cpf: String;
 
  agendarDoacao(){
     this.AgendamentoDeDoacoesService.adicionarAgendamentoDeDoacao(this.agendamentoDoacao);
     this.router.navigate(['dashboard-hemope']);
    }

    buscarPorCPF() {
      this.servicoUsuario.listarTodos().subscribe(usuarios =>
        this.usuarios = usuarios as Usuario[]);
  
      for (let i = 0; i < this.usuarios.length; i++) {
        if (this.usuarios[i].cpf == this.cpf) {
          this.agendamentoDoacao.idDoador = this.usuarios[i].id;
        }
      }
    }
  

      ngOnInit() {
        this.items = this.menusService.itensUsuario;

  }
}  
  


 