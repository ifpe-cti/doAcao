import { Component, OnInit } from '@angular/core';
import { Usuario } from '../models/usuario';
import { AgendamentoDeDoacoesService } from '../agendamento-de-doacoes.service';
import { AgendamentoDoacao } from '../models/agendamento-de-doacoes';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/primeng';
import { MenusService } from '../menus.service';
import { UsuariosService } from '../usuarios.service';


@Component({
  selector: 'app-agendamento-de-doacoes',
  templateUrl: './agendamento-de-doacoes.component.html',
  styleUrls: ['./agendamento-de-doacoes.component.css']
})
export class AgendamentoDeDoacoesComponent implements OnInit {

  constructor(private AgendamentoDeDoacoesService: AgendamentoDeDoacoesService,
    private router: Router, private menusService: MenusService, private servicoUsuario: UsuariosService) {

    this.agendamentoDoacao = new AgendamentoDoacao()
  }

  agendamentoDoacao: AgendamentoDoacao;
  items: MenuItem[];

  
  cpfConfirmacao: String;

  agendarDoacao() {
      this.agendamentoDoacao.idDoador = this.servicoUsuario.usuarioLogado.id;
      this.agendamentoDoacao.cpfDoador = this.servicoUsuario.usuarioLogado.cpf;
      this.AgendamentoDeDoacoesService.adicionarAgendamentoDeDoacao(this.agendamentoDoacao);
      this.router.navigate(['dashboard']);
    }
  


  ngOnInit() {
    this.items = this.menusService.itensUsuario;

  }
}



