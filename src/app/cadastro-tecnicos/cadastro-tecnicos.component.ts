import { Component, OnInit } from '@angular/core';
import { Usuario } from '../models/usuario';
import { TecnicoService } from '../tecnicos.service';
import { Router } from '@angular/router';
import {SelectItem} from 'primeng/api';
import { Tecnico } from '../models/tecnico';

@Component({
  selector: 'app-cadastro-tecnicos',
  templateUrl: './cadastro-tecnicos.component.html',
  styleUrls: ['./cadastro-tecnicos.component.css']
})
export class CadastroTecnicosComponent implements OnInit {

  tecnico: Tecnico;

  constructor(private tecnicoService: TecnicoService, private router: Router) {   
    this.tecnico = {
      nome: "", cpf: ""
    }
  }

  cadastrarTecnico(){
    this.tecnicoService.cadastrarTecnicoFirebase(this.tecnico);
    this.router.navigate(['/dashboard-hemope']);
  }

  ngOnInit() {

    
  }

}
