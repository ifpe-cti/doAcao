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
            { label: 'Fichas médicas' , icon: 'fa-stethoscope',
            items: [
              [
                { items: [
                      {label: 'Adicionar Fichas Médicas', routerLink:['/fichas-medicas']}, 
                      {label: 'Listar todas as Fichas Médicas',  routerLink: '/visualizacao-fichas-medicas'}]},    
                    ]]},
        
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
                    items: [{label: 'Listar todos os agendamentos de doação',  routerLink: '/visualizacao-agendamentos'}]
                  },
                  
                  { items: [{ label: 'Listar todas os pedidos de doação', routerLink: '/listagem-pedidos' }],}

                 
              ]
            ] 
          },
          {label: '  Gráfico com pedidos de doação', icon: 'fa-stethoscope', routerLink: '/grafico-pedidos-de-doacao'},
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
    { label: '  Fichas médicas', icon: 'fa-stethoscope', routerLink: '/fichas-medicas-individuais' },
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
              { items: [{label: 'Impedimentos', routerLink: '/impedimentosHemope'}]
              },
              { items: [{label: 'Quem não pode doar?', routerLink: '/quem-nao-pode-doar-hemope'}]
              },
              { items: [{label: 'Cigurgias, tatuagens, vacinas e viagens', routerLink: '/terceiro-requisito-hemope'}]
              },
          ]
        ] 
      },{ label: ' Dados ', icon: 'fa-stethoscope',
      items: [
          [
              {
                items: [{label: 'Tipos sanguíneos', routerLink: '/tipos-sanguineos-hemope'}]
              },
              { items: [{label: 'O que acontece com o sangue doado?', routerLink: '/sangue-doado-hemope'}]
              },
              { items: [{label: 'Estoque de sangue', routerLink: '/estoque-de-sangue-hemope'}]
              },
              { items: [{label: 'Janela imunológica', routerLink: '/janela-imunologica-hemope'}]
              },
          ]
        ] 
      },{ label: ' Por que doar sangue? ',  icon: 'fa-heartbeat',
      items: [
          [
              { items: [{label: 'Importância', routerLink: '/importanciaHemope'}]
              },
              {
                items: [{label: 'Por que doar?', routerLink: '/porque-doar-hemope'}]
              },
              { items: [{label: 'Doação de medula', routerLink: '/doacao-de-medula-hemope'}]
              },
              { items: [{label: 'Doação de plaquetas', routerLink: '/doacao-de-plaquetas-hemope'}]
              },
              { items: [{label: 'Benefícios para o doador', routerLink: '/beneficiosHemope'}]
              },
              { items: [{label: 'Alterações nos exames', routerLink: '/alteracoes-nos-exames-hemope'}]
              },
          ]
        ] 
      },{ label: ' Quais as etapas? ', icon: 'fa-list',
      items: [
          [
              { items: [{label: 'Quais as etapas?', routerLink: '/etapasHemope'}]
              },
              {
                items: [{label: 'Reações adversas', routerLink: '/reacoes-adversas-hemope'}]
              },
              { items: [{label: 'Intervalo para doação', routerLink: '/intervaloHemope'}]
              },
              { items: [{label: 'Volume de sangue coletado', routerLink: '/volume-de-sangue-hemope'}]
              },
              { items: [{label: 'Cuidados pós doação', routerLink: '/pos-doacao-hemope'}]
              },
          ]
        ] 
      },
      { label: '  Encerrar sessão', icon: 'fa-power-off', routerLink: '/login' },
    ]


    }
    