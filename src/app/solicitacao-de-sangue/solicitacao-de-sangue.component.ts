import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../usuarios.service';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/primeng';
import { MenusService } from '../menus.service';
import { SolicitacaoDeSangueService } from '../solicitacao-de-sangue.service';
import { SolicitacaoSanguinea } from '../models/solicitacaoSanguinea';
import { Usuario } from '../models/usuario';
import { SelectItem } from 'primeng/api';




@Component({
  selector: 'app-solicitacao-de-sangue',
  templateUrl: './solicitacao-de-sangue.component.html',
  styleUrls: ['./solicitacao-de-sangue.component.css']
})
export class SolicitacaoDeSangueComponent implements OnInit {

  items: MenuItem[];

  cpf: String;
  senha: String;
  solicitacaoSanguinea: SolicitacaoSanguinea;
  usuario: Usuario[];

  tiposSanguineos: SelectItem[];


  constructor(private usuariosService: UsuariosService, private router: Router, private menusService: MenusService,
    private solicitacaoSanguineaService: SolicitacaoDeSangueService) {
    this.solicitacaoSanguinea = {
      nomeUsuario: "", cpfUsuario: "", tipoSanguineo: ""
    }
  }

  enviarSolicitacao() {
  
      this.solicitacaoSanguineaService.cadastrarSolicitacaoSanguineaFirebase(this.solicitacaoSanguinea);
      this.router.navigate(['/dashboard']);
   
      alert("Para que a solicitação seja concluída, compareça ao hemocentro portando o CPF inserido junto a um documento de identificação.")
    
  }
  ngOnInit() {

    this.tiposSanguineos = [
      { label: 'Tipo Sanguíneo', value: null },
      { label: "A+", value: "A+" },
      { label: 'A-', value: 'A-' },
      { label: 'B+', value: 'B+' },
      { label: 'B-', value: 'B-' },
      { label: 'AB+', value: 'AB+' },
      { label: 'AB-', value: 'AB-' },
      { label: 'O+', value: 'O+' },
      { label: 'O-', value: 'O-' }
    ];


    this.items = this.menusService.itensUsuario;


  }

}
