import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ServidorProvider } from '../providers/servidor/servidor';
import { ScreenOrientation } from '@ionic-native/screen-orientation';

import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { LoginPageModule } from '../pages/login/login.module';
import { NotasPage } from '../pages/notas/notas';
import { TabAlunoPage } from '../pages/tab-aluno/tab-aluno';
import { CursosPageModule } from '../pages/cursos/cursos.module';
import { EscolherPage } from '../pages/escolher/escolher';
import { ApostilasPage } from '../pages/apostilas/apostilas';
import { MaisPage } from '../pages/mais/mais';
import { SearchPage } from '../pages/search/search';
import { EsqueciASenhaPageModule } from '../pages/esqueci-a-senha/esqueci-a-senha.module';

@NgModule({
  declarations: [
    MyApp,
    EscolherPage,
    ApostilasPage,
    NotasPage,
    MaisPage,
    SearchPage,
    TabAlunoPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    LoginPageModule,
    CursosPageModule,
    EsqueciASenhaPageModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    EscolherPage,
    ApostilasPage,
    NotasPage,
    MaisPage,
    SearchPage,
    TabAlunoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    InAppBrowser,
    ServidorProvider,
    ScreenOrientation
  ]
})
export class AppModule {}
