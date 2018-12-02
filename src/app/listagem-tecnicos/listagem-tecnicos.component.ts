import { Component, OnInit } from '@angular/core';
import {UsuariosService} from '../usuarios.service';
import { Router} from '@angular/router';
import { MenuItem } from 'primeng/primeng';
import { MenusService } from '../menus.service';
import { Usuario } from '../models/usuario';
import { TecnicoService } from '../tecnicos.service';
import { Tecnico } from '../models/tecnico';


@Component({
  selector: 'app-listagem-tecnicos',
  templateUrl: './listagem-tecnicos.component.html',
  styleUrls: ['./listagem-tecnicos.component.css']
})
export class ListagemTecnicosComponent implements OnInit {

  tecnicos: any[] = [];
  tecnicoSelecionado;
  items: MenuItem[];
  activeItem: MenuItem;

  cols: any[];
  tecnicosSelecionados: Tecnico[] = [];

  constructor(private tecnicoService: TecnicoService, 
    private router:Router, private menusService: MenusService) { }


 ngOnInit() {
    this.tecnicoService.listarTodos().subscribe(tecnicos => {
        this.tecnicos = this.tecnicos;   

        this.cols = [
          { field: 'nome', header: 'Nome' },
          { field: 'id', header: 'Id do técnico' },
  
      ];

       });

       this.items = this.menusService.itensHemope;
  
      this.activeItem = this.items[6];
    }

}
