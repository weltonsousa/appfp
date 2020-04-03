import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { ServidorProvider } from "../../providers/servidor/servidor";
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';
import { map } from 'rxjs/operators';
import { Http } from '@angular/http';
import { Storage } from '@ionic/storage';

import { ScreenOrientation } from '@ionic-native/screen-orientation';
/**
 * Generated class for the ApostilasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-apostilas',
  templateUrl: 'apostilas.html',
})
export class ApostilasPage {

  apostilas: any = [];
  dados: any;

  constructor(private inAppBrowser: InAppBrowser, public navCtrl: NavController, public navParams: NavParams, public servidor: ServidorProvider, private storage: Storage, public http: Http, private screenOrientation: ScreenOrientation, public loadingCtrl: LoadingController) {
    this.navParams = navParams;
    this.dados = this.navParams.data;

    let loading = this.loadingCtrl.create({
      duration: 800,
      spinner: 'hide',
      content: `
      <div class="custom-spinner-container">
      <img class="loading" width="40px" height="40px" src="assets/img/load.gif" />
    </div>`
    });
    loading.present();
    this.getRetornaApostila();
  }

  getRetornaApostila() {
    this.storage.get('dados').then((val) => {
      this.dados = val;
      console.log(this.dados)
      this.servidor.getApostila(this.dados.dados.matricula,this.dados.dados.aluno).subscribe(
        data => this.apostilas = data,
        err => console.log(err)
      );
    })
  }
  

  async lockLandscape() {
    try {
      this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
    } catch (error) {
      console.log(error);
    }
  }

  async lockPortrait() {
    try {
      this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
    } catch (error) {
      console.log(error);
    }
  }

  abrirApostila(apostila: any) {
    const options: InAppBrowserOptions = {
      zoom: 'no',
      location: 'no',
      toolbar: 'no'
    }
    this.lockLandscape();
    const browser = this.inAppBrowser.create(apostila.url_apostilas, '_self', options);
    browser.on('exit').subscribe(() => {
      this.lockPortrait();
    }, err => {
      console.error(err);
    });
  }
}
