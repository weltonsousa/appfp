webpackJsonp([4],{

/***/ 418:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DificuldadeAcessoPageModule", function() { return DificuldadeAcessoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dificuldade_acesso__ = __webpack_require__(433);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DificuldadeAcessoPageModule = (function () {
    function DificuldadeAcessoPageModule() {
    }
    DificuldadeAcessoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__dificuldade_acesso__["a" /* DificuldadeAcessoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__dificuldade_acesso__["a" /* DificuldadeAcessoPage */]),
            ],
        })
    ], DificuldadeAcessoPageModule);
    return DificuldadeAcessoPageModule;
}());

//# sourceMappingURL=dificuldade-acesso.module.js.map

/***/ }),

/***/ 433:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DificuldadeAcessoPage; });
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
 * Generated class for the DificuldadeAcessoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DificuldadeAcessoPage = (function () {
    function DificuldadeAcessoPage(nav, servidor, loadingCtrl) {
        this.nav = nav;
        this.servidor = servidor;
        this.loadingCtrl = loadingCtrl;
        this.topicos = [];
        this.subCategorias = [];
        this.queryText = "";
        this.selected = "0";
        var loading = this.loadingCtrl.create({
            duration: 800,
            spinner: 'hide',
            content: "\n      <div class=\"custom-spinner-container\">\n      <img class=\"loading\" width=\"40px\" height=\"40px\" src=\"assets/img/load.gif\" />\n    </div>"
        });
        loading.present();
        this.getTopicos();
    }
    DificuldadeAcessoPage.prototype.filter = function (texto) {
        var val = texto.target.value;
        if (val.trim() != '') {
            this.getBuscaTudo(val.trim());
            this.selected = "1";
        }
        else {
            this.selected = "0";
        }
    };
    DificuldadeAcessoPage.prototype.getTopicos = function () {
        var _this = this;
        this.servidor.getSuporte().subscribe(function (data) { return _this.topicos = data; }, function (err) { return console.log(err); });
    };
    DificuldadeAcessoPage.prototype.getBuscaTudo = function (texto) {
        var _this = this;
        this.servidor.getSubcategorias(texto).subscribe(function (data) { return _this.subCategorias = data; }, function (err) { return console.log(err); });
    };
    DificuldadeAcessoPage.prototype.back = function () {
        this.nav.setRoot('EsqueciASenhaPage');
    };
    DificuldadeAcessoPage.prototype.escolher = function (tudo) {
        if (this.selected == "0") {
            this.nav.setRoot('PaginaPerguntasPage', { topico: tudo });
        }
        else {
            this.nav.setRoot('DificuldadeRespostaPage', { pergunta: tudo });
        }
    };
    DificuldadeAcessoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-dificuldade-acesso',template:/*ion-inline-start:"C:\xampp\htdocs\fpApp\src\pages\dificuldade-acesso\dificuldade-acesso.html"*/'<ion-content>\n  <br>\n  <img src="assets/img/Seta_Retorno.png" style="position: relative;left: 8%; width:30px;height:30px;" (click)="back()">\n  <br>\n  <br>\n  <br>\n  <br>\n  <br>\n  <br>\n  <div style="position: relative; left: 5%; font-size: 1.5em; font-weight: bolder; color: #20953d;">Como podemos ajudar?</div>\n  <br>\n  <div id="search" class="search-input-keyword">\n    <ion-searchbar class="ion-searchtext" id="ion-searchtext" placeholder="Oque você precisa?" [(ngModel)]="queryText"\n      (ionInput)="filter($event)" clearInput></ion-searchbar>\n  </div>\n  <ion-grid style="width: 100%" *ngIf="selected == \'0\'">\n    <ion-row *ngFor="let tudo of topicos" (click)=escolher(tudo)>\n      <ion-card\n        style="height: 55px; background-color: transparent ;border-bottom-color: transparent !important;box-shadow: none !important;">\n        <div\n          style="position: relative; left: 5%; color: #20953d; font-size: 1.3em; font-weight: bolder; top: 30%; width: 50%;">\n          {{tudo.nome_categoria}}</div>\n      </ion-card>\n    </ion-row>\n  </ion-grid>\n  <ion-grid style="width: 100%" *ngIf="selected == \'1\'">\n    <ion-row *ngFor="let tudo of subCategorias" (click)=escolher(tudo)>\n      <ion-card\n        style="height: 100px; background-color: transparent ;border-bottom-color: transparent !important;box-shadow: none !important;">\n        <div\n          style="position: relative; left: 5%; color: #20953d; font-size: 1.3em; font-weight: bolder; top: 30%; width: 90%;">\n          {{tudo.de_qual_categoria}}</div>\n          <div\n          style="position: relative; left: 5%; color: #a2a2a2; font-size: 0.8em; font-weight: bolder; top: 30%; width: 100%;">\n          {{tudo.texto_subcategoria_pergunta}}</div>\n      </ion-card>\n    </ion-row>\n  </ion-grid>\n</ion-content>'/*ion-inline-end:"C:\xampp\htdocs\fpApp\src\pages\dificuldade-acesso\dificuldade-acesso.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_servidor_servidor__["a" /* ServidorProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], DificuldadeAcessoPage);
    return DificuldadeAcessoPage;
}());

//# sourceMappingURL=dificuldade-acesso.js.map

/***/ })

});
//# sourceMappingURL=4.js.map