import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetalheUsuarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalhe-usuario',
  templateUrl: 'detalhe-usuario.html',
})
export class DetalheUsuarioPage {

  usuario: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.usuario = this.navParams.data.usuario;
  }

}
