webpackJsonp([2],{

/***/ 424:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EscolhaModulosPageModule", function() { return EscolhaModulosPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__escolha_modulos__ = __webpack_require__(438);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EscolhaModulosPageModule = (function () {
    function EscolhaModulosPageModule() {
    }
    EscolhaModulosPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__escolha_modulos__["a" /* EscolhaModulosPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__escolha_modulos__["a" /* EscolhaModulosPage */]),
            ],
        })
    ], EscolhaModulosPageModule);
    return EscolhaModulosPageModule;
}());

//# sourceMappingURL=escolha-modulos.module.js.map

/***/ }),

/***/ 438:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EscolhaModulosPage; });
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
 * Generated class for the EscolhaModulosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EscolhaModulosPage = (function () {
    function EscolhaModulosPage(navCtrl, navParams, loadingCtrl, servidor) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.servidor = servidor;
        this.modulos = [];
        this.navParams = navParams;
        this.dados = this.navParams.data;
        console.log(this.dados.curso.qual_curso);
        console.log(this.dados.dados);
        var loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: "\n      <div class=\"custom-spinner-container\">\n      <img class=\"loading\" width=\"40px\" height=\"40px\" src=\"assets/img/load.gif\" />\n    </div>"
        });
        loading.present();
        this.getRetornarCursoPrincipalModulo();
        loading.dismiss();
    }
    EscolhaModulosPage.prototype.getRetornarCursoPrincipalModulo = function () {
        var _this = this;
        this.servidor.getCursosPrincipalModulos(this.dados.curso.qual_curso).subscribe(function (data) { return _this.modulos = data; }, function (err) { return console.log(err); });
    };
    EscolhaModulosPage.prototype.escolherModulo = function (modulo) {
        this.navCtrl.push('AulasPage', { modulo: modulo, curso: this.dados.curso });
    };
    EscolhaModulosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-escolha-modulos',template:/*ion-inline-start:"/home/guilherme/workspace/Gracom/FP/src/pages/escolha-modulos/escolha-modulos.html"*/'<!--\n  Generated template for the EscolhaModulosPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content style="background-color: #202020;">\n  <img src="{{dados.curso.img_curso_play}}" style="background-color: #202020; width: 100%;" />\n  <div style="position: absolute; top: 28%; left: 4%; color: white; font-size: 1.0em; font-weight: bolder; ">{{dados.curso.nome}}</div>\n  <div style="position: absolute; top: 28%; left: 4%; color: white; font-size: 1.0em; font-weight: bolder; ">{{dados.curso.nome_do_curso}}</div>\n  <div style="position: absolute; top: 32%; left: 4%; color: #9E9C9C; font-size: 1.0em; font-weight: 400; width: 94%;">{{dados.curso.descricao_do_curso}}</div>\n\n  <ion-grid style="position: absolute; top:40%; width: 100%">\n    <ion-row>\n      <ion-col *ngFor="let modulo of modulos" (click)=escolherModulo(modulo) col-6>\n        <ion-card style="background-color: #282C33 ;border-bottom-color: transparent !important;box-shadow: none !important;">\n          <img src="{{modulo.img_modulo}}" style=" width: 100%;" />\n          <br>\n          <div style="position: relative; text-align: center; color: white; font-size: 0.8em; font-weight: bolder; ">{{modulo.nome_do_modulo}}</div>\n          <div style="position: relative; left: 3%; color: #9E9C9C; font-size: 0.7em; font-weight: bolder; width: 94%;">{{modulo.descricao}}</div>\n          <button ion-button round no-border style="position: relative; left: 25%; width: 50%; height: 50%; padding: 6px; font-size: 0.8em; \n          text-transform: none;" color="verde">Ver curso</button>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/home/guilherme/workspace/Gracom/FP/src/pages/escolha-modulos/escolha-modulos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__providers_servidor_servidor__["a" /* ServidorProvider */]])
    ], EscolhaModulosPage);
    return EscolhaModulosPage;
}());

//# sourceMappingURL=escolha-modulos.js.map

/***/ })

});
//# sourceMappingURL=2.js.map