import { Component, OnInit } from '@angular/core';
import { FichaMedica } from '../models/ficha-medica';
import { Usuario } from '../models/usuario';
import { FichasMedicasService } from '../fichas-medicas.service';
import { Router } from '@angular/router';
import { UsuariosService } from '../usuarios.service';
import { MenuItem } from 'primeng/primeng';
import { MenusService } from '../menus.service';

@Component({
  selector: 'app-fichas-medicas',
  templateUrl: './fichas-medicas.component.html',
  styleUrls: ['./fichas-medicas.component.css']
})
export class FichasMedicasComponent implements OnInit {

  items: MenuItem[];

  fichaMedica: FichaMedica;

  results: String[] = [];
  usuarios: Usuario[] = [];
  cpf: String;

  nomeUsuarioResgatadoPorCPF: String;
  CPFUsuarioResgatadoPorCPF: String;
  numeroDocumentoUsuarioResgatadoPorCPF: String;
 
  constructor(private servicoFichaMedica: FichasMedicasService, private router: Router,
    private servicoUsuario: UsuariosService, private menusService: MenusService) {
    this.fichaMedica = {
      idDoador: "", hemoglobina: "",
      pressaoArterial: "", temperatura: "", peso: "", altura: "", pulso: "", bracoPunsionado: "", 
      reacoesAdversas: "", flebomistaResponsavel: "", tipoDeDoacao: "", numeroDoTubo: "", volumeDoSangue: ""
    }


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
        this.fichaMedica.idDoador = this.usuarios[i].id;
        this.nomeUsuarioResgatadoPorCPF = this.usuarios[i].nome;
        this.CPFUsuarioResgatadoPorCPF = this.usuarios[i].cpf;
        this.numeroDocumentoUsuarioResgatadoPorCPF = this.usuarios[i].numeroDocumento;
      }
    }
  }

   adicionarFichaMedica() {
    this.servicoFichaMedica.adicionarFichaMedicaFirebase(this.fichaMedica);
    this.router.navigate(['dashboard-hemope']);
  }

  ngOnInit() {
    this.items = this.menusService.itensHemope;

  }
}





