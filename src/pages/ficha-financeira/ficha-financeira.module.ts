import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FichaFinanceiraPage } from './ficha-financeira';

@NgModule({
  declarations: [
    FichaFinanceiraPage,
  ],
  imports: [
    IonicPageModule.forChild(FichaFinanceiraPage),
  ],
})
export class FichaFinanceiraPageModule {}
