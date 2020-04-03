import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabAlunoPage } from './tab-aluno';

@NgModule({
  declarations: [
    TabAlunoPage,
  ],
  imports: [
    IonicPageModule.forChild(TabAlunoPage),
  ],
})
export class TabAlunoPageModule {}
