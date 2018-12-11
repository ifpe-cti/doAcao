

import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { RequisicaoDoExameComponent } from './requisicao-do-exame/requisicao-do-exame.component';
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
import { DoacaoDePlaquetasComponent } from './maisInformacoes/doacao-de-plaquetas/doacao-de-plaquetas.component';
import { BeneficiosComponent } from './maisInformacoes/beneficios/beneficios.component';
import { AlteracoesNosExamesComponent } from './maisInformacoes/alteracoes-nos-exames/alteracoes-nos-exames.component';
import { EtapasComponent } from './maisInformacoes/etapas/etapas.component';
import { ReacoesAdversasComponent } from './maisInformacoes/reacoes-adversas/reacoes-adversas.component';
import { IntervaloComponent } from './maisInformacoes/intervalo/intervalo.component';
import { VolumeDeSangueComponent } from './maisInformacoes/volume-de-sangue/volume-de-sangue.component';
import { PosDoacaoComponent } from './maisInformacoes/pos-doacao/pos-doacao.component';
import { GraficoPedidosDeDoacaoComponent } from './grafico-pedidos-de-doacao/grafico-pedidos-de-doacao.component';
import { InformacoesSobreDoacaoHemopeComponent } from './informacoes-sobre-doacao-hemope/informacoes-sobre-doacao-hemope.component';
// informações hemope
import { BeneficiosHemopeComponent } from './maisInformacoesHemope/beneficios-hemope/beneficios-hemope.component';
import { AlteracoesNosExamesHemopeComponent } from './maisInformacoesHemope/alteracoes-nos-exames-hemope/alteracoes-nos-exames-hemope.component';
import { DoacaoDeMedulaHemopeComponent } from './maisInformacoesHemope/doacao-de-medula-hemope/doacao-de-medula-hemope.component';
import { DoacaoDePlaquetasHemopeComponent } from './maisInformacoesHemope/doacao-de-plaquetas-hemope/doacao-de-plaquetas-hemope.component';
import { EstoqueDeSangueHemopeComponent } from './maisInformacoesHemope/estoque-de-sangue-hemope/estoque-de-sangue-hemope.component';
import { ImpedimentosHemopeComponent } from './maisInformacoesHemope/impedimentos-hemope/impedimentos-hemope.component';
import { ImportanciaHemopeComponent } from './maisInformacoesHemope/importancia-hemope/importancia-hemope.component';
import { IntervaloHemopeComponent } from './maisInformacoesHemope/intervalo-hemope/intervalo-hemope.component';
import { JanelaImunologicaHemopeComponent } from './maisInformacoesHemope/janela-imunologica-hemope/janela-imunologica-hemope.component';
import { PorqueDoarHemopeComponent } from './maisInformacoesHemope/porque-doar-hemope/porque-doar-hemope.component';
import { PosDoacaoHemopeComponent } from './maisInformacoesHemope/pos-doacao-hemope/pos-doacao-hemope.component';
import { QuemNaoPodeDoarHemopeComponent } from './maisInformacoesHemope/quem-nao-pode-doar-hemope/quem-nao-pode-doar-hemope.component';
import { ReacoesAdversasHemopeComponent } from './maisInformacoesHemope/reacoes-adversas-hemope/reacoes-adversas-hemope.component';
import { SangueDoadoHemopeComponent } from './maisInformacoesHemope/sangue-doado-hemope/sangue-doado-hemope.component';
import { TerceiroRequisitoHemopeComponent } from './maisInformacoesHemope/terceiro-requisito-hemope/terceiro-requisito-hemope.component';
import { TiposSanguineosHemopeComponent } from './maisInformacoesHemope/tipos-sanguineos-hemope/tipos-sanguineos-hemope.component';
import { VolumeDeSangueHemopeComponent } from './maisInformacoesHemope/volume-de-sangue-hemope/volume-de-sangue-hemope.component';
import { VisualizacaoFichaMedicaIndividualComponent } from './visualizacao-ficha-medica-individual/visualizacao-ficha-medica-individual.component';
import { ListagemPedidosComponent } from './listagem-pedidos/listagem-pedidos.component';
import { ListagemPedidosPorSangueComponent } from './listagem-pedidos-por-sangue/listagem-pedidos-por-sangue.component';

import { AuthGuard } from './auth-guard.service';

const APP_ROUTES: Routes = [
{ path: '', component: LoginComponent },
{ path: 'login', component: LoginComponent },
{ path: 'cadastro', component: CadastroComponent }, 
{ path: 'requisicao-do-exame', component: RequisicaoDoExameComponent },
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
{ path: 'listagem-pedidos', component: ListagemPedidosComponent},
{ path: 'listagem-pedidos-por-tipoSanguineo', component: ListagemPedidosPorSangueComponent},
{ path: 'grafico-pedidos-de-doacao', component: GraficoPedidosDeDoacaoComponent},



{ path: 'fichas-medicas-individuais', component: VisualizacaoFichaMedicaIndividualComponent},
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
{ path: 'doacao-de-plaquetas', component: DoacaoDePlaquetasComponent},
{ path: 'beneficios', component: BeneficiosComponent},
{ path: 'alteracoes-nos-exames', component: AlteracoesNosExamesComponent},
{ path: 'etapas', component: EtapasComponent},
{ path: 'reacoes-adversas', component: ReacoesAdversasComponent},
{ path: 'intervalo', component: IntervaloComponent},
{ path: 'volume-de-sangue', component: VolumeDeSangueComponent},
{ path: 'pos-doacao', component: PosDoacaoComponent},
{ path: 'informacoes-sobre-doacao-hemope', component: InformacoesSobreDoacaoHemopeComponent},
//informações hemope
{ path: 'impedimentosHemope', component: ImpedimentosHemopeComponent},
{ path: 'quem-nao-pode-doar-hemope', component: QuemNaoPodeDoarHemopeComponent},
{ path: 'terceiro-requisito-hemope', component: TerceiroRequisitoHemopeComponent},
{ path: 'tipos-sanguineos-hemope', component: TiposSanguineosHemopeComponent},
{ path: 'sangue-doado-hemope', component: SangueDoadoHemopeComponent},
{ path: 'estoque-de-sangue-hemope', component: EstoqueDeSangueHemopeComponent},
{ path: 'janela-imunologica-hemope', component: JanelaImunologicaHemopeComponent},
{ path: 'importanciaHemope', component: ImportanciaHemopeComponent},
{ path: 'porque-doar-hemope', component: PorqueDoarHemopeComponent},
{ path: 'doacao-de-medula-hemope', component: DoacaoDeMedulaHemopeComponent},
{ path: 'doacao-de-plaquetas-hemope', component: DoacaoDePlaquetasHemopeComponent},
{ path: 'beneficiosHemope', component: BeneficiosHemopeComponent},
{ path: 'alteracoes-nos-exames-hemope', component: AlteracoesNosExamesHemopeComponent},
{ path: 'reacoes-adversas-hemope', component: ReacoesAdversasHemopeComponent},
{ path: 'intervaloHemope', component: IntervaloHemopeComponent},
{ path: 'volume-de-sangue-hemope', component: VolumeDeSangueHemopeComponent},
{ path: 'pos-doacao-hemope', component: PosDoacaoHemopeComponent},
{ path: 'informacoes-sobre-doacao-hemope', component: InformacoesSobreDoacaoHemopeComponent},
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
