import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_BOOTSTRAP_LISTENER } from '@angular/core';
import { routing } from './app.routing';


//component

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { InicialComponent } from './inicial/inicial.component'
import { RequisicaoDoExameComponent } from './requisicao-do-exame/requisicao-do-exame.component';
import { FichasMedicasComponent } from './fichas-medicas/fichas-medicas.component';
import { AgendamentoDeDoacoesComponent } from './agendamento-de-doacoes/agendamento-de-doacoes.component';
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
import { DoacaoDePlaquetasComponent } from './maisInformacoes/doacao-de-plaquetas/doacao-de-plaquetas.component';
import { BeneficiosComponent } from './maisInformacoes/beneficios/beneficios.component';
import { AlteracoesNosExamesComponent } from './maisInformacoes/alteracoes-nos-exames/alteracoes-nos-exames.component';
import { EtapasComponent } from './maisInformacoes/etapas/etapas.component';
import { ReacoesAdversasComponent } from './maisInformacoes/reacoes-adversas/reacoes-adversas.component';
import { IntervaloComponent } from './maisInformacoes/intervalo/intervalo.component';
import { VolumeDeSangueComponent } from './maisInformacoes/volume-de-sangue/volume-de-sangue.component';
import { PosDoacaoComponent } from './maisInformacoes/pos-doacao/pos-doacao.component';
import { InformacoesSobreDoacaoHemopeComponent } from './informacoes-sobre-doacao-hemope/informacoes-sobre-doacao-hemope.component';


//module

import {ButtonModule} from 'primeng/primeng';
import {EditorModule} from 'primeng/primeng'; 
import {InputTextModule} from 'primeng/primeng';
import {PasswordModule} from 'primeng/primeng';
import {TabMenuModule, MenuItem} from 'primeng/primeng';
import {DataListModule} from 'primeng/primeng';
import {ScheduleModule} from 'primeng/primeng';
import {CalendarModule} from 'primeng/primeng';
import {CardModule} from 'primeng/card';
import {DataTableModule,SharedModule} from 'primeng/primeng';
import {GrowlModule} from 'primeng/primeng';
import {DialogModule} from 'primeng/primeng';
import {MessagesModule} from 'primeng/primeng';
import {InputTextareaModule} from 'primeng/primeng';
import {DropdownModule} from 'primeng/dropdown';
import { ChartModule } from 'primeng/chart';
import  { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { AutoCompleteModule } from 'primeng/autocomplete';
import { MegaMenuModule } from 'primeng/megamenu';
import { FormsModule } from '@angular/forms';
import {TableModule} from 'primeng/table';

//angularFire

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { FirebaseConfig } from '../environments/firebase.config';
import { AngularFirestoreModule, AngularFirestore } from 'angularfire2/firestore';

//service
import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';
import { UsuariosService } from './usuarios.service';
import { FichasMedicasService } from './fichas-medicas.service';
import { MenusService } from './menus.service';
import { AgendamentoDeDoacoesService } from './agendamento-de-doacoes.service';
import { TecnicoService } from './tecnicos.service';
import { FlebomistaService } from './flebomista.service';
import { BeneficiosHemopeComponent } from './beneficios-hemope/beneficios-hemope.component';
import { AlteracoesNosExamesHemopeComponent } from './alteracoes-nos-exames-hemope/alteracoes-nos-exames-hemope.component';
import { DoacaoDeMedulaHemopeComponent } from './doacao-de-medula-hemope/doacao-de-medula-hemope.component';
import { DoacaoDePlaquetasHemopeComponent } from './doacao-de-plaquetas-hemope/doacao-de-plaquetas-hemope.component';
import { EstoqueDeSangueHemopeComponent } from './estoque-de-sangue-hemope/estoque-de-sangue-hemope.component';
import { ImpedimentosHemopeComponent } from './impedimentos-hemope/impedimentos-hemope.component';
import { ImportanciaHemopeComponent } from './importancia-hemope/importancia-hemope.component';
import { IntervaloHemopeComponent } from './intervalo-hemope/intervalo-hemope.component';
import { JanelaImunologicaHemopeComponent } from './janela-imunologica-hemope/janela-imunologica-hemope.component';
import { PorqueDoarHemopeComponent } from './porque-doar-hemope/porque-doar-hemope.component';
import { PosDoacaoHemopeComponent } from './pos-doacao-hemope/pos-doacao-hemope.component';
import { QuemNaoPodeDoarHemopeComponent } from './quem-nao-pode-doar-hemope/quem-nao-pode-doar-hemope.component';


@NgModule({

  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    CadastroComponent,
    InicialComponent,
    RequisicaoDoExameComponent,
    FichasMedicasComponent,
    AgendamentoDeDoacoesComponent,
    LoginGoogleComponent,
    VisualizacaoAgendamentosComponent,
    VisualizacaoFichasMedicasComponent,
    ListagemDeUsuariosComponent,
    DashboardHemopeComponent,
    VisualizacaoRequisicaoExamesComponent,
    AgendamentoDoacoesHemopeComponent,
    SolicitacaoDeSangueComponent,
    VisualizacaoSolicitacoesComponent,
    CadastroTecnicosComponent,
    ListagemTecnicosComponent,
    InformacoesSobreDoacaoComponent,
    ListagemFlebomistasComponent,
    CadastroFlebomistaComponent,
    ImpedimentosComponent,
    QuemNaoPodeDoarComponent,
    TerceiroRequisitoComponent,
    TiposSanguineosComponent,
    SangueDoadoComponent,
    EstoqueDeSangueComponent,
    JanelaImunologicaComponent,
    ImportanciaComponent,
    PorqueDoarComponent,
    DoacaoDeMedulaComponent,
    DoacaoDePlaquetasComponent,
    BeneficiosComponent,
    AlteracoesNosExamesComponent,
    EtapasComponent,
    ReacoesAdversasComponent,
    IntervaloComponent,
    VolumeDeSangueComponent,
    PosDoacaoComponent,
    InformacoesSobreDoacaoHemopeComponent,
    BeneficiosHemopeComponent,
    AlteracoesNosExamesHemopeComponent,
    DoacaoDeMedulaHemopeComponent,
    DoacaoDePlaquetasHemopeComponent,
    EstoqueDeSangueHemopeComponent,
    ImpedimentosHemopeComponent,
    ImportanciaHemopeComponent,
    IntervaloHemopeComponent,
    JanelaImunologicaHemopeComponent,
    PorqueDoarHemopeComponent,
    PosDoacaoHemopeComponent,
    QuemNaoPodeDoarHemopeComponent,
   
  ],

  imports: [
    BrowserModule,
    routing,
    FormsModule,
    ButtonModule,
    EditorModule,
    InputTextModule,
    PasswordModule,
    TabMenuModule,
    DataListModule,
    ScheduleModule,
    CalendarModule,
    DataTableModule,
    SharedModule,
    GrowlModule,
    DialogModule,
    InputTextareaModule,
    CardModule,
    InputTextModule,
    DropdownModule,
    ChartModule,
    BrowserAnimationsModule,
    AutoCompleteModule,
    MegaMenuModule,
    TableModule,


    AngularFireModule.initializeApp(FirebaseConfig),
    //AngularFireModule.initializeApp(environment.firebase, 'angular-auth-firebase'),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule.enablePersistence(),
  ], 

  providers: [AuthService, AuthGuard, UsuariosService, FichasMedicasService, AgendamentoDeDoacoesService, 
              MenusService, TecnicoService, FlebomistaService],

  bootstrap: [AppComponent]


})
export class AppModule { }