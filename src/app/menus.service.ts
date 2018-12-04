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
    { label: '  Encerrar sessão', icon: 'fa-power-off', routerLink: '/login' },
  ]

  

    itensMaisInformacoes = [
      { label: '  Voltar', icon: '', routerLink: '/dashboard' },
      { label: ' Requisitos básicos ', icon: 'fa-heart-o',
      items: [
          [
              { items: [{label: 'Impedimentos', routerLink: '/impedimentos'}]
              },
              { items: [{label: 'Quem não pode doar?', routerLink: '/quem-nao-pode-doar'}]
              },
              { items: [{label: 'Cigurgias, tatuagens, vacinas e viagens', routerLink: '/terceiro-requisito'}]
              },
          ]
        ] 
      },{ label: ' Dados ', icon: 'fa-heart-o',
      items: [
          [
              {
                items: [{label: 'Tipos sanguíneos', routerLink: '/tipos-sanguineos'}]
              },
              { items: [{label: 'O que acontece com o sangue doado?', routerLink: '/sangue-doado'}]
              },
              { items: [{label: 'Estoque de sangue', routerLink: '/estoque-de-sangue'}]
              },
              { items: [{label: 'Janela imunológica', routerLink: '/janela-imunologica'}]
              },
          ]
        ] 
      },{ label: ' Por que doar sangue? ', icon: 'fa-heart-o',
      items: [
          [
              { items: [{label: 'Importância', routerLink: '/importancia'}]
              },
              {
                items: [{label: 'Por que doar?', routerLink: '/porque-doar'}]
              },
              { items: [{label: 'Doação de medula', routerLink: '/doacao-de-medula'}]
              },
              { items: [{label: 'Doação de plaquetas', routerLink: '/doacao-de-plaquetas'}]
              },
              { items: [{label: 'Benefícios para o doador'}]
              },
              { items: [{label: 'Alterações nos exames'}]
              },
          ]
        ] 
      },{ label: ' Quais as etapas? ', icon: 'fa-stethoscope',
      items: [
          [
              { items: [{label: 'Quais as etapas?'}]
              },
              {
                items: [{label: 'Reações adversas'}]
              },
              { items: [{label: 'Intervalo para doação'}]
              },
              { items: [{label: 'Reações adversas'}]
              },
              { items: [{label: 'Volume de sangue coletado'}]
              },
              { items: [{label: 'Cuidados pós doação'}]
              },
          ]
        ] 
      },
      { label: '  Encerrar sessão', icon: 'fa-power-off', routerLink: '/login' },
    ]
    }
  