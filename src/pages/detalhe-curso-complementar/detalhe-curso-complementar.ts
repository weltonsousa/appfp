import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';
import { ServidorProvider } from "../../providers/servidor/servidor";
import { ScreenOrientation } from '@ionic-native/screen-orientation';

/**
 * Generated class for the DetalheCursoComplementarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalhe-curso-complementar',
  templateUrl: 'detalhe-curso-complementar.html',
})
export class DetalheCursoComplementarPage {
  aulas: any = [];
  curso: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, private inAppBrowser: InAppBrowser, public servidor: ServidorProvider, private screenOrientation: ScreenOrientation) {

    this.curso = this.navParams.data.curso;

    let loading = this.loadingCtrl.create({
      spinner: 'hide',
      content: `
      <div class="custom-spinner-container">
      <img class="loading" width="40px" height="40px" src="assets/img/load.gif" />
    </div>`
    });
    loading.present();
    this.getRetornarCursoComplementarAulas();
    loading.dismiss();
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

  getRetornarCursoComplementarAulas() {
    this.servidor.getCursosComplementarAulas(this.curso.qual_curso).subscribe(
      data => this.aulas = data,
      err => console.log(err)
    );
  }

  assistirAulas(aula: any) {
    if ( aula.qual_curso == 3 || aula.qual_aula == 1) {
      const options: InAppBrowserOptions = {
        zoom: 'no',
        location: 'no',
        toolbar: 'no'
      }
      this.lockLandscape();
      const browser = this.inAppBrowser.create(aula.url_aula, '_self', options);
      browser.on('exit').subscribe(() => {
        this.lockPortrait();
      }, err => {
        console.error(err);
      });
    }
  }

}

