import { Component, OnInit } from '@angular/core';
import { FichaMedica } from '../models/ficha-medica';
import { FichasMedicasService } from '../fichas-medicas.service';
import { Router} from '@angular/router';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-fichas-medicas',
  templateUrl: './fichas-medicas.component.html',
  styleUrls: ['./fichas-medicas.component.css']
})
export class FichasMedicasComponent implements OnInit {


  fichaMedica: FichaMedica;
  text: string;
  results: String [];


  constructor(private servicoFichaMedica: FichasMedicasService, private router:Router, 
  private servicoUsuario: UsuariosService) { 
    this.fichaMedica = { nomeDoador: "", hemoglobina:"", pressaoArterial: "", 
    temperatura: "", peso: "", altura:"", pulso:"", bracoPunsionado: "", reacoesAdversas:"",
    flebomistaResponsavel:"", tipoDeDoacao:"", numeroDoTubo:"", volumeDoSangue:""}

  }


  
    search(event) {
        this.mylookupservice.getResults(event.query).then(data => {
            this.results = data;
        });
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
  }

}
  


  

  
