import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetalheDaAulaCursoPrincipalPage } from './detalhe-da-aula-curso-principal';

@NgModule({
  declarations: [
    DetalheDaAulaCursoPrincipalPage,
  ],
  imports: [
    IonicPageModule.forChild(DetalheDaAulaCursoPrincipalPage),
  ],
})
export class DetalheDaAulaCursoPrincipalPageModule {}
