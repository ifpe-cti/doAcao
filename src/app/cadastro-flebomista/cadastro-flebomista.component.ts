import { Component, OnInit } from '@angular/core';
import { FlebomistaService } from '../flebomista.service';
import { Router } from '@angular/router'
import { Flebomista } from '../models/flebomista';
import { MenuItem } from 'primeng/primeng';
import { MenusService } from '../menus.service';


@Component({
  selector: 'app-cadastro-flebomista',
  templateUrl: './cadastro-flebomista.component.html',
  styleUrls: ['./cadastro-flebomista.component.css']
})
export class CadastroFlebomistaComponent implements OnInit {

  
  flebomista: Flebomista;
  items: MenuItem[];

  constructor(private flebomistaService: FlebomistaService, private router: Router,
     private menusSevice: MenusService) {   
    this.flebomista = new Flebomista()
  }

  cadastrarFlebomista(){
    this.flebomistaService.cadastrarFlebomistaFirebase(this.flebomista);
    this.router.navigate(['/dashboard-hemope']);
  }

  ngOnInit() {
    this.items = this.menusSevice.itensHemope;
    
  }
}