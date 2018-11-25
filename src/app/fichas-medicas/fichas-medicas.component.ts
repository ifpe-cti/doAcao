import { Component, OnInit } from '@angular/core';
import { FichaMedica } from '../models/ficha-medica';
import { FichasMedicasService } from '../fichas-medicas.service';
import { Router} from '@angular/router';
import { UsuariosService } from '../usuarios.service';
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
  cpfUsuario: String;
  results: String [];


  constructor(private servicoFichaMedica: FichasMedicasService, private router:Router, 
  private servicoUsuario: UsuariosService, private menusService: MenusService) { 
    this.fichaMedica = { nomeDoador: "", hemoglobina:"", pressaoArterial: "", 
    temperatura: "", peso: "", altura:"", pulso:"", bracoPunsionado: "", reacoesAdversas:"",
    flebomistaResponsavel:"", tipoDeDoacao:"", numeroDoTubo:"", volumeDoSangue:""}

  }

    procuraPorCPF(){
      this.servicoUsuario.filtrarUsuariosPorCPF(this.cpfUsuario);
    }
  
  voltarPaginaInicial(){
    this.router.navigate(['dashboard']);
   }

  adicionarFichaMedica(){
  
       this.servicoFichaMedica.adicionarFichaMedicaFirebase(this.fichaMedica);
       console.log("Nova ficha médica adicionada: " + this.fichaMedica.id);
       this.router.navigate(['dashboard']);
  }

  ngOnInit() {
    this.items = this.menusService.itensHemope;

  }
}


  

  
