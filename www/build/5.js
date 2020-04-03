webpackJsonp([5],{

/***/ 417:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalheUsuarioPageModule", function() { return DetalheUsuarioPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__detalhe_usuario__ = __webpack_require__(432);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DetalheUsuarioPageModule = (function () {
    function DetalheUsuarioPageModule() {
    }
    DetalheUsuarioPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__detalhe_usuario__["a" /* DetalheUsuarioPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__detalhe_usuario__["a" /* DetalheUsuarioPage */]),
            ],
        })
    ], DetalheUsuarioPageModule);
    return DetalheUsuarioPageModule;
}());

//# sourceMappingURL=detalhe-usuario.module.js.map

/***/ }),

/***/ 432:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetalheUsuarioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
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
 * Generated class for the DetalheUsuarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DetalheUsuarioPage = (function () {
    function DetalheUsuarioPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.usuario = this.navParams.data.usuario;
    }
    DetalheUsuarioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-detalhe-usuario',template:/*ion-inline-start:"C:\xampp\htdocs\fpApp\src\pages\detalhe-usuario\detalhe-usuario.html"*/'<!--\n  Generated template for the MaisPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n\n  <ion-navbar>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="corpo">\n  <img src="assets/img/Logo_FP.png" style="position: absolute;top:3%; left: 89%; width:25px;">\n  <div style="text-align: center; width: 70%;">\n    <img class="img" src="{{usuario.url}}">\n  </div>\n  <div class="nome">{{usuario.nome}}</div>\n  <div class="tipoDeAssinatura" *ngIf="usuario.tipo == \'3\'">Assinatura: Premium</div>\n  <div class="tipoDeAssinatura" *ngIf="usuario.tipo == \'0\'">Assinatura: Free</div>\n  <br><br><br><br>\n  <div class="escola" *ngIf="usuario.aluno == \'1\'">Faz parte da Gracom</div>\n  <div class="escola" *ngIf="usuario.aluno == \'2\'">Faz parte da Imugi</div>\n  <div class="escola" *ngIf="usuario.aluno == \'0\'">Faz parte da FP</div>\n  <br><br>\n  <div class="escola">E-mail: {{usuario.email}}</div>\n</ion-content>'/*ion-inline-end:"C:\xampp\htdocs\fpApp\src\pages\detalhe-usuario\detalhe-usuario.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], DetalheUsuarioPage);
    return DetalheUsuarioPage;
}());

//# sourceMappingURL=detalhe-usuario.js.map

/***/ })

});
//# sourceMappingURL=5.js.map