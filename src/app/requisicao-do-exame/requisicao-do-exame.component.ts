import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequisicaoDeExames } from '../models/requisicao-de-exames';
import { Usuario } from '../models/usuario';
import { RequisicaoDeExameService } from './../requisicao-de-exame.service';
import { UsuariosService } from './../usuarios.service';
import { MenuItem } from 'primeng/primeng';
import { MenusService } from '../menus.service';



@Component({
  selector: 'app-requisicao-do-exame',
  templateUrl: './requisicao-do-exame.component.html',
  styleUrls: ['./requisicao-do-exame.component.css']
})
export class RequisicaoDoExameComponent implements OnInit {

  items: MenuItem[];

  cpf: String;
  requisicaoExames: RequisicaoDeExames;
  results: String[] = [];

  usuarios: Usuario[] = [];
  nomeUsuarioResgatadoPorCPF: String = "";

  
  constructor(private servicoRequisicaoExames: RequisicaoDeExameService, private router: Router,
    private servicoUsuario: UsuariosService, private menusService: MenusService) {
    this.requisicaoExames = {
      idDoador: "", numeroDocumentoDoador: "", tipoDocumentoDoador: "",
      orgaoExpeditorDoador: "", nomeMaeDoador: "", nomePaiDoador: "", tecnicoResponsavel: "",
      etiquetaDaAmostra: ""
    }
  }

  search(cpf) {
    this.servicoUsuario.filtrarUsuariosPorCPF(cpf.query).subscribe(data => {
      this.results = data;
    });    
  }

  buscarPorCPF(){
    this.servicoUsuario.listarTodos().subscribe(usuarios =>
      this.usuarios = usuarios as Usuario[]);
      for(let i = 0; i < this.usuarios.length; i++){
       if(this.usuarios[i].cpf == this.cpf){
        this.requisicaoExames.idDoador = this.usuarios[i].id;
        this.requisicaoExames.numeroDocumentoDoador = this.usuarios[i].numeroDocumento;
        this.requisicaoExames.tipoDocumentoDoador = this.usuarios[i].tipoDocumento;
        this.requisicaoExames.nomeMaeDoador =  this.usuarios[i].nomeMae;
        this.requisicaoExames.nomePaiDoador = this.usuarios[i].nomePai;
       }
      }
  }  

  adicionarRequisicaoExame() {
    this.servicoRequisicaoExames.cadastrarRequisicaoExamesFirebase(this.requisicaoExames);
    console.log("Nova ficha médica adicionada: " + this.requisicaoExames.id);
    this.router.navigate(['dashboard-hemope']);
  }

  ngOnInit() {
    this.items = this.items = this.menusService.itensHemope;
  }

  
}
