

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
import { InicialHemopeComponent } from './inicial-hemope/inicial-hemope.component';
import { VisualizacaoAgendamentosComponent } from './visualizacao-agendamentos/visualizacao-agendamentos.component';
import { VisualizacaoFichasMedicasComponent } from './visualizacao-fichas-medicas/visualizacao-fichas-medicas.component';
import { VisualizacaoBancoDeSangueComponent } from './visualizacao-banco-de-sangue/visualizacao-banco-de-sangue.component';




import { AuthGuard } from './auth-guard.service';

const APP_ROUTES: Routes = [
{ path: '', component: LoginComponent },
{ path: 'login', component: LoginComponent },
{ path: 'cadastro', component: CadastroComponent }, 
{ path: 'inicial', component: InicialComponent },
{ path: 'requisicao-do-exame', component: RequisicaoDoExameComponent },
{ path: 'banco-de-sangue', component: BancoDeSangueComponent },
{ path: 'fichas-medicas', component: FichasMedicasComponent },
{ path: 'agendamento-de-doacoes', component: AgendamentoDeDoacoesComponent },
{ path: 'login-google', component: LoginGoogleComponent },
{ path: 'dashboard'
// canActivate: [AuthGuard]
,component: DashboardComponent},
{ path: 'visualizacao-agendamentos', component: VisualizacaoAgendamentosComponent },
{ path: 'visualizacao-fichas-medicas', component: VisualizacaoFichasMedicasComponent },
{ path: 'visualizacao-banco-de-sangue', component: VisualizacaoBancoDeSangueComponent },

];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
