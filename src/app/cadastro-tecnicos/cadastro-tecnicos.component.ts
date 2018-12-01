import { Component, OnInit } from '@angular/core';
import { Usuario } from '../models/usuario';
import { TecnicoService } from '../tecnicos.service';
import { Router } from '@angular/router';
import {SelectItem} from 'primeng/api';

@Component({
  selector: 'app-cadastro-tecnicos',
  templateUrl: './cadastro-tecnicos.component.html',
  styleUrls: ['./cadastro-tecnicos.component.css']
})
export class CadastroTecnicosComponent implements OnInit {


  constructor() { }

  ngOnInit() {
  }

}
