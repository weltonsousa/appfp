import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { ServidorProvider } from "../../providers/servidor/servidor";

/**
 * Generated class for the NotasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-notas',
  templateUrl: 'notas.html',
})
export class NotasPage {

  dados: any;

  notas: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage, public servidor: ServidorProvider, public loadingCtrl: LoadingController) {

    this.navParams = navParams;
    this.dados = this.navParams.data;
    let loading = this.loadingCtrl.create({
      duration: 3500,
      spinner: 'hide',
      content: `
      <div class="custom-spinner-container">
      <img class="loading" width="40px" height="40px" src="assets/img/load.gif" />
    </div>`
    });
    loading.present();
    this.getNotas();
  }

  getNotas() {
    this.storage.get('dados').then((val) => {
      this.dados = val;
      console.log(this.dados);
      this.servidor.getNotas(this.dados.dados.id_cliente, this.dados.dados.matricula, this.dados.dados.aluno).subscribe(
        data => this.notas = data,
        err => console.log(err)
      )
    });
  }
}
