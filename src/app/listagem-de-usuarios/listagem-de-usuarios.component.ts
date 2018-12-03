import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../usuarios.service';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/primeng';
import { MenusService } from '../menus.service';
import { Usuario } from '../models/usuario';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-listagem-de-usuarios',
  templateUrl: './listagem-de-usuarios.component.html',
  styleUrls: ['./listagem-de-usuarios.component.css']
})
export class ListagemDeUsuariosComponent implements OnInit {

  usuarios: any[] = [];
  usuarioSelecionado;
  items: MenuItem[];

  activeItem: MenuItem;
  tiposDocumento: SelectItem[];
  orgaosExpeditores: SelectItem[];

  usuario: Usuario = {
    nome: "", user: "", dataNascimento: null, senha: "",
    tipoSanguineo: "", tipoUsuario: "usuario", cpf: "", nomeMae: "", nomePai: "", numeroDocumento: "",
    tipoDocumento: "", orgaoExpeditorDocumento: ""
  };

  displayDialog: boolean;
  selectedUsuario: Usuario;
  newUsuario: boolean;
  cols: any[];


  constructor(private usuariosService: UsuariosService,
    private router: Router, private menusService: MenusService) { }

  update() {
    /**
     *
     let usuarios = [...this.usuarios]; 
      if (this.newUsuario)
      usuarios.push(this.usuario);
      else
      usuarios[this.usuarios.indexOf(this.selectedUsuario)] = this.usuario;
  
      this.usuarios = usuarios;
      this.usuario = null;
      this.displayDialog = false;
     */

    this.usuariosService.updateUsuarioFirebase(this.selectedUsuario.id, this.usuario);

  }

  delete() {
    let index = this.usuarios.indexOf(this.selectedUsuario);
    this.usuarios = this.usuarios.filter((val, i) => i != index);
    this.usuario = null;
    this.displayDialog = false;

    this.usuariosService.apagarUsuarioFirebase(this.selectedUsuario);
  }

  onRowSelect(event) {
    this.newUsuario = false;
    this.usuario = this.cloneUsuario(event.data);
    this.displayDialog = true;
  }

  cloneUsuario(u: Usuario): Usuario {
    let usuario = {
      nome: "", user: "", dataNascimento: null, senha: "",
      tipoSanguineo: "", tipoUsuario: "usuario", cpf: "", nomeMae: "", nomePai: "", numeroDocumento: "",
      tipoDocumento: "", orgaoExpeditorDocumento: ""
    };
    for (let prop in u) {
      usuario[prop] = u[prop];
    }
    return usuario;

  }

  ngOnInit() {
    this.usuariosService.listarTodos().subscribe(usuarios => {
      this.usuarios = usuarios;

      this.cols = [
        { field: 'nome', header: 'Nome' },
        { field: 'user', header: 'User' },
        { field: 'cpf', header: 'CPF' },
        { field: 'dataNascimento', header: 'Data de Nascimento' }
      ];

    });

    this.tiposDocumento = [
      { label: 'Tipo de Documento', value: null },
      { label: 'Cédula de Identidade', value: "Carteira de Identidade" },
      { label: 'Identificação Oficial para Estrangeiros', value: 'Identificação Oficial para Estrangeiros' },
      { label: 'Carteira de Previcência Social', value: 'Carteira de Previcência Social' },
      { label: 'Passaporte', value: 'Passaporte' },
      { label: 'Certificado de Reservista', value: 'Certificado de Reservista' },
      { label: 'Carteira Nacional de Habilitação', value: 'Carteira Nacional de Habilitação' }
    ]

    this.orgaosExpeditores = [
      { label: 'Órgão Expeditor', value: null },
      { label: 'SSP — Secretaria de Segurança Pública', value: "SSP" },
      { label: 'SSD — Secretaria de Defesa Social', value: "SSD" },
      { label: 'DETRAN — Departamento Estadual de Trânsito', value: "DETRAN" },
      { label: 'MA — Ministério da Aeronáutica', value: "MA" },
      { label: 'MM — Ministério da Marinha', value: "MM" },
      { label: 'ME — Ministério do Exército', value: "ME" },
      { label: 'MT — Ministério do Trabalho', value: "MT" },
      { label: 'CNIG — Conselho Nacional de Imigração', value: "CNIG" },
    ]

    this.items = this.menusService.itensHemope;

    this.activeItem = this.items[6];
  }

}
