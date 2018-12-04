

import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { InicialComponent } from './inicial/inicial.component';
import { RequisicaoDoExameComponent } from './requisicao-do-exame/requisicao-do-exame.component';
import { BancoDeSangueComponent } from './banco-de-sangue/banco-de-sangue.component';
import { FichasMedicasComponent } from './fichas-medicas/fichas-medicas.component';
import { AgendamentoDeDoacoesComponent } from './agendamento-de-doacoes/agendamento-de-doacoes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginGoogleComponent } from './login-google/login-google.component';
import { VisualizacaoAgendamentosComponent } from './visualizacao-agendamentos/visualizacao-agendamentos.component';
import { VisualizacaoFichasMedicasComponent } from './visualizacao-fichas-medicas/visualizacao-fichas-medicas.component';
import { ListagemDeUsuariosComponent } from './listagem-de-usuarios/listagem-de-usuarios.component';
import { VisualizacaoRequisicaoExamesComponent } from './visualizacao-requisicao-exames/visualizacao-requisicao-exames.component';
import { DashboardHemopeComponent } from './dashboard-hemope/dashboard-hemope.component';
import { AgendamentoDoacoesHemopeComponent } from './agendamento-doacoes-hemope/agendamento-doacoes-hemope.component';
import { SolicitacaoDeSangueComponent } from './solicitacao-de-sangue/solicitacao-de-sangue.component';
import { VisualizacaoSolicitacoesComponent } from './visualizacao-solicitacoes/visualizacao-solicitacoes.component';
import { CadastroTecnicosComponent } from './cadastro-tecnicos/cadastro-tecnicos.component';
import { ListagemTecnicosComponent } from './listagem-tecnicos/listagem-tecnicos.component';
import { InformacoesSobreDoacaoComponent } from './informacoes-sobre-doacao/informacoes-sobre-doacao.component';
import { ListagemFlebomistasComponent } from './listagem-flebomistas/listagem-flebomistas.component';
import { CadastroFlebomistaComponent } from './cadastro-flebomista/cadastro-flebomista.component';
import { ImpedimentosComponent } from './maisInformacoes/impedimentos/impedimentos.component';
import { QuemNaoPodeDoarComponent } from './maisInformacoes/quem-nao-pode-doar/quem-nao-pode-doar.component';
import { TerceiroRequisitoComponent } from './maisInformacoes/terceiro-requisito/terceiro-requisito.component';
import { TiposSanguineosComponent } from './maisInformacoes/tipos-sanguineos/tipos-sanguineos.component';
import { SangueDoadoComponent } from './maisInformacoes/sangue-doado/sangue-doado.component';
import { EstoqueDeSangueComponent } from './maisInformacoes/estoque-de-sangue/estoque-de-sangue.component';
import { JanelaImunologicaComponent } from './maisInformacoes/janela-imunologica/janela-imunologica.component';
import { ImportanciaComponent } from './maisInformacoes/importancia/importancia.component';
import { PorqueDoarComponent } from './maisInformacoes/porque-doar/porque-doar.component';
import { DoacaoDeMedulaComponent } from './maisInformacoes/doacao-de-medula/doacao-de-medula.component';

import { AuthGuard } from './auth-guard.service';

const APP_ROUTES: Routes = [
{ path: '', component: LoginComponent },
{ path: 'login', component: LoginComponent },
{ path: 'cadastro', component: CadastroComponent }, 
{ path: 'requisicao-do-exame', component: RequisicaoDoExameComponent },
{ path: 'banco-de-sangue', component: BancoDeSangueComponent },
{ path: 'fichas-medicas', component: FichasMedicasComponent },
{ path: 'agendamento-de-doacoes', component: AgendamentoDeDoacoesComponent },
{ path: 'login-google', component: LoginGoogleComponent },
{ path: 'dashboard', component: DashboardComponent},
{ path: 'dashboard-hemope', component: DashboardHemopeComponent},
{ path: 'visualizacao-agendamentos', component: VisualizacaoAgendamentosComponent },
{ path: 'visualizacao-fichas-medicas', component: VisualizacaoFichasMedicasComponent },
{ path: 'listagem-de-usuarios', component: ListagemDeUsuariosComponent },
{ path: 'visualizacao-requisicao-exames', component: VisualizacaoRequisicaoExamesComponent },
{ path: 'agendamento-de-doacoes-hemope', component: AgendamentoDoacoesHemopeComponent },
{ path: 'solicitacao-de-sangue', component: SolicitacaoDeSangueComponent },
{ path: 'visualizacao-solicitacoes', component: VisualizacaoSolicitacoesComponent },
{ path: 'cadastro-tecnicos', component: CadastroTecnicosComponent },
{ path: 'listagem-tecnicos', component: ListagemTecnicosComponent },
{ path: 'informacoes-sobre-doacao', component: InformacoesSobreDoacaoComponent},
{ path: 'listagem-flebomistas', component: ListagemFlebomistasComponent},
{ path: 'cadastro-flebomistas', component: CadastroFlebomistaComponent},
{ path: 'impedimentos', component: ImpedimentosComponent},
{ path: 'quem-nao-pode-doar', component: QuemNaoPodeDoarComponent},
{ path: 'terceiro-requisito', component: TerceiroRequisitoComponent},
{ path: 'tipos-sanguineos', component: TiposSanguineosComponent},
{ path: 'sangue-doado', component: SangueDoadoComponent},
{ path: 'estoque-de-sangue', component: EstoqueDeSangueComponent},
{ path: 'janela-imunologica', component: JanelaImunologicaComponent},
{ path: 'importancia', component: ImportanciaComponent},
{ path: 'porque-doar', component: PorqueDoarComponent},
{ path: 'doacao-de-medula', component: DoacaoDeMedulaComponent},
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
