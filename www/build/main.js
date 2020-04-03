webpackJsonp([15],{

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApostilasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_servidor_servidor__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_screen_orientation__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







/**
 * Generated class for the ApostilasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ApostilasPage = (function () {
    function ApostilasPage(inAppBrowser, navCtrl, navParams, servidor, storage, http, screenOrientation, loadingCtrl) {
        this.inAppBrowser = inAppBrowser;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.servidor = servidor;
        this.storage = storage;
        this.http = http;
        this.screenOrientation = screenOrientation;
        this.loadingCtrl = loadingCtrl;
        this.apostilas = [];
        this.navParams = navParams;
        this.dados = this.navParams.data;
        var loading = this.loadingCtrl.create({
            duration: 800,
            spinner: 'hide',
            content: "\n      <div class=\"custom-spinner-container\">\n      <img class=\"loading\" width=\"40px\" height=\"40px\" src=\"assets/img/load.gif\" />\n    </div>"
        });
        loading.present();
        this.getRetornaApostila();
    }
    ApostilasPage.prototype.getRetornaApostila = function () {
        var _this = this;
        this.storage.get('dados').then(function (val) {
            _this.dados = val;
            console.log(_this.dados);
            _this.servidor.getApostila(_this.dados.dados.matricula, _this.dados.dados.aluno).subscribe(function (data) { return _this.apostilas = data; }, function (err) { return console.log(err); });
        });
    };
    ApostilasPage.prototype.lockLandscape = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                try {
                    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
                }
                catch (error) {
                    console.log(error);
                }
                return [2 /*return*/];
            });
        });
    };
    ApostilasPage.prototype.lockPortrait = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                try {
                    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
                }
                catch (error) {
                    console.log(error);
                }
                return [2 /*return*/];
            });
        });
    };
    ApostilasPage.prototype.abrirApostila = function (apostila) {
        var _this = this;
        var options = {
            zoom: 'no',
            location: 'no',
            toolbar: 'no'
        };
        this.lockLandscape();
        var browser = this.inAppBrowser.create(apostila.url_apostilas, '_self', options);
        browser.on('exit').subscribe(function () {
            _this.lockPortrait();
        }, function (err) {
            console.error(err);
        });
    };
    ApostilasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-apostilas',template:/*ion-inline-start:"C:\xampp\htdocs\fpApp\src\pages\apostilas\apostilas.html"*/'<!--\n  Generated template for the MaisPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content class="corpo">\n  <br>\n  <img src="assets/img/Logo_FP.png" style="position: relative; left: 6%; width:25px;">\n  <br>\n  <br>\n  <br>\n  <br>\n  <br>\n  <br>\n    <div style="position: relative; width: 100%; text-align: center; font-size: 1.6em;color: white; font-weight: bolder;">Selecione sua <br>Apostila</div>\n    <br>\n    <ion-grid>\n      <ion-row>\n        <ion-col *ngFor="let apostila of apostilas" col-4>\n          <ion-card *ngIf="apostila.nivel <= apostila.nivel_do_usuario && apostila.pago == 1 && apostila.franquia_ou_propria == 1" style="background-color: transparent;box-shadow: none !important;">\n            <img *ngIf="apostila.active == 1" src="{{apostila.img_apostila}}" style="width: 100%;" (click)=abrirApostila(apostila)/>\n            <div style="position: relative; width: 100%; text-align: center; font-size: 0.7em;color: white; font-weight: bolder;">{{apostila.nome_apostila}}</div>\n          </ion-card>\n          <ion-card *ngIf="apostila.nivel > apostila.nivel_do_usuario && apostila.franquia_ou_propria == 1 " style="background-color: transparent;box-shadow: none !important;">\n            <img *ngIf="apostila.active == 0 || apostila.active == 1" src="{{apostila.img_apostila_disabilitada}}" style="width: 100%;" />\n            <div style="position: relative; width: 100%; text-align: center; font-size: 0.7em;color: white; font-weight: bolder;">{{apostila.nome_apostila}}</div>\n          </ion-card>\n          <ion-card *ngIf="dados.dados.aluno == 0 " style="background-color: transparent;box-shadow: none !important;">\n            <img src="{{apostila.img_apostila_disabilitada}}" style="width: 100%;" />\n            <div style="position: relative; width: 100%; text-align: center; font-size: 0.7em;color: white; font-weight: bolder;">{{apostila.nome_apostila}}</div>\n          </ion-card>\n          <ion-card *ngIf="apostila.numero_apostila <= apostila.nivel_do_usuario && apostila.franquia_ou_propria == 0 && apostila.de_qual_escola != 2" style="background-color: transparent;box-shadow: none !important;">\n            <img *ngIf="apostila.active == 1" src="{{apostila.img_apostila}}" style="width: 100%;" (click)=abrirApostila(apostila)/>\n            <div style="position: relative; width: 100%; text-align: center; font-size: 0.7em;color: white; font-weight: bolder;">{{apostila.nome_apostila}}</div>\n          </ion-card>\n          <ion-card *ngIf="apostila.nivel <= apostila.nivel_do_usuario && apostila.pago == 1 && apostila.franquia_ou_propria == 0 && apostila.de_qual_escola == 2" style="background-color: transparent;box-shadow: none !important;">\n            <img *ngIf="apostila.active == 1" src="{{apostila.img_apostila}}" style="width: 100%;" (click)=abrirApostila(apostila)/>\n            <div style="position: relative; width: 100%; text-align: center; font-size: 0.7em;color: white; font-weight: bolder;">{{apostila.nome_apostila}}</div>\n          </ion-card>\n          <ion-card *ngIf="apostila.nivel > apostila.nivel_do_usuario && apostila.pago == 1 && apostila.franquia_ou_propria == 0 && apostila.de_qual_escola == 2" style="background-color: transparent;box-shadow: none !important;">\n            <img *ngIf="apostila.active == 0 || apostila.active == 1" src="{{apostila.img_apostila_disabilitada}}" style="width: 100%;" />\n            <div style="position: relative; width: 100%; text-align: center; font-size: 0.7em;color: white; font-weight: bolder;">{{apostila.nome_apostila}}</div>\n          </ion-card>\n          <ion-card *ngIf="apostila.numero_apostila > apostila.nivel_do_usuario && apostila.franquia_ou_propria == 0 && apostila.de_qual_escola != 2" style="background-color: transparent;box-shadow: none !important;">\n            <img *ngIf="apostila.active == 0 || apostila.active == 1" src="{{apostila.img_apostila_disabilitada}}" style="width: 100%;" />\n            <div style="position: relative; width: 100%; text-align: center; font-size: 0.7em;color: white; font-weight: bolder;">{{apostila.nome_apostila}}</div>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n</ion-content>\n'/*ion-inline-end:"C:\xampp\htdocs\fpApp\src\pages\apostilas\apostilas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__["a" /* InAppBrowser */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_servidor_servidor__["a" /* ServidorProvider */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_screen_orientation__["a" /* ScreenOrientation */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], ApostilasPage);
    return ApostilasPage;
}());

//# sourceMappingURL=apostilas.js.map

/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EscolherPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_servidor_servidor__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tab_aluno_tab_aluno__ = __webpack_require__(54);
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
 * Generated class for the EscolherPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EscolherPage = (function () {
    function EscolherPage(navCtrl, navParams, servior, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.servior = servior;
        this.alertCtrl = alertCtrl;
        this.params = navParams;
        this.dados = this.params.data;
        this.email = this.dados.dados.email;
        this.nome = this.dados.dados.nome;
        this.matricula = this.dados.dados.matricula;
        this.img = this.dados.dados.img_usuario;
    }
    EscolherPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EscolherPage');
    };
    EscolherPage.prototype.salvar = function () {
        if (this.escola == undefined || this.escola == "" || this.matricula == undefined || this.matricula == "") {
            var alert_1 = this.alertCtrl.create({
                title: 'Atenção',
                message: 'Preencha todos os campos!',
                buttons: [
                    'OK'
                ]
            });
            alert_1.present();
        }
        else {
            this.dados.dados.aluno = this.escola;
            this.dados.dados.matricula = this.matricula;
            this.servior.getPrimeiroAcesso(this.escola, this.dados.dados.email, this.matricula).subscribe(function (data) { return console.log(data); }, function (err) { return console.log(err); });
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__tab_aluno_tab_aluno__["a" /* TabAlunoPage */], { dados: this.dados.dados });
        }
    };
    EscolherPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-escolher',template:/*ion-inline-start:"C:\xampp\htdocs\fpApp\src\pages\escolher\escolher.html"*/'<!--\n  Generated template for the EscolherPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content padding>\n  <br>\n  <br>\n  <img src="{{img}}" class="img" style="position: relative;left: 38%; width:90px;height:90px;">\n  <ion-item class="ion-card ion-item">\n    <ion-input readonly type="text" [(ngModel)]="email" placeholder="E-mail" class="ion_input" name="vehicle_cust_name">\n    </ion-input>\n    <ion-icon name="person" class="ion_icon" item-right small></ion-icon>\n  </ion-item>\n  <ion-item class="ion-card ion-item">\n    <ion-input type="text" [(ngModel)]="matricula" placeholder="matricula" class="ion_input" name="vehicle_cust_name">\n    </ion-input>\n    <ion-icon name="person" class="ion_icon" item-right small></ion-icon>\n  </ion-item>\n  <ion-item class="ion-card ion-item">\n    <ion-input readonly type="text" [(ngModel)]="nome" placeholder="Nome" class="ion_input" name="vehicle_cust_name">\n    </ion-input>\n    <ion-icon name="person" class="ion_icon" item-right small></ion-icon>\n  </ion-item>\n  <ion-item class="ion-card ion-item">\n    <ion-label stacked>Qual sua escola?</ion-label>\n    <ion-select style="color:  #8a8a8a;" [(ngModel)]="escola">\n      <ion-option value="0">FP</ion-option>\n      <ion-option value="1">Gracom</ion-option>\n      <ion-option value="2">Imugi</ion-option>\n    </ion-select>\n  </ion-item>\n  <button padding ion-button round class="btn" color="verde" (click)="salvar()">Verificado</button>\n</ion-content>'/*ion-inline-end:"C:\xampp\htdocs\fpApp\src\pages\escolher\escolher.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_servidor_servidor__["a" /* ServidorProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], EscolherPage);
    return EscolherPage;
}());

//# sourceMappingURL=escolher.js.map

/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_servidor_servidor__ = __webpack_require__(31);
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
 * Generated class for the NotasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NotasPage = (function () {
    function NotasPage(navCtrl, navParams, storage, servidor, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.servidor = servidor;
        this.loadingCtrl = loadingCtrl;
        this.notas = [];
        this.navParams = navParams;
        this.dados = this.navParams.data;
        var loading = this.loadingCtrl.create({
            duration: 3500,
            spinner: 'hide',
            content: "\n      <div class=\"custom-spinner-container\">\n      <img class=\"loading\" width=\"40px\" height=\"40px\" src=\"assets/img/load.gif\" />\n    </div>"
        });
        loading.present();
        this.getNotas();
    }
    NotasPage.prototype.getNotas = function () {
        var _this = this;
        this.storage.get('dados').then(function (val) {
            _this.dados = val;
            console.log(_this.dados);
            _this.servidor.getNotas(_this.dados.dados.id_cliente, _this.dados.dados.matricula, _this.dados.dados.aluno).subscribe(function (data) { return _this.notas = data; }, function (err) { return console.log(err); });
        });
    };
    NotasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-notas',template:/*ion-inline-start:"C:\xampp\htdocs\fpApp\src\pages\notas\notas.html"*/'<!--\n  Generated template for the MaisPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content class="corpo">\n  <ion-grid no-padding>\n    <ion-row *ngFor="let nota of notas">\n      <ion-card\n        style="background-color: transparent;border-bottom-color: transparent !important;box-shadow: none !important;">\n        <br><br><br>\n        <div *ngIf="nota.menor == \'Sim\' && nota.media_geral != \'Não há lançamentos\'" \n          style="position: relative; width: 20%; height: 16%; left: 39%; font-size: 1.0em;color: white; font-weight: bolder; background-color: red; border-radius: 50%;">\n          <div\n            style="margin: 0; position: absolute; top: 50%; -ms-transform: translateY(-50%); transform: translateY(-50%); width: 100%; font-size: 1.2em;color: white; font-weight: bolder; text-align: center;">\n            {{nota.media_geral}}\n          </div>\n        </div>\n        <div *ngIf="nota.menor == \'Não\' && nota.media_geral != \'Não há lançamentos\'"\n          style="position: relative; width: 20%; height: 16%; left: 39%; font-size: 1.0em;color: white; font-weight: bolder; background-color: green; border-radius: 50%;">\n          <div\n            style="margin: 0; position: absolute; top: 50%; -ms-transform: translateY(-50%); transform: translateY(-50%); width: 100%; font-size: 1.2em;color: white; font-weight: bolder; text-align: center;">\n            {{nota.media_geral}}\n          </div>\n        </div><div *ngIf="nota.media_geral == \'Não há lançamentos\'"\n        style="position: relative; width: 20%; height: 16%; left: 39%; font-size: 1.0em;color: white; font-weight: bolder; background-color: rgb(190, 190, 6); border-radius: 50%;">\n        <div\n          style="margin: 0; position: absolute; top: 50%; -ms-transform: translateY(-50%); transform: translateY(-50%); width: 100%; font-size: 0.8em;color: white; font-weight: bolder; text-align: center;">\n          {{nota.media_geral}}\n        </div>\n      </div>\n        <br><br><br><br>\n        <div\n          style="position: relative; text-align: center; font-size: 1.3em;color: white; font-weight: bolder; width: 100%;">\n          Minhas Notas</div>\n        <br><br>\n        <div style="position: relative; left: 5%; font-size: 0.9em;color: white; font-weight: bolder; width: 100%;">\n          Prova Teórica: {{nota.nota_prova_teorica}}</div>\n        <br><br>\n        <div *ngIf="nota.nota_trabalho"\n          style="position: relative; left: 5%; font-size: 0.9em;color: white; font-weight: bolder; width: 100%;">\n          Prova Prática: {{nota.nota_trabalho}}</div>\n        <div *ngIf="nota.media_pratica"\n          style="position: relative; left: 5%; font-size: 0.9em;color: white; font-weight: bolder; width: 100%;">\n          Prova Prática: {{nota.media_pratica}}</div>\n        <br><br>\n        <div *ngIf="dados.dados.aluno == 0"\n          style="position: relative; left: 5%; font-size: 0.9em;color: white; font-weight: bolder; width: 100%;">\n          Frequência: {{nota.media_trabalho}}</div>\n        <div *ngIf="nota.media_trabalho && dados.dados.aluno != 0"\n          style="position: relative; left: 5%; font-size: 0.9em;color: white; font-weight: bolder; width: 100%;">\n          Média trabalhos: {{nota.media_trabalho}}</div>\n        <br><br>\n        <div *ngIf="dados.dados.aluno != 0" style="position: relative; left: 5%; font-size: 0.9em;color: white; font-weight: bolder; width: 100%;">\n          Frequência: {{nota.presenca}}</div>\n        <br><br><br><br><br><br>\n      </ion-card>\n    </ion-row>\n  </ion-grid>\n</ion-content>'/*ion-inline-end:"C:\xampp\htdocs\fpApp\src\pages\notas\notas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__providers_servidor_servidor__["a" /* ServidorProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], NotasPage);
    return NotasPage;
}());

//# sourceMappingURL=notas.js.map

/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaisPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(43);
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
 * Generated class for the MaisPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MaisPage = (function () {
    function MaisPage(navCtrl, navParams, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.user = {};
        this.navParams = navParams;
        this.dados = this.navParams.data;
        this.storage.get('dados').then(function (val) {
            _this.dados = val;
            _this.aluno = _this.dados.dados.aluno;
            _this.tipo = _this.dados.dados.tipo;
            _this.img_usuario = _this.dados.dados.img_usuario;
            _this.nome = _this.dados.dados.nome;
        });
    }
    MaisPage.prototype.notificacoes = function () {
        this.navCtrl.push('FichaFinanceiraPage');
    };
    MaisPage.prototype.sair = function () {
        this.storage.clear();
        this.navCtrl.parent.parent.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    MaisPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mais',template:/*ion-inline-start:"C:\xampp\htdocs\fpApp\src\pages\mais\mais.html"*/'<!--\n  Generated template for the MaisPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content class="corpo">\n  <div style="text-align: center; width: 70%;">\n    <img class="img" src="{{img_usuario}}">\n  </div>\n  <div class="nome">{{nome}}</div>\n  <div class="tipoDeAssinatura" *ngIf="tipo == \'3\'">Assinatura: Premium</div>\n  <div class="tipoDeAssinatura" *ngIf="tipo == \'0\'">Assinatura: Free</div>\n  <ion-list no-lines style="position: relative; top: 40%;">\n    <ion-item style="background-color: transparent; height: 50px;">\n      <img class="imgNotificacao" style="top: 60%; left: 31%;" src="assets/img/Ficha Financeira.png">\n      <button ion-button class="btnNotificacao" style="top: 50%; left: 33%;" (click)="notificacoes()">Ficha\n        financeira</button>\n    </ion-item>\n    <ion-item *ngIf="aluno == \'1\'" style="background-color: transparent;height: 50px;">\n      <img class="imgNotificacao" style="top: 60%;left: 38%;" src="assets/img/Ajuda.png">\n      <button ion-button class="btnNotificacao" style="top: 50%;left: 33%;"><a href="https://www.gracomonline.com.br/site/suporte.html" style="color: #A7A5A4;">Ajuda</a></button>\n    </ion-item>\n    <ion-item *ngIf="aluno == \'0\'" style="background-color: transparent;height: 50px;">\n      <img class="imgNotificacao" style="top: 60%;left: 38%;" src="assets/img/Ajuda.png">\n      <button ion-button class="btnNotificacao" style="top: 50%;left: 33%;"><a href="https://www.fpeduc.com/suporte.php" style="color: #A7A5A4;">Ajuda</a></button>\n    </ion-item>\n    <ion-item *ngIf="aluno == \'2\'" style="background-color: transparent;height: 50px;">\n      <img class="imgNotificacao" style="top: 60%;left: 38%;" src="assets/img/Ajuda.png">\n      <button ion-button class="btnNotificacao" style="top: 50%;left: 33%;"><a href="https://imugi.com.br/suporte.html" style="color: #A7A5A4;">Ajuda</a></button>\n    </ion-item>\n    <ion-item style="background-color: transparent;height: 50px;">\n      <img class="imgNotificacao" style="top: 60%;left: 38%;" src="assets/img/Sair.png">\n      <button ion-button class="btnNotificacao" style="top: 50%;left: 33%;" (click)="sair()">Sair</button>\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"C:\xampp\htdocs\fpApp\src\pages\mais\mais.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], MaisPage);
    return MaisPage;
}());

//# sourceMappingURL=mais.js.map

/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_servidor_servidor__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_screen_orientation__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SearchPage = (function () {
    function SearchPage(navCtrl, navParams, servidor, inAppBrowser, storage, loadingCtrl, screenOrientation) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.servidor = servidor;
        this.inAppBrowser = inAppBrowser;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.screenOrientation = screenOrientation;
        this.usuarios = [];
        this.apostilas = [];
        this.cursos = [];
        this.todos = [];
        this.queryText = "";
        this.selected = "0";
        this.navParams = navParams;
        this.dados = this.navParams.data;
        var loading = this.loadingCtrl.create({
            duration: 1000,
            spinner: 'hide',
            content: "\n      <div class=\"custom-spinner-container\">\n      <img class=\"loading\" width=\"40px\" height=\"40px\" src=\"assets/img/load.gif\" />\n    </div>"
        });
        loading.present();
        this.getBuscaTudo('');
        this.getBuscaUsuario('');
        this.getBuscaCurso('');
        this.getBuscaApostila('');
    }
    SearchPage.prototype.limpar = function () {
        this.getBuscaTudo('');
        this.getBuscaUsuario('');
        this.getBuscaCurso('');
        this.getBuscaApostila('');
    };
    SearchPage.prototype.filter = function (texto) {
        var val = texto.target.value;
        this.getBuscaTudo(val.trim());
        this.getBuscaUsuario(val.trim());
        this.getBuscaCurso(val.trim());
        this.getBuscaApostila(val.trim());
    };
    SearchPage.prototype.lockLandscape = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                try {
                    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
                }
                catch (error) {
                    console.log(error);
                }
                return [2 /*return*/];
            });
        });
    };
    SearchPage.prototype.lockPortrait = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                try {
                    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
                }
                catch (error) {
                    console.log(error);
                }
                return [2 /*return*/];
            });
        });
    };
    SearchPage.prototype.getBuscaTudo = function (nome) {
        var _this = this;
        this.storage.get('dados').then(function (val) {
            _this.dados = val;
            _this.servidor.getBuscatudo(nome, _this.dados.dados.aluno, _this.dados.dados.tipo, _this.dados.dados.matricula).subscribe(function (data) { return _this.todos = data; }, function (err) { return console.log(err); });
        });
    };
    SearchPage.prototype.getBuscaApostila = function (nome) {
        var _this = this;
        this.storage.get('dados').then(function (val) {
            _this.dados = val;
            _this.servidor.getBuscaApostila(nome, _this.dados.dados.aluno, _this.dados.dados.matricula).subscribe(function (data) { return _this.apostilas = data; }, function (err) { return console.log(err); });
        });
    };
    SearchPage.prototype.getBuscaCurso = function (nome) {
        var _this = this;
        this.servidor.getBuscaCurso(nome).subscribe(function (data) { return _this.cursos = data; }, function (err) { return console.log(err); });
    };
    SearchPage.prototype.getBuscaUsuario = function (nome) {
        var _this = this;
        this.servidor.getBuscaUsuario(nome).subscribe(function (data) { return _this.usuarios = data; }, function (err) { return console.log(err); });
    };
    SearchPage.prototype.clickTab = function (valor) {
        this.selected = valor;
    };
    SearchPage.prototype.escolher = function (tudo) {
        var _this = this;
        this.storage.get('dados').then(function (val) {
            _this.dados = val;
            if (_this.selected == "0") {
                if (tudo.id_cliente) {
                    _this.navCtrl.push('DetalheUsuarioPage', { usuario: tudo });
                }
                else if (tudo.id_cursos_app) {
                    if (tudo.tipo_curso == 0 && _this.dados.dados.tipo != 0) {
                        _this.navCtrl.push('EscolhaModulosPage', { dados: _this.dados.dados, curso: tudo });
                    }
                    else if (tudo.tipo_curso == 1) {
                        _this.navCtrl.push('DetalheCursoComplementarPage', { curso: tudo });
                    }
                }
                else if (tudo.id_apostilas_app) {
                    var options = {
                        zoom: 'no',
                        location: 'no',
                        toolbar: 'no'
                    };
                    _this.lockLandscape();
                    var browser = _this.inAppBrowser.create(tudo.url_apostilas, '_self', options);
                    browser.on('exit').subscribe(function () {
                        _this.lockPortrait();
                    }, function (err) {
                        console.error(err);
                    });
                }
            }
            else if (_this.selected == "1") {
                _this.navCtrl.push('DetalheUsuarioPage', { usuario: tudo });
            }
            else if (_this.selected == "2") {
                if (tudo.tipo_curso == 0 && _this.dados.dados.tipo == 0) {
                    _this.navCtrl.push('DetalheCursoComplementarPage', { curso: tudo });
                }
                else if (tudo.tipo_curso == 0 && _this.dados.dados.tipo != 0) {
                    _this.navCtrl.push('EscolhaModulosPage', { dados: _this.dados.dados, curso: tudo });
                }
                else if (tudo.tipo_curso == 1) {
                    _this.navCtrl.push('DetalheCursoComplementarPage', { curso: tudo });
                }
            }
            else if (_this.selected == "3") {
                var options = {
                    zoom: 'no',
                    location: 'no',
                    toolbar: 'no'
                };
                _this.lockLandscape();
                var browser = _this.inAppBrowser.create(tudo.url_apostilas, '_self', options);
                browser.on('exit').subscribe(function () {
                    _this.lockPortrait();
                }, function (err) {
                    console.error(err);
                });
            }
        });
    };
    SearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-search',template:/*ion-inline-start:"C:\xampp\htdocs\fpApp\src\pages\search\search.html"*/'<!--\n  Generated template for the CursosPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content class="corpo">\n  <div id="search" class="search-input-keyword">\n    <ion-searchbar class="ion-searchtext" id="ion-searchtext" placeholder="Oque você precisa?" [(ngModel)]="queryText"\n      (ionInput)="filter($event)" [showCancelButton]="false" (ionClear)="limpar()" (ionCancel)="limpar()">\n    </ion-searchbar>\n  </div>\n  <ion-segment [(ngModel)]="tabsBusca" color="white">\n    <ion-segment-button value="perfis" style="color: white" (click)="clickTab(1)">\n      <ion-icon name="person"></ion-icon>\n    </ion-segment-button>\n    <ion-segment-button value="cursos" style="color: white" (click)="clickTab(2)">\n      <ion-icon name="play"></ion-icon>\n    </ion-segment-button>\n    <ion-segment-button value="book" style="color: white" (click)="clickTab(3)">\n      <ion-icon name="book"></ion-icon>\n    </ion-segment-button>\n  </ion-segment>\n  <ion-grid style="width: 100%" *ngIf="selected == 0">\n    <ion-row *ngFor="let tudo of todos" (click)=escolher(tudo)>\n      <ion-card\n        style="height: 55px; background-color: transparent ;border-bottom-color: transparent !important;box-shadow: none !important;">\n        <ion-avatar>\n          <img *ngIf="tudo.url" src="{{tudo.url}}" style="position: absolute; width: 45%; height: 45%;" />\n        </ion-avatar>\n        <div\n          style="position: relative; left: 20%; color: white; font-size: 1.0em; font-weight: bolder; top: 30%; width: 100%;">\n          {{tudo.nome}}</div>\n      </ion-card>\n    </ion-row>\n  </ion-grid>\n  <div [ngSwitch]="tabsBusca">\n    <div *ngSwitchCase="\'perfis\'">\n      <br>\n      <div\n        style="position: relative; left: 5%; color: #9E9C9C; font-size: 1.0em; font-weight: 400; top: 30%; width: 100%;">\n        Usuários</div>\n      <ion-grid style="width: 100%">\n        <ion-row *ngFor="let tudo of usuarios" (click)=escolher(tudo)>\n          <ion-card\n            style="height: 55px; background-color: transparent ;border-bottom-color: transparent !important;box-shadow: none !important;">\n            <ion-avatar>\n              <img *ngIf="tudo.url" src="{{tudo.url}}" style="position: absolute; width: 45%; height: 45%;" />\n            </ion-avatar>\n            <div\n              style="position: relative; left: 20%; color: white; font-size: 1.0em; font-weight: bolder; top: 30%; width: 100%;">\n              {{tudo.nome}}</div>\n          </ion-card>\n        </ion-row>\n      </ion-grid>\n    </div>\n    <div *ngSwitchCase="\'cursos\'">\n      <br>\n      <div\n        style="position: relative; left: 5%; color: #9E9C9C; font-size: 1.0em; font-weight: 400; top: 30%; width: 100%;">\n        Cursos</div>\n      <ion-grid style="width: 100%">\n        <ion-row *ngFor="let tudo of cursos" (click)=escolher(tudo)>\n          <ion-card\n            style="height: 55px; background-color: transparent ;border-bottom-color: transparent !important;box-shadow: none !important;"\n            *ngIf="(dados.dados.tipo) == tudo.destinado_ao_usuario || tudo.destinado_ao_usuario == \'\'">\n            <ion-avatar>\n              <img *ngIf="tudo.url" src="{{tudo.url}}" style="position: absolute; width: 45%; height: 45%;" />\n            </ion-avatar>\n            <div\n              style="position: relative; left: 20%; color: white; font-size: 1.0em; font-weight: bolder; top: 30%; width: 100%;">\n              {{tudo.nome}}</div>\n          </ion-card>\n        </ion-row>\n      </ion-grid>\n    </div>\n    <div *ngSwitchCase="\'book\'">\n      <br>\n      <div\n        style="position: relative; left: 5%; color: #9E9C9C; font-size: 1.0em; font-weight: 400; top: 30%; width: 100%;">\n        Apostilas</div>\n      <ion-grid style="width: 100%">\n        <ion-row *ngFor="let tudo of apostilas" (click)=escolher(tudo)>\n          <ion-card\n            style="height: 55px; background-color: transparent ;border-bottom-color: transparent !important;box-shadow: none !important;">\n            <ion-avatar>\n              <img *ngIf="tudo.url" src="{{tudo.url}}" style="position: absolute; width: 45%; height: 45%;" />\n            </ion-avatar>\n            <div\n              style="position: relative; left: 20%; color: white; font-size: 1.0em; font-weight: bolder; top: 30%; width: 100%;">\n              {{tudo.nome}}</div>\n          </ion-card>\n        </ion-row>\n      </ion-grid>\n    </div>\n  </div>\n</ion-content>'/*ion-inline-end:"C:\xampp\htdocs\fpApp\src\pages\search\search.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_servidor_servidor__["a" /* ServidorProvider */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__["a" /* InAppBrowser */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_screen_orientation__["a" /* ScreenOrientation */]])
    ], SearchPage);
    return SearchPage;
}());

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 147:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 147;

/***/ }),

/***/ 191:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/apostilas/apostilas.module": [
		420,
		14
	],
	"../pages/aulas/aulas.module": [
		422,
		8
	],
	"../pages/cursos/cursos.module": [
		192
	],
	"../pages/detalhe-curso-complementar/detalhe-curso-complementar.module": [
		419,
		7
	],
	"../pages/detalhe-da-aula-curso-principal/detalhe-da-aula-curso-principal.module": [
		416,
		6
	],
	"../pages/detalhe-usuario/detalhe-usuario.module": [
		417,
		5
	],
	"../pages/dificuldade-acesso/dificuldade-acesso.module": [
		418,
		4
	],
	"../pages/dificuldade-resposta/dificuldade-resposta.module": [
		421,
		3
	],
	"../pages/escolha-modulos/escolha-modulos.module": [
		424,
		2
	],
	"../pages/escolher/escolher.module": [
		425,
		13
	],
	"../pages/esqueci-a-senha/esqueci-a-senha.module": [
		217
	],
	"../pages/ficha-financeira/ficha-financeira.module": [
		423,
		1
	],
	"../pages/login/login.module": [
		216
	],
	"../pages/mais/mais.module": [
		426,
		12
	],
	"../pages/notas/notas.module": [
		428,
		11
	],
	"../pages/pagina-perguntas/pagina-perguntas.module": [
		427,
		0
	],
	"../pages/search/search.module": [
		429,
		10
	],
	"../pages/tab-aluno/tab-aluno.module": [
		430,
		9
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 191;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CursosPageModule", function() { return CursosPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cursos__ = __webpack_require__(193);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CursosPageModule = (function () {
    function CursosPageModule() {
    }
    CursosPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__cursos__["a" /* CursosPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cursos__["a" /* CursosPage */]),
            ],
        })
    ], CursosPageModule);
    return CursosPageModule;
}());

//# sourceMappingURL=cursos.module.js.map

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CursosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_servidor_servidor__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_screen_orientation__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(111);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






/**
 * Generated class for the CursosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CursosPage = (function () {
    function CursosPage(navCtrl, navParams, loadingCtrl, servidor, storage, http, screenOrientation) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.servidor = servidor;
        this.storage = storage;
        this.http = http;
        this.screenOrientation = screenOrientation;
        this.cursosComplementarLancamentos = [];
        this.cursosComplementarEmBreve = [];
        this.user = {};
        this.cursos = [];
        this.navParams = navParams;
        this.dados = this.navParams.data;
        this.lockPortrait();
        if (this.dados.dados != null) {
            this.setDados();
        }
        var loading = this.loadingCtrl.create({
            duration: 800,
            spinner: 'hide',
            content: "\n      <div class=\"custom-spinner-container\">\n      <img class=\"loading\" width=\"40px\" height=\"40px\" src=\"assets/img/load.gif\" />\n    </div>"
        });
        loading.present();
        this.getRetornarCursoPrincipal();
        this.getRetornarCursoComplementar();
    }
    CursosPage.prototype.setDados = function () {
        this.storage.set('dados', this.dados);
    };
    CursosPage.prototype.getRetornarCursoPrincipal = function () {
        var _this = this;
        this.storage.get('dados').then(function (val) {
            _this.dados = val;
            _this.servidor.getCursosPrincipal(_this.dados.dados.tipo).subscribe(function (data) { return _this.cursos = data; }, function (err) { return console.log(err); });
        });
    };
    CursosPage.prototype.getRetornarCursoComplementar = function () {
        var _this = this;
        this.storage.get('dados').then(function (val) {
            _this.dados = val;
            _this.servidor.getCursoComplementarLancamentos().subscribe(function (data) { return _this.cursosComplementarLancamentos = data; }, function (err) { return console.log(err); });
        });
        this.storage.get('dados').then(function (val) {
            _this.dados = val;
            _this.servidor.getCursoComplementarBreve().subscribe(function (data) { return _this.cursosComplementarEmBreve = data; }, function (err) { return console.log(err); });
        });
    };
    CursosPage.prototype.escolhaModulos = function (curso) {
        var _this = this;
        this.storage.get('dados').then(function (val) {
            _this.dados = val;
            _this.navCtrl.push('EscolhaModulosPage', { dados: _this.dados.dados, curso: curso });
        });
    };
    CursosPage.prototype.escolhaAulaComplementar = function (curso) {
        this.navCtrl.push('DetalheCursoComplementarPage', { curso: curso });
    };
    CursosPage.prototype.lockPortrait = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                try {
                    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
                }
                catch (error) {
                    console.log(error);
                }
                return [2 /*return*/];
            });
        });
    };
    CursosPage.prototype.doRefresh = function (refresh) {
        this.getRetornarCursoPrincipal();
        this.getRetornarCursoComplementar();
        refresh.complete();
    };
    CursosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cursos',template:/*ion-inline-start:"C:\xampp\htdocs\fpApp\src\pages\cursos\cursos.html"*/'<!--\n  Generated template for the CursosPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content class="corpo">\n  <ion-grid no-padding>\n    <ion-slides pager="true" loop="true">\n      <ion-row *ngFor="let curso of cursos" (click)="escolhaModulos(curso)">\n        <ion-slide>\n          <ion-card\n            style="background-color: transparent;border-bottom-color: transparent !important;box-shadow: none !important;">\n            <img src="assets/img/Logo_FP.png" style="position: absolute;top:5%; left: 6%; width:25px;">\n            <img *ngIf="dados.dados.tipo == 3" src="assets/img/Premium.png"\n              style="position: absolute;top:6%; left: 80%; width:60px;">\n            <img *ngIf="dados.dados.tipo == 0" src="assets/img/free.png"\n              style="position: absolute;top:6%; left: 80%; width:60px;">\n            <img src="assets/img/Saiba_mais.png" style="position: absolute;top:68%;left: 79%; width:50px;">\n            <img src="{{curso.img_curso}}" style="background-color: #202020;" />\n            <button ion-button round class="btn" color="verde">\n              <ion-icon name="play"></ion-icon>Assistir\n            </button>\n            <!-- <div style="position: absolute; top: 90%; left: 3%;font-size: 1.0em;color: white; font-weight: bolder;">Últimos\n          lançamentos</div> -->\n          </ion-card>\n        </ion-slide>\n      </ion-row>\n    </ion-slides>\n  </ion-grid>\n  <ion-grid>\n    <div style="left: 3%;font-size: 1.0em;color: white; font-weight: bolder;">Últimos\n      lançamentos</div>\n    <br>\n    <ion-row nowrap class="container">\n      <ion-col *ngFor="let curso of cursosComplementarLancamentos" col-4 (click)=\'escolhaAulaComplementar(curso)\'>\n        <ion-card style="background-color: transparent;">\n          <img src="{{curso.img_curso}}" style="width: 100%; height: 170px;" />\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-grid>\n    <div style="left: 3%;font-size: 1.0em;color: white; font-weight: bolder;">Em breve</div>\n    <br>\n    <ion-row nowrap class="container">\n      <ion-col *ngFor="let curso of cursosComplementarEmBreve" col-4 (click)=\'escolhaAulaComplementar(curso)\'>\n        <ion-card style="background-color: transparent;">\n          <img src="{{curso.img_curso}}" style="width: 100%; height: 170px;" />\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>'/*ion-inline-end:"C:\xampp\htdocs\fpApp\src\pages\cursos\cursos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__providers_servidor_servidor__["a" /* ServidorProvider */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_screen_orientation__["a" /* ScreenOrientation */]])
    ], CursosPage);
    return CursosPage;
}());

//# sourceMappingURL=cursos.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EsqueciASenhaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_login_login__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_servidor_servidor__ = __webpack_require__(31);
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
 * Generated class for the EsqueciASenhaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EsqueciASenhaPage = (function () {
    function EsqueciASenhaPage(nav, alertCtrl, loadingCtrl, toast, servior, toastCrtl) {
        this.nav = nav;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toast = toast;
        this.servior = servior;
        this.toastCrtl = toastCrtl;
        this.email = "";
    }
    EsqueciASenhaPage.prototype.reset = function () {
        if (this.email == undefined || this.email == "") {
            var alert_1 = this.alertCtrl.create({
                title: 'Atenção',
                message: 'Preencha o campo email!',
                buttons: [
                    'OK'
                ]
            });
            alert_1.present();
        }
        else {
            this.servior.getRecuperaSenha(this.email).subscribe(function (data) { return console.log(data); }, function (err) { return console.log(err); });
            this.presentToast('Verifique o e-mail informado');
        }
    };
    EsqueciASenhaPage.prototype.back = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_2__pages_login_login__["a" /* LoginPage */]);
    };
    EsqueciASenhaPage.prototype.faq = function () {
        this.nav.setRoot('DificuldadeAcessoPage');
    };
    EsqueciASenhaPage.prototype.presentToast = function (mensagem) {
        var toast = this.toastCrtl.create({
            message: mensagem,
            duration: 3000
        });
        toast.present();
    };
    EsqueciASenhaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-esqueci-a-senha',template:/*ion-inline-start:"C:\xampp\htdocs\fpApp\src\pages\esqueci-a-senha\esqueci-a-senha.html"*/'<ion-content>\n  <br>\n  <img src="assets/img/Seta_Retorno.png" style="position: relative;left: 8%; width:30px;height:30px;" (click)="back()">\n  <br>\n  <br>\n  <br>\n  <br>\n  <br>\n  <br>\n  <img src="assets/img/Icone_Recuperar_Senha.png" style="position: relative;left: 40%; width:90px;height:90px;">\n  <div style="position: relative; color: #20953d; font-size: 0.9em; font-weight: bolder; text-align: center;">\n    <br>Digite seu e-mail para<br>para recuperar a senha</div>\n  <ion-item class="ion-card ion-item">\n    <ion-input type="text" [(ngModel)]="email" placeholder="E-mail" class="ion_input">\n    </ion-input>\n    <ion-icon name="person" class="ion_icon" item-right small></ion-icon>\n  </ion-item>\n  <button padding ion-button round class="btn" color="verde" (click)="reset()">Recuperar Senha</button>\n  <br>\n  <br>\n  <br>\n  <br>\n  <br>\n  <br>\n  <br>\n  <br>\n  <br>\n  <div (click)="faq()"\n    style="position: relative; color: #a2a2a2; font-size: 1.1em; font-weight: bolder; text-align: center;">Dificuldade de Acesso?</div>\n</ion-content>'/*ion-inline-end:"C:\xampp\htdocs\fpApp\src\pages\esqueci-a-senha\esqueci-a-senha.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3__providers_servidor_servidor__["a" /* ServidorProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], EsqueciASenhaPage);
    return EsqueciASenhaPage;
}());

//# sourceMappingURL=esqueci-a-senha.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(68);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
            ],
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EsqueciASenhaPageModule", function() { return EsqueciASenhaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__esqueci_a_senha__ = __webpack_require__(215);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EsqueciASenhaPageModule = (function () {
    function EsqueciASenhaPageModule() {
    }
    EsqueciASenhaPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__esqueci_a_senha__["a" /* EsqueciASenhaPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__esqueci_a_senha__["a" /* EsqueciASenhaPage */]),
            ],
        })
    ], EsqueciASenhaPageModule);
    return EsqueciASenhaPageModule;
}());

//# sourceMappingURL=esqueci-a-senha.module.js.map

/***/ }),

/***/ 259:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(269);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_servidor_servidor__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_screen_orientation__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common_http__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_http__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_in_app_browser__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_login_login_module__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_notas_notas__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_tab_aluno_tab_aluno__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_cursos_cursos_module__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_escolher_escolher__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_apostilas_apostilas__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_mais_mais__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_search_search__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_esqueci_a_senha_esqueci_a_senha_module__ = __webpack_require__(217);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_16__pages_escolher_escolher__["a" /* EscolherPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_apostilas_apostilas__["a" /* ApostilasPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_notas_notas__["a" /* NotasPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_mais_mais__["a" /* MaisPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_search_search__["a" /* SearchPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_tab_aluno_tab_aluno__["a" /* TabAlunoPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/cursos/cursos.module#CursosPageModule', name: 'CursosPage', segment: 'cursos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/detalhe-da-aula-curso-principal/detalhe-da-aula-curso-principal.module#DetalheDaAulaCursoPrincipalPageModule', name: 'DetalheDaAulaCursoPrincipalPage', segment: 'detalhe-da-aula-curso-principal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/detalhe-usuario/detalhe-usuario.module#DetalheUsuarioPageModule', name: 'DetalheUsuarioPage', segment: 'detalhe-usuario', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/dificuldade-acesso/dificuldade-acesso.module#DificuldadeAcessoPageModule', name: 'DificuldadeAcessoPage', segment: 'dificuldade-acesso', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/detalhe-curso-complementar/detalhe-curso-complementar.module#DetalheCursoComplementarPageModule', name: 'DetalheCursoComplementarPage', segment: 'detalhe-curso-complementar', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/apostilas/apostilas.module#ApostilasPageModule', name: 'ApostilasPage', segment: 'apostilas', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/dificuldade-resposta/dificuldade-resposta.module#DificuldadeRespostaPageModule', name: 'DificuldadeRespostaPage', segment: 'dificuldade-resposta', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/aulas/aulas.module#AulasPageModule', name: 'AulasPage', segment: 'aulas', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ficha-financeira/ficha-financeira.module#FichaFinanceiraPageModule', name: 'FichaFinanceiraPage', segment: 'ficha-financeira', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/escolha-modulos/escolha-modulos.module#EscolhaModulosPageModule', name: 'EscolhaModulosPage', segment: 'escolha-modulos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/escolher/escolher.module#EscolherPageModule', name: 'EscolherPage', segment: 'escolher', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/esqueci-a-senha/esqueci-a-senha.module#EsqueciASenhaPageModule', name: 'EsqueciASenhaPage', segment: 'esqueci-a-senha', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mais/mais.module#MaisPageModule', name: 'MaisPage', segment: 'mais', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pagina-perguntas/pagina-perguntas.module#PaginaPerguntasPageModule', name: 'PaginaPerguntasPage', segment: 'pagina-perguntas', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/notas/notas.module#NotasPageModule', name: 'NotasPage', segment: 'notas', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/search/search.module#SearchPageModule', name: 'SearchPage', segment: 'search', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tab-aluno/tab-aluno.module#TabAlunoPageModule', name: 'TabAlunoPage', segment: 'tab-aluno', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_12__pages_login_login_module__["LoginPageModule"],
                __WEBPACK_IMPORTED_MODULE_15__pages_cursos_cursos_module__["CursosPageModule"],
                __WEBPACK_IMPORTED_MODULE_20__pages_esqueci_a_senha_esqueci_a_senha_module__["EsqueciASenhaPageModule"],
                __WEBPACK_IMPORTED_MODULE_10__angular_http__["b" /* HttpModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_16__pages_escolher_escolher__["a" /* EscolherPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_apostilas_apostilas__["a" /* ApostilasPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_notas_notas__["a" /* NotasPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_mais_mais__["a" /* MaisPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_search_search__["a" /* SearchPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_tab_aluno_tab_aluno__["a" /* TabAlunoPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_7__providers_servidor_servidor__["a" /* ServidorProvider */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_screen_orientation__["a" /* ScreenOrientation */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServidorProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for tttte ServidorProvider provider.

  See ularttps://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ServidorProvider = (function () {
    function ServidorProvider(http) {
        this.http = http;
        this.url = "https://futuronopresente.com.br/appFP/";
        console.log('ttello ServidorProvider Provider');
    }
    ServidorProvider.prototype.urlGet = function () {
        return this.url;
    };
    ServidorProvider.prototype.getCursosPrincipal = function (tipo) {
        return this.http.get(this.url + 'cursos_principais.php?tipo=' + tipo).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (res) { return res.json(); }));
    };
    ServidorProvider.prototype.getCursoComplementarLancamentos = function () {
        return this.http.get(this.url + 'cursos_complementares_lancamentos.php').pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (res) { return res.json(); }));
    };
    ServidorProvider.prototype.getCursoComplementarBreve = function () {
        return this.http.get(this.url + 'cursos_complementares_em_breve.php').pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (res) { return res.json(); }));
    };
    ServidorProvider.prototype.getCursosPrincipalModulos = function (qual) {
        return this.http.get(this.url + 'cursos_principais_modulos.php?qual_curso=' + qual).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (res) { return res.json(); }));
    };
    ServidorProvider.prototype.getCursosPrincipalModulosAulas = function (etapa, curso) {
        return this.http.get(this.url + 'cursos_principais_modulos_aulas.php?etapa=' + etapa + '&qual_curso=' + curso).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (res) { return res.json(); }));
    };
    ServidorProvider.prototype.getCursosComplementarAulas = function (qualCurso) {
        return this.http.get(this.url + 'cursos_complementares_aulas.php?curso=' + qualCurso).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (res) { return res.json(); }));
    };
    ServidorProvider.prototype.getPrimeiroAcesso = function (escola, email, matricula) {
        return this.http.get(this.url + 'update_curso.php?escola=' + escola + '&email=' + email + '&matricula=' + matricula).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (res) { return res.json(); }));
    };
    ServidorProvider.prototype.getBuscatudo = function (nome, alunoDeOnde, nivel, matricula) {
        return this.http.get(this.url + 'buscar_user_cursos_apostilas.php?destinado_ao_usuario=' + nivel + '&de_qual_escola=' + alunoDeOnde + '&nome=' + nome + '&matricula=' + matricula).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (res) { return res.json(); }));
    };
    ServidorProvider.prototype.getBuscaUsuario = function (nome) {
        return this.http.get(this.url + 'buscar_user.php?nome=' + nome).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (res) { return res.json(); }));
    };
    ServidorProvider.prototype.getBuscaCurso = function (nome) {
        return this.http.get(this.url + 'buscar_cursos.php?nome=' + nome).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (res) { return res.json(); }));
    };
    ServidorProvider.prototype.getBuscaApostila = function (nome, alunoDeOnde, matricula) {
        return this.http.get(this.url + 'buscar_apostilas.php?de_qual_escola=' + alunoDeOnde + '&nome=' + nome + '&matricula=' + matricula).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (res) { return res.json(); }));
    };
    ServidorProvider.prototype.getApostila = function (matricula, alunoDeOnde) {
        return this.http.get(this.url + 'retorno_apostilas.php?matricula=' + matricula + '&de_qual_escola=' + alunoDeOnde).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (res) { return res.json(); }));
    };
    ServidorProvider.prototype.getNotas = function (idCliente, matricula, alunoDeOnde) {
        return this.http.get(this.url + 'provas.php?id_cliente=' + idCliente + '&matricula=' + matricula + '&de_qual_escola=' + alunoDeOnde).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (res) { return res.json(); }));
    };
    ServidorProvider.prototype.getRecuperaSenha = function (email) {
        return this.http.get(this.url + 'recupera_senha/recupera.php?email=' + email).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (res) { return res.json(); }));
    };
    ServidorProvider.prototype.getSuporte = function () {
        return this.http.get(this.url + 'suporte_categorias.php').pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (res) { return res.json(); }));
    };
    ServidorProvider.prototype.getSubcategorias = function (texto) {
        return this.http.get(this.url + 'busca_suporte.php?texto_subcategoria_pergunta=' + texto).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (res) { return res.json(); }));
    };
    ServidorProvider.prototype.getSubcategoriasNosTopicos = function (qualCategoria) {
        return this.http.get(this.url + 'subcategorias.php?qual_categoria=' + qualCategoria).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (res) { return res.json(); }));
    };
    ServidorProvider.prototype.updateSim = function (qualSubcategoria) {
        return this.http.get(this.url + 'update_suporte_sim.php?qual_subcategoria=' + qualSubcategoria).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (res) { return res.json(); }));
    };
    ServidorProvider.prototype.updateNao = function (qualSubcategoria) {
        return this.http.get(this.url + 'update_suporte_nao.php?qual_subcategoria=' + qualSubcategoria).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (res) { return res.json(); }));
    };
    ServidorProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], ServidorProvider);
    return ServidorProvider;
}());

//# sourceMappingURL=servidor.js.map

/***/ }),

/***/ 415:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_tab_aluno_tab_aluno__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, storage) {
        var _this = this;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.storage = storage;
        this.rootPage = '';
        this.initializeApp();
        this.storage.get('dados').then(function (token) {
            if (!token) {
                _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */]);
            }
            else {
                _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_tab_aluno_tab_aluno__["a" /* TabAlunoPage */]);
            }
        });
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            // this.statusBar.styleDefault();
            _this.statusBar.styleLightContent();
            // this.statusBar.backgroundColorByHexString("#ffffff");
            _this.splashScreen.hide();
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\xampp\htdocs\fpApp\src\app\app.html"*/'<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"C:\xampp\htdocs\fpApp\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabAlunoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cursos_cursos__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__notas_notas__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mais_mais__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__search_search__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__apostilas_apostilas__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common_http__ = __webpack_require__(111);
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
 * Generated class for the TabAlunoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TabAlunoPage = (function () {
    function TabAlunoPage(params, navCtrl, http) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.CursosPage = __WEBPACK_IMPORTED_MODULE_2__cursos_cursos__["a" /* CursosPage */];
        this.NotasPage = __WEBPACK_IMPORTED_MODULE_3__notas_notas__["a" /* NotasPage */];
        this.MaisPage = __WEBPACK_IMPORTED_MODULE_4__mais_mais__["a" /* MaisPage */];
        this.SearchPage = __WEBPACK_IMPORTED_MODULE_5__search_search__["a" /* SearchPage */];
        this.ApostilasPage = __WEBPACK_IMPORTED_MODULE_6__apostilas_apostilas__["a" /* ApostilasPage */];
        this.params = params;
        this.dados = this.params.data;
    }
    TabAlunoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tab-aluno',template:/*ion-inline-start:"C:\xampp\htdocs\fpApp\src\pages\tab-aluno\tab-aluno.html"*/'<ion-tabs color="primary" >\n  <ion-tab [root]=\'CursosPage\' tabTitle=\'Cursos\' tabIcon=\'play\' [rootParams]="dados"></ion-tab>\n  <ion-tab [root]=\'ApostilasPage\' tabTitle=\'Apostilas\' tabIcon=\'book\' [rootParams]="dados"></ion-tab>\n  <ion-tab [root]=\'SearchPage\' tabTitle=\'Procurar\' tabIcon=\'search\' [rootParams]="dados"></ion-tab>\n  <ion-tab [root]=\'NotasPage\' tabTitle=\'Notas\' tabIcon=\'filing\' [rootParams]="dados"></ion-tab>\n  <ion-tab [root]=\'MaisPage\' tabTitle=\'Mais\' tabIcon=\'more\' [rootParams]="dados"></ion-tab>\n</ion-tabs>'/*ion-inline-end:"C:\xampp\htdocs\fpApp\src\pages\tab-aluno\tab-aluno.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["a" /* HttpClient */]])
    ], TabAlunoPage);
    return TabAlunoPage;
}());

//# sourceMappingURL=tab-aluno.js.map

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_servidor_servidor__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_tab_aluno_tab_aluno__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__escolher_escolher__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__esqueci_a_senha_esqueci_a_senha__ = __webpack_require__(215);
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
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(navCtrl, navParams, alertCtrl, servior, http, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.servior = servior;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.esqueci = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__esqueci_a_senha_esqueci_a_senha__["a" /* EsqueciASenhaPage */]);
    };
    LoginPage.prototype.logar = function () {
        var _this = this;
        if (this.email == "" || this.senha == "") {
            var alert_1 = this.alertCtrl.create({
                title: 'Atenção',
                message: 'Preencha todos os campos!',
                buttons: ['OK']
            });
            alert_1.present();
        }
        else {
            this.http.get(this.servior.urlGet() + 'login.php?email=' + this.email + '&senha=' + this.senha).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (res) { return res.json(); }))
                .subscribe(function (dados) {
                console.log(dados);
                if (dados.msg.logado == "sim" && dados.dados.ativo == "0" && dados.dados.primeiro_acesso == "1") {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_tab_aluno_tab_aluno__["a" /* TabAlunoPage */], { dados: dados.dados });
                }
                else if (dados.msg.logado == "sim" && dados.dados.primeiro_acesso == "" || dados.msg.logado == "sim" && dados.dados.primeiro_acesso == "0") {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__escolher_escolher__["a" /* EscolherPage */], { dados: dados.dados });
                }
                else {
                    var alert_2 = _this.alertCtrl.create({
                        title: 'Atenção',
                        message: 'Usuário invalido!',
                        buttons: [
                            'OK'
                        ]
                    });
                    alert_2.present();
                }
            });
        }
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\xampp\htdocs\fpApp\src\pages\login\login.html"*/'<ion-content>\n  <br>\n  <br>\n  <br>\n  <br>\n  <br>\n  <br>\n  <br>\n  <img src="assets/img/Perfil_Aluno.png" style="position: relative;left: 40%; width:90px;height:90px;">\n  <div style="position: relative; color: #20953d; font-size: 0.9em; font-weight: bolder; text-align: center;">\n    <br>Bem-vindo de volta aos <br>estudos</div>\n  <ion-item class="ion-card ion-item">\n    <ion-input type="text" [(ngModel)]="email" placeholder="E-mail" class="ion_input" name="vehicle_cust_name">\n    </ion-input>\n    <ion-icon name="person" class="ion_icon" item-right small></ion-icon>\n  </ion-item>\n  <ion-item class="ion-card ion-item">\n    <ion-input type="password" [(ngModel)]="senha" placeholder="Senha" class="ion_input"></ion-input>\n    <ion-icon name="unlock" class="ion_icon" item-right small></ion-icon>\n  </ion-item>\n  <button padding ion-button round class="btn" color="verde" (click)="logar()">Entrar</button>\n  <br>\n  <br>\n  <br>\n  <br>\n  <br>\n  <br>\n  <br>\n  <br>\n  <br>\n  <div (click)="esqueci()"\n    style="position: relative; color: #a2a2a2; font-size: 1.1em; font-weight: bolder; text-align: center;">Esqueceu a\n    senha?</div>\n</ion-content>'/*ion-inline-end:"C:\xampp\htdocs\fpApp\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__providers_servidor_servidor__["a" /* ServidorProvider */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

},[259]);
//# sourceMappingURL=main.js.map