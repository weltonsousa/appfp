import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PaginaPerguntasPage } from './pagina-perguntas';

@NgModule({
  declarations: [
    PaginaPerguntasPage,
  ],
  imports: [
    IonicPageModule.forChild(PaginaPerguntasPage),
  ],
})
export class PaginaPerguntasPageModule {}
