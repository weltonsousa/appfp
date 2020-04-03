import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { map } from 'rxjs/operators';
import { Http } from '@angular/http';
import { ServidorProvider } from '../../providers/servidor/servidor';
import { TabAlunoPage } from '../../pages/tab-aluno/tab-aluno';
import { EscolherPage } from '../escolher/escolher';
import { EsqueciASenhaPage } from '../esqueci-a-senha/esqueci-a-senha';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  email: string;
  senha: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public servior: ServidorProvider, public http: Http, public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  esqueci() {
    this.navCtrl.setRoot(EsqueciASenhaPage);
  }

  logar() {
    if (this.email == "" || this.senha == "") {
      let alert = this.alertCtrl.create({
        title: 'Atenção',
        message: 'Preencha todos os campos!',
        buttons: ['OK']
      })
      alert.present();
    } else {

      this.http.get(this.servior.urlGet() + 'login.php?email=' + this.email + '&senha=' + this.senha).pipe(map(res => res.json()))
        .subscribe(
          dados => {
            console.log(dados)
            if (dados.msg.logado == "sim" && dados.dados.ativo == "0" && dados.dados.primeiro_acesso == "1") {
              this.navCtrl.setRoot(TabAlunoPage, { dados: dados.dados });
            } else if (dados.msg.logado == "sim" && dados.dados.primeiro_acesso == "" || dados.msg.logado == "sim" && dados.dados.primeiro_acesso == "0") {
              this.navCtrl.setRoot(EscolherPage, { dados: dados.dados });
            } else {
              let alert = this.alertCtrl.create({
                title: 'Atenção',
                message: 'Usuário invalido!',
                buttons: [
                  'OK'
                ]
              })
              alert.present();
            }
          }
        )
    }


  }
}
