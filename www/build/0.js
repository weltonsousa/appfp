webpackJsonp([0],{

/***/ 427:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginaPerguntasPageModule", function() { return PaginaPerguntasPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pagina_perguntas__ = __webpack_require__(439);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PaginaPerguntasPageModule = (function () {
    function PaginaPerguntasPageModule() {
    }
    PaginaPerguntasPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__pagina_perguntas__["a" /* PaginaPerguntasPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__pagina_perguntas__["a" /* PaginaPerguntasPage */]),
            ],
        })
    ], PaginaPerguntasPageModule);
    return PaginaPerguntasPageModule;
}());

//# sourceMappingURL=pagina-perguntas.module.js.map

/***/ }),

/***/ 439:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaginaPerguntasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_servidor_servidor__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the PaginaPerguntasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PaginaPerguntasPage = (function () {
    function PaginaPerguntasPage(navCtrl, navParams, servidor, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.servidor = servidor;
        this.loadingCtrl = loadingCtrl;
        this.perguntas = [];
        this.topico = this.navParams.data.topico;
        var loading = this.loadingCtrl.create({
            duration: 800,
            spinner: 'hide',
            content: "\n      <div class=\"custom-spinner-container\">\n      <img class=\"loading\" width=\"40px\" height=\"40px\" src=\"assets/img/load.gif\" />\n    </div>"
        });
        loading.present();
        this.getData();
    }
    PaginaPerguntasPage.prototype.getData = function () {
        var _this = this;
        this.servidor.getSubcategoriasNosTopicos(this.topico.qual_categoria).subscribe(function (data) { return _this.perguntas = data; }, function (err) { return console.log(err); });
    };
    PaginaPerguntasPage.prototype.back = function () {
        this.navCtrl.setRoot('DificuldadeAcessoPage');
    };
    PaginaPerguntasPage.prototype.escolher = function (tudo) {
        this.navCtrl.setRoot('DificuldadeRespostaPage', { pergunta: tudo });
    };
    PaginaPerguntasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pagina-perguntas',template:/*ion-inline-start:"C:\xampp\htdocs\fpApp\src\pages\pagina-perguntas\pagina-perguntas.html"*/'<ion-content>\n  <br>\n  <img src="assets/img/Seta_Retorno.png" style="position: relative;left: 8%; width:30px;height:30px;" (click)="back()">\n  <br>\n  <br>\n  <div style="position: relative; left: 5%; font-size: 1.5em; font-weight: bolder; color: #20953d; width: 90%;">{{topico.nome_categoria}}</div>\n  <br>\n  <ion-grid style="width: 100%">\n    <ion-row *ngFor="let tudo of perguntas" (click)=escolher(tudo)>\n      <ion-card\n        style="height: 55px; background-color: transparent ;border-bottom-color: transparent !important;box-shadow: none !important;">\n        <div\n          style="position: relative; left: 5%; color: #a2a2a2; font-size: 0.8em; font-weight: bolder; top: 30%; width: 90%;">\n          {{tudo.texto_subcategoria_pergunta}}</div>\n      </ion-card>\n    </ion-row>\n  </ion-grid>\n</ion-content>'/*ion-inline-end:"C:\xampp\htdocs\fpApp\src\pages\pagina-perguntas\pagina-perguntas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_servidor_servidor__["a" /* ServidorProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], PaginaPerguntasPage);
    return PaginaPerguntasPage;
}());

//# sourceMappingURL=pagina-perguntas.js.map

/***/ })

});
//# sourceMappingURL=0.js.map