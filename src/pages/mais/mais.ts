import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the MaisPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mais',
  templateUrl: 'mais.html',
})
export class MaisPage {

  user:any = { };
  dados: any;
  img_usuario: string;
  nome: string;
  tipo: string;
  aluno: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
    this.navParams = navParams;
    this.dados = this.navParams.data;
    this.storage.get('dados').then((val) => {
      this.dados = val;
      this.aluno = this.dados.dados.aluno;
      this.tipo = this.dados.dados.tipo;
      this.img_usuario = this.dados.dados.img_usuario;
      this.nome = this.dados.dados.nome;
    })
  }

  notificacoes() {
    this.navCtrl.push('FichaFinanceiraPage');
  }

  sair() {
    this.storage.clear();
    this.navCtrl.parent.parent.setRoot(LoginPage);
  }
}
