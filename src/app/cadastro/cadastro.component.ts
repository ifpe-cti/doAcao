import { Component, OnInit } from '@angular/core';
import { Usuario } from '../models/usuario';
import { UsuariosService } from '../usuarios.service';
import { Router } from '@angular/router';
import {SelectItem} from 'primeng/api';



@Component({
  selector: 'cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})


export class CadastroComponent implements OnInit {

  tiposSanguineos: SelectItem[];
  tiposDocumento: SelectItem[];
  orgaosExpeditores: SelectItem[];

  usuario: Usuario;
  tipoSanguineoSelecionado: String;

  hemope: Usuario;

  constructor(private servicoUsuario: UsuariosService, private router: Router) {
    this.usuario = {
      nome: "", user: "", dataNascimento: "", senha: "",
      tipoUsuario: "usuario", cpf: "", tipoSanguineo: "", numeroDocumento: "",
      tipoDocumento: "", orgaoExpeditorDocumento: "", nomePai: "", nomeMae: ""
    }

    this.hemope = {
      nome: "Hemocentro Garanhuns", user: "hemope", dataNascimento: "-", senha: "hemope",
      tipoUsuario: "hemocentro", cpf: "-", tipoSanguineo: "-", numeroDocumento: "-",
      tipoDocumento: "-", orgaoExpeditorDocumento: "-", nomePai: "-", nomeMae: "-"
    }

  }
  voltarLogin(){
    this.router.navigate(['/login']);
 }
  cadastroUsuario() {  
    this.servicoUsuario.cadastrarUsuarioFirebase(this.usuario);
    this.router.navigate(['/login']);
  }

  ngOnInit() {

    this.tiposSanguineos = [
      {label: 'Tipo Sanguíneo', value: null},
      {label:"A+", value: "A+"},         
      {label: 'A-', value: 'A-'},
      {label: 'B+', value: 'B+'},
      {label: 'B-', value: 'B-'},
      {label: 'AB+', value: 'AB+'},
      {label: 'AB-', value: 'AB-'},
      {label: 'O+', value: 'O+'},
      {label: 'O-', value: 'O-'}
    ];

    this.tiposDocumento = [
      {label: 'Tipo de Documento', value: null},
      {label: 'Cédula de Identidade', value: "Carteira de Identidade"},         
      {label: 'Identificação Oficial para Estrangeiros', value: 'Identificação Oficial para Estrangeiros'},
      {label: 'Carteira de Previcência Social', value: 'Carteira de Previcência Social'},
      {label: 'Passaporte', value: 'Passaporte'},
      {label: 'Certificado de Reservista', value: 'Certificado de Reservista'},
      {label: 'Carteira Nacional de Habilitação', value: 'Carteira Nacional de Habilitação'}
    ]

    this.orgaosExpeditores = [
      {label: 'Órgão Expeditor', value: null},
      {label:'SSP — Secretaria de Segurança Pública', value: "SSP"},
      {label:'SSD — Secretaria de Defesa Social', value: "SSD"},
      {label:'DETRAN — Departamento Estadual de Trânsito', value: "DETRAN"},
      {label:'MA — Ministério da Aeronáutica', value: "MA"},
      {label:'MM — Ministério da Marinha', value: "MM"},
      {label:'ME — Ministério do Exército', value: "ME"},
      {label:'MT — Ministério do Trabalho', value: "MT"},
      {label:'CNIG — Conselho Nacional de Imigração', value: "CNIG"},
    ]

  }

}





