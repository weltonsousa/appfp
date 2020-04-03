import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

/*
  Generated class for tttte ServidorProvider provider.

  See ularttps://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServidorProvider {

  url: string = "https://futuronopresente.com.br/appFP/";

  constructor(public http: Http) {
    console.log('ttello ServidorProvider Provider');
  }

  urlGet() {
    return this.url;
  }

  getCursosPrincipal(tipo) {
    return this.http.get(this.url + 'cursos_principais.php?tipo=' + tipo).pipe(map(res => res.json()));
  }

  getCursoComplementarLancamentos() {
    return this.http.get(this.url + 'cursos_complementares_lancamentos.php').pipe(map(res => res.json()));
  }

  getCursoComplementarBreve() {
    return this.http.get(this.url + 'cursos_complementares_em_breve.php').pipe(map(res => res.json()));
  }

  getCursosPrincipalModulos(qual) {
    return this.http.get(this.url + 'cursos_principais_modulos.php?qual_curso=' + qual).pipe(map(res => res.json()));
  }

  getCursosPrincipalModulosAulas(etapa, curso) {
    return this.http.get(this.url + 'cursos_principais_modulos_aulas.php?etapa=' + etapa + '&qual_curso=' + curso).pipe(map(res => res.json()));
  }

  getCursosComplementarAulas(qualCurso) {
    return this.http.get(this.url + 'cursos_complementares_aulas.php?curso=' + qualCurso).pipe(map(res => res.json()));
  }

  getPrimeiroAcesso(escola, email, matricula) {
    return this.http.get(this.url + 'update_curso.php?escola=' + escola + '&email=' + email + '&matricula=' + matricula).pipe(map(res => res.json()));
  }

  getBuscatudo(nome, alunoDeOnde, nivel, matricula) {
    return this.http.get(this.url + 'buscar_user_cursos_apostilas.php?destinado_ao_usuario=' + nivel + '&de_qual_escola=' + alunoDeOnde + '&nome=' + nome + '&matricula=' + matricula).pipe(map(res => res.json()));
  }

  getBuscaUsuario(nome) {
    return this.http.get(this.url + 'buscar_user.php?nome=' + nome).pipe(map(res => res.json()));
  }

  getBuscaCurso(nome) {
    return this.http.get(this.url + 'buscar_cursos.php?nome=' + nome).pipe(map(res => res.json()));
  }

  getBuscaApostila(nome, alunoDeOnde, matricula) {
    return this.http.get(this.url + 'buscar_apostilas.php?de_qual_escola=' + alunoDeOnde + '&nome=' + nome + '&matricula=' + matricula).pipe(map(res => res.json()));
  }

  getApostila(matricula, alunoDeOnde) {
    return this.http.get(this.url + 'retorno_apostilas.php?matricula=' + matricula + '&de_qual_escola=' + alunoDeOnde).pipe(map(res => res.json()));
  }

  getNotas(idCliente, matricula, alunoDeOnde) {
    return this.http.get(this.url + 'provas.php?id_cliente=' + idCliente + '&matricula=' + matricula + '&de_qual_escola=' + alunoDeOnde).pipe(map(res => res.json()));
  }

  getRecuperaSenha(email) {
    return this.http.get(this.url + 'recupera_senha/recupera.php?email=' + email).pipe(map(res => res.json()));
  }

  getSuporte() {
    return this.http.get(this.url + 'suporte_categorias.php').pipe(map(res => res.json()));
  }

  getSubcategorias(texto) {
    return this.http.get(this.url + 'busca_suporte.php?texto_subcategoria_pergunta=' + texto).pipe(map(res => res.json()));
  }

  getSubcategoriasNosTopicos(qualCategoria) {
    return this.http.get(this.url + 'subcategorias.php?qual_categoria=' + qualCategoria).pipe(map(res => res.json()));
  }

  updateSim(qualSubcategoria) {
    return this.http.get(this.url + 'update_suporte_sim.php?qual_subcategoria=' + qualSubcategoria).pipe(map(res => res.json()));
  }

  updateNao(qualSubcategoria) {
    return this.http.get(this.url + 'update_suporte_nao.php?qual_subcategoria=' + qualSubcategoria).pipe(map(res => res.json()));
  }
}
