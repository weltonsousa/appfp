import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import _ from 'lodash';
import { ServidorProvider } from "../../providers/servidor/servidor";
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {

  usuarios: any = [];
  apostilas: any = [];
  cursos: any = [];
  todos: any = [];

  queryText: string;
  selected: string;

  dados: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public servidor: ServidorProvider, private inAppBrowser: InAppBrowser, private storage: Storage, public loadingCtrl: LoadingController, private screenOrientation: ScreenOrientation) {
    this.queryText = "";
    this.selected = "0";

    this.navParams = navParams;
    this.dados = this.navParams.data;

    let loading = this.loadingCtrl.create({
      duration: 1000,
      spinner: 'hide',
      content: `
      <div class="custom-spinner-container">
      <img class="loading" width="40px" height="40px" src="assets/img/load.gif" />
    </div>`
    });
    loading.present();
    this.getBuscaTudo('');
    this.getBuscaUsuario('');
    this.getBuscaCurso('');
    this.getBuscaApostila('');
  }

  limpar() {

    this.getBuscaTudo('');
    this.getBuscaUsuario('');
    this.getBuscaCurso('');
    this.getBuscaApostila('');
  }
  
  filter(texto: any) {
    let val = texto.target.value;
    this.getBuscaTudo(val.trim());
    this.getBuscaUsuario(val.trim());
    this.getBuscaCurso(val.trim());
    this.getBuscaApostila(val.trim());
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

  getBuscaTudo(nome) {
    this.storage.get('dados').then((val) => {
      this.dados = val;
      this.servidor.getBuscatudo(nome, this.dados.dados.aluno, this.dados.dados.tipo, this.dados.dados.matricula).subscribe(
        data => this.todos = data,
        err => console.log(err)
      );
    })
  }

  getBuscaApostila(nome) {
    this.storage.get('dados').then((val) => {
      this.dados = val;
      this.servidor.getBuscaApostila(nome, this.dados.dados.aluno, this.dados.dados.matricula).subscribe(
        data => this.apostilas = data,
        err => console.log(err)
      );
    })
  }

  getBuscaCurso(nome) {
    this.servidor.getBuscaCurso(nome).subscribe(
      data => this.cursos = data,
      err => console.log(err)
    );
  }

  getBuscaUsuario(nome) {
    this.servidor.getBuscaUsuario(nome).subscribe(
      data => this.usuarios = data,
      err => console.log(err)
    );
  }

  clickTab(valor: string) {
    this.selected = valor;
  }

  escolher(tudo: any) {
    this.storage.get('dados').then((val) => {
      this.dados = val;
      if (this.selected == "0") {
        if (tudo.id_cliente) {
          this.navCtrl.push('DetalheUsuarioPage', { usuario: tudo });
        } else if (tudo.id_cursos_app) {
          if (tudo.tipo_curso == 0 && this.dados.dados.tipo != 0) {
            this.navCtrl.push('EscolhaModulosPage', { dados: this.dados.dados, curso: tudo });
          } else if (tudo.tipo_curso == 1) {
            this.navCtrl.push('DetalheCursoComplementarPage', { curso: tudo });
          }
        } else if (tudo.id_apostilas_app) {
          const options: InAppBrowserOptions = {
            zoom: 'no',
            location: 'no',
            toolbar: 'no'
          }
          this.lockLandscape();
          const browser = this.inAppBrowser.create(tudo.url_apostilas, '_self', options);
          browser.on('exit').subscribe(() => {
            this.lockPortrait();
          }, err => {
            console.error(err);
          });
        }
      } else if (this.selected == "1") {
        this.navCtrl.push('DetalheUsuarioPage', { usuario: tudo });
      } else if (this.selected == "2") {
        if (tudo.tipo_curso == 0 && this.dados.dados.tipo == 0) {
          this.navCtrl.push('DetalheCursoComplementarPage', { curso: tudo });
        } else if (tudo.tipo_curso == 0 && this.dados.dados.tipo != 0) {
          this.navCtrl.push('EscolhaModulosPage', { dados: this.dados.dados, curso: tudo });
        } else if (tudo.tipo_curso == 1) {
          this.navCtrl.push('DetalheCursoComplementarPage', { curso: tudo });
        }
      } else if (this.selected == "3") {
        const options: InAppBrowserOptions = {
          zoom: 'no',
          location: 'no',
          toolbar: 'no'
        }
        this.lockLandscape();
        const browser = this.inAppBrowser.create(tudo.url_apostilas, '_self', options);
        browser.on('exit').subscribe(() => {
          this.lockPortrait();
        }, err => {
          console.error(err);
        });
      }
    })
  }
}
