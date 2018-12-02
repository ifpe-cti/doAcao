import { Injectable } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MegaMenuModule } from 'primeng/megamenu';


@Injectable({
  providedIn: 'root'
})
export class MenusService {

  constructor() { }


  itensHemope = [
    { label: '  Página inicial', icon: '', routerLink: '/dashboard-hemope' },
    {label: '  Agendar doação', icon: 'fa-calendar-plus-o', routerLink: '/agendamento-de-doacoes-hemope'},
    { label: ' Exames ',  icon: 'fa-heartbeat',
          items: [
              [
                  { items: [{label: 'Adicionar exame',  routerLink:['/requisicao-do-exame']}]
                  }
              ]
            ] 
          },
          { label: '  Fichas médicas', icon: 'fa-stethoscope',
          items: [
              [
                  {
                    items: [{label: 'Adicionar fichas médicas', routerLink: '/fichas-medicas'}]
                  }
              ]
            ] 
          },

          { label: '  Funcionários', icon: 'fa-user-md',
          items: [
              [
                  {
                    items: [{label: 'Cadastrar técnico', routerLink: '/cadastro-tecnicos'}]
                  },

                  {
                    items: [{label: 'Cadastrar flebomista', routerLink: '/cadastro-flebomistas'}]
                  }
              ]
            ] 
          },

          { label: ' Listar ',icon: 'fa-list',
          items: [
              [
                  {
                    items: [{label: 'Listar as solicitações sanguíneas', routerLink: '/visualizacao-solicitacoes'}]

                  },
                  {
                    items: [{label: 'Listar todos os usuários', routerLink: '/listagem-de-usuarios'}]

                  },
                  {
                    items: [{label: 'Listar todas as fichas médicas', routerLink: '/visualizacao-fichas-medicas'}]

                  },
                  {
                    items: [{label: 'Listar todos os exames',  routerLink: '/visualizacao-requisicao-exames'}]

                  },

                  {
                    items: [{label: 'Listar todos os técnicos',  routerLink: '/listagem-tecnicos'}]
                  },

                  {
                    items: [{label: 'Listar todos os flebomistas',  routerLink: '/listagem-flebomistas'}]
                  },

                  {
                    items: [{label: 'Listar todos os agendamentos de doação',  routerLink: '/visualizacao-agendamentos'}]
                  }
              ]
            ] 
          },
          { label: '  Encerrar sessão', icon: 'fa-power-off', routerLink: '/login' },

        ]

        
  itensUsuario = [
    { label: '  Página inicial', icon: '', routerLink: '/dashboard' },
    { label: ' Doação ', icon: 'fa-heart-o',
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
    { label: '  Fichas médicas', icon: 'fa-stethoscope', routerLink: '' },
    { label: '  Mais informações', icon: 'fa-info', routerLink: '' },
    { label: '  Encerrar sessão', icon: 'fa-power-off', routerLink: '/login' },
  ]

    }