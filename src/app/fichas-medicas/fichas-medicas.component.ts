import { Component, OnInit } from '@angular/core';
import { FichaMedica } from '../models/ficha-medica';
import { FichasMedicasService } from '../fichas-medicas.service';
import { Router} from '@angular/router';
import { UsuariosService } from '../usuarios.service';
import { Observable } from '../../../node_modules/rxjs';

@Component({
  selector: 'app-fichas-medicas',
  templateUrl: './fichas-medicas.component.html',
  styleUrls: ['./fichas-medicas.component.css']
})
export class FichasMedicasComponent implements OnInit {

  nomeDoador: String;
  hemoglobina: String;
  pressaoArterial: String;
  temperatura: String;
  peso: String;
  altura: String;
  pulso: String;
  bracoPunsionado: String;
  reacoesAdversas: String;
  flebomistaResponsavel:String;
  tipoDeDoacao: String;
  numeroDoTubo: String;
  volumeDoSangue: String;
  usuarioResgatadoPeloNome: Observable<any>;
  
  userUsuario: String;

  constructor(private servicoFichaMedica: FichasMedicasService, private router:Router, 
  private servicoUsuario: UsuariosService) { }
  
  voltarPaginaInicial(){
    this.router.navigate(['dashboard']);
   }


   getUsuario(nomeCompleto:String){
    nomeCompleto = this.nomeDoador;
    this.usuarioResgatadoPeloNome =  this.servicoUsuario.getUsuarioByName(nomeCompleto); 
   }

  adicionarFichaMedica(){
    
    if(this.nomeDoador == null || this.hemoglobina == null || 
      this.pressaoArterial == null || this.temperatura == null ||
      this.peso == null || this.altura == null ||
      this.pulso == null || this.bracoPunsionado == null ||
      this.reacoesAdversas == null || this.flebomistaResponsavel == null ||
      this.tipoDeDoacao == null || this.numeroDoTubo == null || this.volumeDoSangue == null){
        alert("Algumas informações necessárias estão com o campo vazio"); // colocar o growl 
      } else{

      this.getUsuario(this.nomeDoador);
   
     let novaFichaMedica: FichaMedica = {doador: this.usuarioResgatadoPeloNome, hemoglobina:this.hemoglobina, pressaoArterial:this.pressaoArterial, 
       temperatura: this.temperatura, peso: this.peso, altura: this.altura, pulso: this.pulso, bracoPunsionado: this.bracoPunsionado,
      reacoesAdversas: this.reacoesAdversas,  flebomistaResponsavel: this.flebomistaResponsavel, tipoDeDoacao:this.tipoDeDoacao,
      numeroDoTubo:this.numeroDoTubo, volumeDoSangue:this.volumeDoSangue};
      
       this.nomeDoador = "";
       this.hemoglobina = "";
       this.pressaoArterial = "";
       this.temperatura = "";
       this.peso = "";
       this.altura = "";
       this.pulso = "";
       this.bracoPunsionado = "";
       this.numeroDoTubo = "";
       this.volumeDoSangue = "";
      
       this.servicoFichaMedica.adicionarFichaMedicaFirebase(novaFichaMedica);

       console.log("Nova ficha médica adicionada: " + novaFichaMedica.id);
   
       this.router.navigate(['inicial-hemope']);
     

  }
  }


  

  ngOnInit() {
  }

}
