import { Component, OnInit } from '@angular/core';
import { FichaMedica } from '../models/ficha-medica';
import { Usuario } from '../models/usuario';
import { Flebomista } from '../models/flebomista';
import { FichasMedicasService } from '../fichas-medicas.service';
import { Router } from '@angular/router';
import { UsuariosService } from '../usuarios.service';
import { FlebomistaService } from '../flebomista.service';
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
  flebomistas: Flebomista [] = []; 
 

  cpf: String;
  nomeFlebomista: String;

  nomeUsuarioResgatadoPorCPF: String;
  CPFUsuarioResgatadoPorCPF: String;
  numeroDocumentoUsuarioResgatadoPorCPF: String;
  resultsFlebomista: String [] = [];
  
  constructor(private servicoFichaMedica: FichasMedicasService, private router: Router,
    private servicoUsuario: UsuariosService, private menusService: MenusService,
    private flebomistaService: FlebomistaService) {
    this.fichaMedica = new FichaMedica()
  }

  search(cpf) {
    this.servicoUsuario.filtrarUsuariosPorCPF(cpf.query).subscribe(data => {
      this.results = data;
    });
  }

  searchFleb(nomeFlebomista) {
    this.flebomistaService.filtrarFlebomistasPorNome(nomeFlebomista.query).subscribe(data => {
      this.resultsFlebomista = data;
    });
  }

  buscarPorCPF() {
    this.servicoUsuario.listarTodos().subscribe(usuarios =>
      this.usuarios = usuarios as Usuario[]);
    for (let i = 0; i < this.usuarios.length; i++) {
      if (this.usuarios[i].cpf == this.cpf) {
        this.fichaMedica.idDoador = this.usuarios[i].id;
        this.nomeUsuarioResgatadoPorCPF = this.usuarios[i].nome;
        this.fichaMedica.cpfDoador = this.usuarios[i].cpf;
        this.numeroDocumentoUsuarioResgatadoPorCPF = this.usuarios[i].numeroDocumento;
      }
    }
  }

  /**
   *  buscarPorNome() {
    this.flebomistaService.listarTodos().subscribe(flebomistas =>
      this.flebomistas = flebomistas as Flebomista[]);
    for (let i = 0; i < this.flebomistas.length; i++) {
      if (this.flebomistas[i].nome == this.nomeFlebomista) {
        this.nomeFlebomista = this.flebomistas[i].nome;
        this.fichaMedica.nomeFlebomista = this.flebomistas[i].nome;
        this.fichaMedica.idFlebomista = this.flebomistas[i].id;
      }
    }
  }
   */

 

   adicionarFichaMedica() {  
    this.servicoFichaMedica.adicionarFichaMedicaFirebase(this.fichaMedica);
    this.router.navigate(['dashboard-hemope']);
  }

  ngOnInit() {
    this.items = this.menusService.itensHemope;

  }
}





