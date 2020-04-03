import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EscolherPage } from './escolher';

@NgModule({
  declarations: [
    EscolherPage,
  ],
  imports: [
    IonicPageModule.forChild(EscolherPage),
  ],
})
export class EscolherPageModule {}
