import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenusService {

  constructor() { }


  itensHemope = [
    { label: '  Página inicial', icon: '', routerLink: '/dashboard-hemope' },
    { label: '  Adicionar exame', icon: '', routerLink: '/requisicao-do-exame' },
    { label: '  Adicionar ficha médica', icon: '', routerLink: '/fichas-medicas' },
    { label: '  Agendar doação', icon: '', routerLink: '/agendamento-de-doacoes-hemope' },
    { label: '  Todos os exames', icon: '', routerLink: '/visualizacao-requisicao-exames' },
    { label: '  Todas as fichas médicas', icon: '', routerLink: '/visualizacao-fichas-medicas' },
    { label: '  Todas os usuários', icon: '', routerLink: '/listagem-usuarios' },
    { label: '  Todas as solicitações sanguíneas', icon: '', routerLink: '' },

    
  ];


  itensUsuario = [
    { label: '  Página inicial', icon: 'fa-calendar', routerLink: '/dashboard' },
    { label: '  Fichas médicas', icon: 'fa-book', routerLink: '' },
    { label: '  Solicitação de doação', icon: 'fa-book', routerLink: '/agendamento-de-doacoes' },
    { label: '  Solicitar sangue ', icon: 'fa-calendar', routerLink: '/solicitacao-de-sangue' },
  ];

}
