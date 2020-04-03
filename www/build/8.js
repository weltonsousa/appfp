webpackJsonp([8],{

/***/ 422:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AulasPageModule", function() { return AulasPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__aulas__ = __webpack_require__(436);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AulasPageModule = (function () {
    function AulasPageModule() {
    }
    AulasPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__aulas__["a" /* AulasPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__aulas__["a" /* AulasPage */]),
            ],
        })
    ], AulasPageModule);
    return AulasPageModule;
}());

//# sourceMappingURL=aulas.module.js.map

/***/ }),

/***/ 436:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AulasPage; });
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
 * Generated class for the AulasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AulasPage = (function () {
    function AulasPage(navCtrl, navParams, loadingCtrl, servidor) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.servidor = servidor;
        this.aulas = [];
        this.curso = this.navParams.data.curso;
        this.modulo = this.navParams.data.modulo;
        console.log(this.curso.qual_curso);
        var loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: "\n      <div class=\"custom-spinner-container\">\n      <img class=\"loading\" width=\"40px\" height=\"40px\" src=\"assets/img/load.gif\" />\n    </div>"
        });
        loading.present();
        this.getRetornarAulas();
        loading.dismiss();
    }
    AulasPage.prototype.getRetornarAulas = function () {
        var _this = this;
        this.servidor.getCursosPrincipalModulosAulas(this.modulo.etapa_do_modulo, this.curso.qual_curso).subscribe(function (data) { return _this.aulas = data; }, function (err) { return console.log(err); });
    };
    AulasPage.prototype.escolherAula = function (aula) {
        this.navCtrl.push('DetalheDaAulaCursoPrincipalPage', { modulo: this.modulo, curso: this.curso, aula: aula });
    };
    AulasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-aulas',template:/*ion-inline-start:"C:\xampp\htdocs\fpApp\src\pages\aulas\aulas.html"*/'<!--\n  Generated template for the EscolhaModulosPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content style="background-color: #202020;">\n  <img src="{{curso.img_curso_play}}" style="background-color: #202020; width: 100%;" />\n  <div *ngIf="curso.nome" style="position: absolute; top: 28%; left: 4%; color: white; font-size: 1.0em; font-weight: bolder; ">{{curso.nome}} - {{modulo.nome_do_modulo}}</div>\n  <div *ngIf="curso.nome_do_curso" style="position: absolute; top: 28%; left: 4%; color: white; font-size: 1.0em; font-weight: bolder; ">{{curso.nome_do_curso}} - {{modulo.nome_do_modulo}}</div>\n  <div style="position: absolute; top: 32%; left: 4%; color: #9E9C9C; font-size: 1.0em; font-weight: 400; width: 94%;">{{modulo.descricao}}</div>\n  <ion-grid style="position: absolute; top:40%; width: 100%">\n\n    <ion-row *ngFor="let aula of aulas" (click)=escolherAula(aula)>\n        <ion-card style="height: 110px; background-color: transparent ;border-bottom-color: transparent !important;box-shadow: none !important;">\n          <img src="{{aula.img_aula}}" style="position: absolute; width: 20%; border-radius: 10px;" />\n          <div style="position: relative; left: 25%; color: white; font-size: 0.9em; font-weight: bolder; top: 10%; width: 100%;">{{aula.titulo_da_aula}}</div>\n          <div style="position: relative; color: #9E9C9C; font-size: 1.0em; font-weight: 400; width: 100%; top: 45%;">{{aula.descricao_da_aula}}</div>\n        </ion-card>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"C:\xampp\htdocs\fpApp\src\pages\aulas\aulas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__providers_servidor_servidor__["a" /* ServidorProvider */]])
    ], AulasPage);
    return AulasPage;
}());

//# sourceMappingURL=aulas.js.map

/***/ })

});
//# sourceMappingURL=8.js.map