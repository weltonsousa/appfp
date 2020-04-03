import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { ServidorProvider } from "../../providers/servidor/servidor";

/**
 * Generated class for the DificuldadeRespostaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dificuldade-resposta',
  templateUrl: 'dificuldade-resposta.html',
})
export class DificuldadeRespostaPage {

  pergunta: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public servidor: ServidorProvider, public toastCtrl: ToastController) {
    this.pergunta = this.navParams.data.pergunta;
  }

  back() {
    this.navCtrl.setRoot('DificuldadeAcessoPage')
  }

  updateSim() {
    this.servidor.updateSim(this.pergunta.qual_subcategoria).subscribe(
      data => this.presentToast('Sua ideia é nosso futuro'),
      err => console.log(err)
    );
  }

  updateNao() {
    this.servidor.updateNao(this.pergunta.qual_subcategoria).subscribe(
      data => this.presentToast('Sua ideia é nosso futuro'),
      err => console.log(err)
    );
  }

  presentToast(mensagem: string) {
    let toast = this.toastCtrl.create({
      message: mensagem,
      duration: 3000
    });
    toast.present();
  }
}
