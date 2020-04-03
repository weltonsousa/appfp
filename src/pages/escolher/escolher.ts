import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ServidorProvider } from '../../providers/servidor/servidor';
import { LoginPage } from '../login/login';
import { TabAlunoPage } from '../tab-aluno/tab-aluno';

/**
 * Generated class for the EscolherPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-escolher',
  templateUrl: 'escolher.html',
})
export class EscolherPage {

  params: NavParams;
  dados: any;

  email: string;
  escola: any;
  nome: string;
  matricula: string;
  img: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public servior: ServidorProvider, public alertCtrl: AlertController) {
    this.params = navParams;
    this.dados = this.params.data;
    this.email = this.dados.dados.email;
    this.nome = this.dados.dados.nome;
    this.matricula = this.dados.dados.matricula;
    this.img = this.dados.dados.img_usuario;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EscolherPage');
  }

  salvar() {
    if (this.escola == undefined || this.escola == "" || this.matricula == undefined || this.matricula == "") {
      let alert = this.alertCtrl.create({
        title: 'Atenção',
        message: 'Preencha todos os campos!',
        buttons: [
          'OK'
        ]
      })
      alert.present();
    } else {
      this.dados.dados.aluno = this.escola;
      this.dados.dados.matricula = this.matricula;
      this.servior.getPrimeiroAcesso(this.escola, this.dados.dados.email, this.matricula).subscribe(
        data => console.log(data),
        err => console.log(err)
      );
      this.navCtrl.setRoot(TabAlunoPage, { dados: this.dados.dados });
    }
  }
}
