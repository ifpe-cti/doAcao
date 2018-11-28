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
    { label: ' Exames ', icon: '',
          items: [
              [
                  { items: [{label: 'Adicionar exame', routerLink:['/requisicao-do-exame']}]
                  },
                  {
                    items: [{label: 'Listar todos os exames',  routerLink: '/visualizacao-requisicao-exames'}]

                  }
              ]
            ] 
          },
          { label: '  Fichas médicas', icon: '',
          items: [
              [
                  {
                    items: [{label: 'Adicionar fichas médicas', routerLink: '/fichas-medicas'}]
                  },
                  {
                    items: [{label: 'Listar todas as fichas', routerLink: '/visualizacao-fichas-medicas'}]

                  }
              ]
            ] 
          },
          { label: ' Solicitações e pedidos ', icon: '',
          items: [
              [
                  {
                    items: [{label: 'Agendar doação', routerLink: '/agendamento-de-doacoes-hemope'}]
                  },
                  {
                    items: [{label: 'Listar as solicitações sanguíneas', routerLink: '/visualizacao-solicitacoes'}]

                  },
                  {
                    items: [{label: 'Listar todos os usuários', routerLink: '/listagem-de-usuarios'}]

                  }
              ]
            ] 
          },
          { label: '  Encerrar sessão', icon: '', routerLink: '/login' },
        ]

        
  itensUsuario = [
    { label: '  Página inicial', icon: 'fa-calendar', routerLink: '/dashboard' },
    { label: ' Doação ', icon: 'fa-book',
    items: [
        [
            { items: [{label: 'Solicitar doação', routerLink:['/solicitacao-de-sangue']}]
            },
            {
              items: [{label: 'Agendar doação',  routerLink: '/agendamento-de-doacoes'}]

            }
        ]
      ] 
    },
    { label: '  Fichas médicas', icon: 'fa-book', routerLink: '' },
    { label: '  Mais informações', icon: 'fa-book', routerLink: '' },
    { label: '  Encerrar sessão', icon: '', routerLink: '/login' },
  ]

    }