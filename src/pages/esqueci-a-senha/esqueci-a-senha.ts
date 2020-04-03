import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController, ToastController, IonicPage } from 'ionic-angular';
import { LoginPage } from '../../pages/login/login';
import { ServidorProvider } from '../../providers/servidor/servidor';
/**
 * Generated class for the EsqueciASenhaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-esqueci-a-senha',
  templateUrl: 'esqueci-a-senha.html',
})
export class EsqueciASenhaPage {

  email: string = "";

  constructor(public nav: NavController, public alertCtrl: AlertController, public loadingCtrl: LoadingController, public toast: ToastController, public servior: ServidorProvider, public toastCrtl: ToastController) {
  }

  reset() {
    if (this.email == undefined || this.email == "") {
      let alert = this.alertCtrl.create({
        title: 'Atenção',
        message: 'Preencha o campo email!',
        buttons: [
          'OK'
        ]
      })
      alert.present();
    } else {
      this.servior.getRecuperaSenha(this.email).subscribe(
        data => console.log(data),
        err => console.log(err)
      );
      this.presentToast('Verifique o e-mail informado');
    }
  }

  back() {
    this.nav.setRoot(LoginPage);
  }

  faq() {
    this.nav.setRoot('DificuldadeAcessoPage');
  }

  presentToast(mensagem: string) {
    let toast = this.toastCrtl.create({
      message: mensagem,
      duration: 3000
    });
    toast.present();
  }
}