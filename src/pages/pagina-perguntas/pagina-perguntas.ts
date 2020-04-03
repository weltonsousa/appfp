import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import _ from 'lodash';
import { ServidorProvider } from "../../providers/servidor/servidor";

/**
 * Generated class for the PaginaPerguntasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pagina-perguntas',
  templateUrl: 'pagina-perguntas.html',
})
export class PaginaPerguntasPage {

  topico: any;
  perguntas: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public servidor: ServidorProvider, public loadingCtrl: LoadingController) {
    this.topico = this.navParams.data.topico;
    let loading = this.loadingCtrl.create({
      duration: 800,
      spinner: 'hide',
      content: `
      <div class="custom-spinner-container">
      <img class="loading" width="40px" height="40px" src="assets/img/load.gif" />
    </div>`
    });
    loading.present();
    this.getData();
  }

  getData() {
      this.servidor.getSubcategoriasNosTopicos(this.topico.qual_categoria).subscribe(
        data => this.perguntas = data,
        err => console.log(err)
      )
  }

  back() {
    this.navCtrl.setRoot('DificuldadeAcessoPage')
  }

  escolher(tudo) {
    this.navCtrl.setRoot('DificuldadeRespostaPage',{pergunta: tudo})
  }
}
