import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { ServidorProvider } from "../../providers/servidor/servidor";
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { HttpClient } from '@angular/common/http';
/**
 * Generated class for the CursosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cursos',
  templateUrl: 'cursos.html',
})
export class CursosPage {

  cursosComplementarLancamentos: any = [];
  cursosComplementarEmBreve: any = [];
  user: any = {};
  dados: any;
  tipo: any;

  cursos: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, public servidor: ServidorProvider, private storage: Storage, public http: HttpClient, private screenOrientation: ScreenOrientation) {

    this.navParams = navParams;
    this.dados = this.navParams.data;

    this.lockPortrait();

    if (this.dados.dados != null) {
      this.setDados();
    }
    let loading = this.loadingCtrl.create({
      duration: 800,
      spinner: 'hide',
      content: `
      <div class="custom-spinner-container">
      <img class="loading" width="40px" height="40px" src="assets/img/load.gif" />
    </div>`
    });
    loading.present();
    this.getRetornarCursoPrincipal()
    this.getRetornarCursoComplementar()
  }

  setDados() {
    this.storage.set('dados', this.dados);
  }

  getRetornarCursoPrincipal() {
    this.storage.get('dados').then((val) => {
      this.dados = val;
      this.servidor.getCursosPrincipal(this.dados.dados.tipo).subscribe(
        data => this.cursos = data,
        err => console.log(err)
      );
    })
  }

  getRetornarCursoComplementar() {
    this.storage.get('dados').then((val) => {
      this.dados = val;
      this.servidor.getCursoComplementarLancamentos().subscribe(
        data => this.cursosComplementarLancamentos = data,
        err => console.log(err)
      );
    })
    this.storage.get('dados').then((val) => {
      this.dados = val;
      this.servidor.getCursoComplementarBreve().subscribe(
        data => this.cursosComplementarEmBreve = data,
        err => console.log(err)
      );
    })
  }

  escolhaModulos(curso: any) {
    this.storage.get('dados').then((val) => {
      this.dados = val;
      this.navCtrl.push('EscolhaModulosPage', { dados: this.dados.dados, curso: curso });
    })
  }
  
  escolhaAulaComplementar(curso: any) {
    this.navCtrl.push('DetalheCursoComplementarPage', { curso: curso });
  }

  async lockPortrait() {
    try {
      this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
    } catch (error) {
      console.log(error);
    }
  }

  doRefresh(refresh) {
    this.getRetornarCursoPrincipal();
    this.getRetornarCursoComplementar();
    refresh.complete();
  }
}
