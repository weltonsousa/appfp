import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';
import { ScreenOrientation } from '@ionic-native/screen-orientation';

/**
 * Generated class for the DetalheDaAulaCursoPrincipalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalhe-da-aula-curso-principal',
  templateUrl: 'detalhe-da-aula-curso-principal.html',
})
export class DetalheDaAulaCursoPrincipalPage {

  curso: any;
  modulo: any;
  aula: any;
  codigo: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private inAppBrowser: InAppBrowser, public toastCtrl: ToastController, private screenOrientation: ScreenOrientation) {
    this.curso = this.navParams.data.curso;
    this.modulo = this.navParams.data.modulo;
    this.aula = this.navParams.data.aula;
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

  habilitar() {
    if (this.codigo == this.aula.codigo_da_aula) {
      const options: InAppBrowserOptions = {
        zoom: 'no',
        location: 'no',
        toolbar: 'no'
      }
      this.lockLandscape();
      const browser = this.inAppBrowser.create(this.aula.url_aula, '_self', options);
      browser.on('exit').subscribe(() => {
        this.lockPortrait();
      }, err => {
        console.error(err);
      });
    } else {
      this.presentToast("Codigo inválido");
    }
  }


  presentToast(mensagem: string) {
    let toast = this.toastCtrl.create({
      message: mensagem,
      duration: 3000
    });
    toast.present();
  }
}
