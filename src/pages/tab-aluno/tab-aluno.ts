import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CursosPage } from '../cursos/cursos';
import { NotasPage } from '../notas/notas';
import { MaisPage } from '../mais/mais';
import { SearchPage } from '../search/search';
import { ApostilasPage } from '../apostilas/apostilas';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the TabAlunoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tab-aluno',
  templateUrl: 'tab-aluno.html',
})
export class TabAlunoPage {
  params: NavParams;
  dados: any;

  constructor(params: NavParams, public navCtrl: NavController, public http: HttpClient) {
    this.params = params;
    this.dados = this.params.data;
  }

  CursosPage = CursosPage;
  NotasPage = NotasPage;
  MaisPage = MaisPage;
  SearchPage = SearchPage;
  ApostilasPage = ApostilasPage;
}
