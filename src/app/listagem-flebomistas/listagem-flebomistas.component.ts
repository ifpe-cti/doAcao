import { Component, OnInit } from '@angular/core';
import {FlebomistaService} from '../flebomista.service';
import { Router} from '@angular/router';
import { MenuItem } from 'primeng/primeng';
import { MenusService } from '../menus.service';
import { Flebomista } from '../models/flebomista';


@Component({
  selector: 'app-listagem-flebomistas',
  templateUrl: './listagem-flebomistas.component.html',
  styleUrls: ['./listagem-flebomistas.component.css']
})
export class ListagemFlebomistasComponent implements OnInit {

  constructor(private flebomistaService: FlebomistaService,
    private menusService: MenusService, private router:Router) { }

  ngOnInit() {
  }

}
