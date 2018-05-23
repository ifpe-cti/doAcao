import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fichas-medicas',
  templateUrl: './fichas-medicas.component.html',
  styleUrls: ['./fichas-medicas.component.css']
})
export class FichasMedicasComponent implements OnInit {

  nomePaciente: String;
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



  // fazer método de busca que relacione o nome complleto do usuário com um usuário
  userUsuario: String;

  constructor() { }


  adicionarNovaFichaMedica(){
    // colocar aqui código que vai chamar o service de adicionar fichas medicas ao banco

  }

  ngOnInit() {
  }

}
