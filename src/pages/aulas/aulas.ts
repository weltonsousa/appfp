import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { ServidorProvider } from "../../providers/servidor/servidor";
/**
 * Generated class for the AulasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-aulas',
  templateUrl: 'aulas.html',
})
export class AulasPage {

  curso: any;
  modulo: any;

  aulas: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, public servidor: ServidorProvider) {

    this.curso = this.navParams.data.curso;
    this.modulo = this.navParams.data.modulo;
console.log(this.curso.qual_curso)
    let loading = this.loadingCtrl.create({
      spinner: 'hide',
      content: `
      <div class="custom-spinner-container">
      <img class="loading" width="40px" height="40px" src="assets/img/load.gif" />
    </div>`
    });
    loading.present();
    this.getRetornarAulas();
    loading.dismiss();
  }

  getRetornarAulas() {
    this.servidor.getCursosPrincipalModulosAulas(this.modulo.etapa_do_modulo, this.curso.qual_curso).subscribe(
      data => this.aulas = data,
      err => console.log(err)
    );
  }

  escolherAula(aula: any) {
    this.navCtrl.push('DetalheDaAulaCursoPrincipalPage', { modulo: this.modulo, curso: this.curso, aula: aula });
  }
}
