import { Injectable } from '@angular/core';
import { RouterLink } from '../../node_modules/@angular/router';
import { MegaMenuModule } from 'primeng/megamenu';


@Injectable({
  providedIn: 'root'
})
export class MenusService {

  constructor() { }


  itensHemope = [
    { label: '  Página inicial', icon: '', routerLink: '/dashboard-hemope' },
    //{ label: '  Adicionar exame', icon: '', routerLink: '/requisicao-do-exame' },
    //{ label: '  Agendar doação', icon: '', routerLink: '/agendamento-de-doacoes-hemope' },
    //{ label: '  Todos os exames', icon: '', routerLink: '/visualizacao-requisicao-exames' },
    //{ label: '  Todas as fichas médicas', icon: '', routerLink: '/visualizacao-fichas-medicas' },
    //{ label: '  Todas os usuários', icon: '', routerLink: '/listagem-de-usuarios' },
   // { label: '  Todas as solicitações sanguíneas', icon: '', routerLink: '/visualizacao-solicitacoes' },
    { label: ' Exames ', icon: '',
          items: [
              [
                  { items: [{label: 'Adicionar exame', routerLink:['/requisicao-do-exame']}]
                  },
                  {
                    items: [{label: 'Listar todos os exames'}],  RouterLink: '/visualizacao-requisicao-exames'

                  }
              ]
            ] 
          },
          { label: '  Fichas médicas', icon: '',
          items: [
              [
                  {
                      items: [{label: 'Adicionar ficha médica'}],  RouterLink: '/requisicao-do-exame'
                  },
                  {
                    items: [{label: 'Listar todas as fichas'}],  RouterLink: '/visualizacao-requisicao-exames'

                  }
              ]
            ] 
          },
          { label: ' Solicitações e pedidos ', icon: '',
          items: [
              [
                  {
                      items: [{label: 'Agendar doação'}],  RouterLink: '/requisicao-do-exame'
                  },
                  {
                    items: [{label: 'Listar as solicitações sanguíneas'}],  RouterLink: '/visualizacao-requisicao-exames'

                  },
                  {
                    items: [{label: 'Listar todos os usuários'}],  RouterLink: '/visualizacao-requisicao-exames'

                  }
              ]
            ] 
          },
        //  { label: '  Adicionar ficha médica', icon: '', routerLink: '/fichas-medicas' },
          { label: '  Encerrar sessão', icon: '', routerLink: '/login' },
        ]
  itensUsuario = [
    { label: '  Página inicial', icon: 'fa-calendar', routerLink: '/dashboard' },
    { label: '  Fichas médicas', icon: 'fa-book', routerLink: '' },
    { label: '  Solicitação de doação', icon: 'fa-book', routerLink: '/agendamento-de-doacoes' },
    { label: '  Solicitar sangue ', icon: 'fa-calendar', routerLink: '/solicitacao-de-sangue' },
    { label: '  Encerrar sessão', icon: '', routerLink: '/login' },
  ]

    }