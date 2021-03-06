import { Component, OnInit } from '@angular/core';
import { Usuario } from '../models/usuario';
import { AgendamentoDeDoacoesService } from '../agendamento-de-doacoes.service';
import { AgendamentoDoacao } from '../models/agendamento-de-doacoes';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/primeng';
import { UsuariosService } from '../usuarios.service';
import { MenusService } from '../menus.service';


@Component({
  selector: 'app-agendamento-doacoes-hemope',
  templateUrl: './agendamento-doacoes-hemope.component.html',
  styleUrls: ['./agendamento-doacoes-hemope.component.css']
})
export class AgendamentoDoacoesHemopeComponent implements OnInit {

  agendamentoDoacao: AgendamentoDoacao;
  items: MenuItem[];
  results: String[] = [];
  usuarios: Usuario[] = [];
  cpf: String;
 
  nomeUsuarioResgatadoPorCPF: String;
  CPFUsuarioResgatadoPorCPF: String;
  numeroDocumentoUsuarioResgatadoPorCPF: String;

  

  constructor(private AgendamentoDeDoacoesService: AgendamentoDeDoacoesService,
    private router: Router, private servicoUsuario: UsuariosService,
    private menusService: MenusService) {

    this.agendamentoDoacao = new AgendamentoDoacao();
  }

    agendarDoacao() {
    this.AgendamentoDeDoacoesService.adicionarAgendamentoDeDoacao(this.agendamentoDoacao);
    this.router.navigate(['dashboard-hemope']);
  }

  search(cpf) {
    this.servicoUsuario.filtrarUsuariosPorCPF(cpf.query).subscribe(data => {
      this.results = data;
    });
  }

  buscarPorCPF() {
    this.servicoUsuario.listarTodos().subscribe(usuarios =>
      this.usuarios = usuarios as Usuario[]);

    for (let i = 0; i < this.usuarios.length; i++) {
      if (this.usuarios[i].cpf == this.cpf) {
        this.agendamentoDoacao.idDoador = this.usuarios[i].id;
        this.agendamentoDoacao.cpfDoador = this.usuarios[i].cpf;
        this.nomeUsuarioResgatadoPorCPF = this.usuarios[i].nome;
        this.CPFUsuarioResgatadoPorCPF = this.usuarios[i].cpf;
        this.numeroDocumentoUsuarioResgatadoPorCPF = this.usuarios[i].numeroDocumento;
      }
    }
  }


  ngOnInit() {
    this.items = this.items = this.menusService.itensHemope;
  }
}
