import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { ServidorProvider } from "../../providers/servidor/servidor";
/**
 * Generated class for the EscolhaModulosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-escolha-modulos',
  templateUrl: 'escolha-modulos.html',
})
export class EscolhaModulosPage {

  curso: any;

  dados: any;
  modulos: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, public servidor: ServidorProvider) {
    this.navParams = navParams;
    this.dados = this.navParams.data;
    console.log(this.dados.curso.qual_curso)
    console.log(this.dados.dados)
    let loading = this.loadingCtrl.create({
      spinner: 'hide',
      content: `
      <div class="custom-spinner-container">
      <img class="loading" width="40px" height="40px" src="assets/img/load.gif" />
    </div>`
    });
    loading.present();
    this.getRetornarCursoPrincipalModulo()
    loading.dismiss();
  }
  getRetornarCursoPrincipalModulo() {
    this.servidor.getCursosPrincipalModulos(this.dados.curso.qual_curso).subscribe(
      data => this.modulos = data,
      err => console.log(err)
    );
  }

  escolherModulo(modulo: any) {
    this.navCtrl.push('AulasPage', { modulo: modulo, curso: this.dados.curso });
  }

}
