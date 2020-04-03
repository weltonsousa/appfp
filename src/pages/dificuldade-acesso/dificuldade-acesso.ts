import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import _ from 'lodash';
import { ServidorProvider } from "../../providers/servidor/servidor";
/**
 * Generated class for the DificuldadeAcessoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dificuldade-acesso',
  templateUrl: 'dificuldade-acesso.html',
})
export class DificuldadeAcessoPage {

  topicos: any = [];
  subCategorias: any = [];
  queryText: string;
  selected: string;

  constructor(public nav: NavController, public servidor: ServidorProvider, public loadingCtrl: LoadingController) {
    this.queryText = "";
    this.selected = "0";

    let loading = this.loadingCtrl.create({
      duration: 800,
      spinner: 'hide',
      content: `
      <div class="custom-spinner-container">
      <img class="loading" width="40px" height="40px" src="assets/img/load.gif" />
    </div>`
    });
    loading.present();
    this.getTopicos();
  }
  filter(texto: any) {
    let val = texto.target.value;
    if (val.trim() != '') {
      this.getBuscaTudo(val.trim());
      this.selected = "1";
    } else {
      this.selected = "0";
    }
  }
  getTopicos() {
    this.servidor.getSuporte().subscribe(
      data => this.topicos = data,
      err => console.log(err)
    );
  }
  getBuscaTudo(texto) {
    this.servidor.getSubcategorias(texto).subscribe(
      data => this.subCategorias = data,
      err => console.log(err)
    );
  }
  back() {
    this.nav.setRoot('EsqueciASenhaPage');
  }
  escolher(tudo) {
    if (this.selected == "0") {
      this.nav.setRoot('PaginaPerguntasPage', { topico: tudo })
    } else {
      this.nav.setRoot('DificuldadeRespostaPage', { pergunta: tudo })
    }
  }


}