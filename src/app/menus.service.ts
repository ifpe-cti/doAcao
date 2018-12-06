import { Injectable } from '@angular/core';
import { UsuariosService } from './usuarios.service';


@Injectable({
  providedIn: 'root'
})
export class MenusService {

  constructor() { }


  itensHemope = [
    { label: '  Página inicial', icon: '', routerLink: '/dashboard-hemope' },
    {label: '  Agendar doação', icon: 'fa-calendar-plus-o', routerLink: '/agendamento-de-doacoes-hemope'},
    { label: '  Exames' , icon: 'fa-heartbeat',
    items: [
      [
        { items: [
              {label: 'Adicionar Exame', routerLink:['/requisicao-do-exame']}, 
              {label: 'Listar todos os Exames',  routerLink: '/visualizacao-requisicao-exames'}]},    
            ]]},
  
          { label: '  Fichas médicas', icon: 'fa-stethoscope',
          items: [
              [
                  {
                    items: [{label: 'Adicionar fichas médicas', routerLink: '/fichas-medicas'}]
                  }
              ]
            ] 
          }, 
          { label: '  Funcionários' , icon: 'fa-user-md',
          items: [
            [
              {label: 'Técnico', items: [
                    {label: 'Adicionar Técnico', routerLink: '/cadastro-tecnicos'}, 
                    {label: 'Listar Técnico', routerLink: '/listagem-tecnicos'}]},
              {label: 'Flebomista', items: [
                      {label: 'Adicionar Flebomista', routerLink: '/cadastro-flebomistas'}, 
                      {label: 'Listar Flebomista', routerLink: '/listagem-flebomistas'}]}    
                  ]]},

          { label: ' Listar ', icon: 'fa-list',
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
      { label: ' Requisitos básicos ', icon: 'fa-calendar-plus-o',
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
      },{ label: ' Dados ', icon: 'fa-stethoscope',
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
      },{ label: ' Por que doar sangue? ',  icon: 'fa-heartbeat',
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
              { items: [{label: 'Benefícios para o doador', routerLink: '/beneficios'}]
              },
              { items: [{label: 'Alterações nos exames', routerLink: '/alteracoes-nos-exames'}]
              },
          ]
        ] 
      },{ label: ' Quais as etapas? ', icon: 'fa-list',
      items: [
          [
              { items: [{label: 'Quais as etapas?', routerLink: '/etapas'}]
              },
              {
                items: [{label: 'Reações adversas', routerLink: '/reacoes-adversas'}]
              },
              { items: [{label: 'Intervalo para doação', routerLink: '/intervalo'}]
              },
              { items: [{label: 'Volume de sangue coletado', routerLink: '/volume-de-sangue'}]
              },
              { items: [{label: 'Cuidados pós doação', routerLink: '/pos-doacao'}]
              },
          ]
        ] 
      },
      { label: '  Encerrar sessão', icon: 'fa-power-off', routerLink: '/login' },
    ]

    itensMaisInformacoesHemope = [
      { label: '  Voltar', icon: '', routerLink: '/dashboard-hemope' },
      { label: ' Requisitos básicos ', icon: 'fa-calendar-plus-o',
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
      },{ label: ' Dados ', icon: 'fa-stethoscope',
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
      },{ label: ' Por que doar sangue? ',  icon: 'fa-heartbeat',
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
              { items: [{label: 'Benefícios para o doador', routerLink: '/beneficios'}]
              },
              { items: [{label: 'Alterações nos exames', routerLink: '/alteracoes-nos-exames'}]
              },
          ]
        ] 
      },{ label: ' Quais as etapas? ', icon: 'fa-list',
      items: [
          [
              { items: [{label: 'Quais as etapas?', routerLink: '/etapas'}]
              },
              {
                items: [{label: 'Reações adversas', routerLink: '/reacoes-adversas'}]
              },
              { items: [{label: 'Intervalo para doação', routerLink: '/intervalo'}]
              },
              { items: [{label: 'Volume de sangue coletado', routerLink: '/volume-de-sangue'}]
              },
              { items: [{label: 'Cuidados pós doação', routerLink: '/pos-doacao'}]
              },
          ]
        ] 
      },
      { label: '  Encerrar sessão', icon: 'fa-power-off', routerLink: '/login' },
    ]
    }
    
  