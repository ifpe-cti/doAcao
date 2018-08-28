import { Injectable } from '@angular/core';
import { Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RoteamentoService {

  constructor(private router:Router) { }

  // serviço feito apenas para guardar as funções de rotas 

  roteamentoCadastro(){
    this.router.navigate(['/cadastro']); 
  }

  roteamentoLogin(){
    this.router.navigate(['/login']); 
  }
  
  roteamentoLoginGoogle(){
    this.router.navigate(['/login-google']); 
  }

  roteamentoInicial(){ // inicial para usuários comuns
    this.router.navigate(['/inicial']); 
  }

  roteamentoInicialHemope(){ // inicial para funcionários hemope
    this.router.navigate(['/inicial-hemope']); 
  }

  roteamentoAgendarDoacao(){ // usuários agendarem doações 
    this.router.navigate(['/agendamento-de-doacoes']); 
  }

  roteamentoVisializacaoAgendamentos(){ // funcionários visualizarem as doações agendadas
    this.router.navigate(['/visualizacao-agendamentos']);
  }

  roteamentoVisualizarBancoDeSangue(){ // usuários visualizam informações sobre o banco de sangue
    this.router.navigate(['/visualizacao-banco-de-sangue']);
  }

  roteamentoAlterarDadosBancoDeSangue(){ // funcionários alteram os dados sobre o banco de sangue
    this.router.navigate(['/banco-de-sangue']);
  }

  roteamentoRequisicaoExames(){ // funcionários adicionam requisições de exames
    this.router.navigate(['/requisicao-de-exames']);
  }

  roteamentoVisualizacaoFichasMedicas(){ // usuários vêem suas fichas médicas 
    // rotas com parâmetros
    this.router.navigate(['/visualizacao-fichas-medicas']);

  }
}