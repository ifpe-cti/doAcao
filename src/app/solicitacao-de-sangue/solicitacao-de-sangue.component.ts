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

  data: any;

  constructor(private usuariosService: UsuariosService, private router: Router, private menusService: MenusService,
    private solicitacaoSanguineaService: SolicitacaoDeSangueService) {
    this.solicitacaoSanguinea = new SolicitacaoSanguinea();

    this.data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
          {
              label: 'My First dataset',
              backgroundColor: '#42A5F5',
              borderColor: '#1E88E5',
              data: [65, 59, 80, 81, 56, 55, 40]
          },
          {
              label: 'My Second dataset',
              backgroundColor: '#9CCC65',
              borderColor: '#7CB342',
              data: [28, 48, 40, 19, 86, 27, 90]
          }
      ]
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
