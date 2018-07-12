import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import {ButtonModule} from 'primeng/primeng';
import {EditorModule} from 'primeng/primeng'; 
import {InputTextModule} from 'primeng/primeng';
import {PasswordModule} from 'primeng/primeng';
import {TabMenuModule,MenuItem} from 'primeng/primeng';
import {DataListModule} from 'primeng/primeng';
import {ScheduleModule} from 'primeng/primeng';
import {CalendarModule} from 'primeng/primeng';
import {CardModule} from 'primeng/card';
import {DataTableModule,SharedModule} from 'primeng/primeng';
import {GrowlModule} from 'primeng/primeng';
import {DialogModule} from 'primeng/primeng';
import {MessagesModule} from 'primeng/primeng';
import {InputTextareaModule} from 'primeng/primeng';
import { routing } from './app.routing';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';
import { UsuariosService } from './usuarios.service';
import { InicialComponent } from './inicial/inicial.component'
import { FirebaseConfig } from '../environments/firebase.config';
import { AngularFirestoreModule, AngularFirestore } from 'angularfire2/firestore';
import * as firebase from 'firebase';
import { RequisicaoDoExameComponent } from './requisicao-do-exame/requisicao-do-exame.component';
import {DropdownModule} from 'primeng/dropdown';
import { BancoDeSangueComponent } from './banco-de-sangue/banco-de-sangue.component';
import { FichasMedicasComponent } from './fichas-medicas/fichas-medicas.component';
import { ChartModule } from 'primeng/chart';
import { AgendamentoDeDoacoesComponent } from './agendamento-de-doacoes/agendamento-de-doacoes.component';
import  { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { FichasMedicasService } from './fichas-medicas.service';
import { AngularFireAuthModule } from "angularfire2/auth";
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AuthGuard } from './auth-guard.service';
import { AuthService } from './auth.service'
// Import pra fazer o imput de calendário funcionar sem erros 
  


@NgModule({
 declarations: [
   AppComponent,
 
   LoginComponent,
   CadastroComponent,
   InicialComponent,
   RequisicaoDoExameComponent,
   BancoDeSangueComponent,
   FichasMedicasComponent,
   AgendamentoDeDoacoesComponent,
 ],

 imports: [
   BrowserModule,
   GrowlModule,
   FormsModule, 
   ButtonModule,
   EditorModule,
   InputTextModule,
   PasswordModule,
   TabMenuModule,
   routing,
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
   
   AngularFirestoreModule.enablePersistence(),
   AngularFireAuthModule,
   AngularFireModule.initializeApp(FirebaseConfig, 'angular-auth-firebase'),
   AngularFirestoreModule.enablePersistence(),
 ],

 providers: [UsuariosService, FichasMedicasService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
