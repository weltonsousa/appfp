webpackJsonp([6],{

/***/ 416:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalheDaAulaCursoPrincipalPageModule", function() { return DetalheDaAulaCursoPrincipalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__detalhe_da_aula_curso_principal__ = __webpack_require__(431);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DetalheDaAulaCursoPrincipalPageModule = (function () {
    function DetalheDaAulaCursoPrincipalPageModule() {
    }
    DetalheDaAulaCursoPrincipalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__detalhe_da_aula_curso_principal__["a" /* DetalheDaAulaCursoPrincipalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__detalhe_da_aula_curso_principal__["a" /* DetalheDaAulaCursoPrincipalPage */]),
            ],
        })
    ], DetalheDaAulaCursoPrincipalPageModule);
    return DetalheDaAulaCursoPrincipalPageModule;
}());

//# sourceMappingURL=detalhe-da-aula-curso-principal.module.js.map

/***/ }),

/***/ 431:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetalheDaAulaCursoPrincipalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_screen_orientation__ = __webpack_require__(53);
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
 * Generated class for the DetalheDaAulaCursoPrincipalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DetalheDaAulaCursoPrincipalPage = (function () {
    function DetalheDaAulaCursoPrincipalPage(navCtrl, navParams, inAppBrowser, toastCtrl, screenOrientation) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.inAppBrowser = inAppBrowser;
        this.toastCtrl = toastCtrl;
        this.screenOrientation = screenOrientation;
        this.curso = this.navParams.data.curso;
        this.modulo = this.navParams.data.modulo;
        this.aula = this.navParams.data.aula;
    }
    DetalheDaAulaCursoPrincipalPage.prototype.lockLandscape = function () {
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
    DetalheDaAulaCursoPrincipalPage.prototype.lockPortrait = function () {
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
    DetalheDaAulaCursoPrincipalPage.prototype.habilitar = function () {
        var _this = this;
        if (this.codigo == this.aula.codigo_da_aula) {
            var options = {
                zoom: 'no',
                location: 'no',
                toolbar: 'no'
            };
            this.lockLandscape();
            var browser = this.inAppBrowser.create(this.aula.url_aula, '_self', options);
            browser.on('exit').subscribe(function () {
                _this.lockPortrait();
            }, function (err) {
                console.error(err);
            });
        }
        else {
            this.presentToast("Codigo inválido");
        }
    };
    DetalheDaAulaCursoPrincipalPage.prototype.presentToast = function (mensagem) {
        var toast = this.toastCtrl.create({
            message: mensagem,
            duration: 3000
        });
        toast.present();
    };
    DetalheDaAulaCursoPrincipalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-detalhe-da-aula-curso-principal',template:/*ion-inline-start:"C:\xampp\htdocs\fpApp\src\pages\detalhe-da-aula-curso-principal\detalhe-da-aula-curso-principal.html"*/'<!--\n  Generated template for the DetalheDaAulaCursoPrincipalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title></ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content style="background-color: #202020;">\n  <br />\n  <img src="assets/img/Logo_FP.png" style="position: relative; left: 89%; width:25px;">\n  <br /><br /><br /><br /><br /><br />\n  <div style="position: relative; text-align: center;font-size: 1.4em;color: white; font-weight: bolder; width: 100%;">\n    Código da Aula</div>\n  <ion-item class="ion-card ion-item">\n    <ion-input type="text" [(ngModel)]="codigo" placeholder="Código aula" class="ion_input" name="vehicle_cust_name">\n    </ion-input>\n    <ion-icon name="unlock" class="ion_icon" item-right small></ion-icon>\n  </ion-item>\n  <button padding ion-button round class="btn" color="verde" (click)="habilitar()">Habilitar</button>\n  <br /><br /><br /><br /><br />\n  <div style="position: relative; text-align: center;font-size: 1.2em;color: #318331; font-weight: bolder; width: 100%;">\n    Clique em download para obter o <br /> conteúdo da aula</div>\n  <br /><br />\n  <button *ngIf="aula.url_aula_material_download != \'\'" padding ion-button round class="btnDonwload" color="verde"><a\n      href="{{ aula.url_aula_material_download }}" style="color: white;">Download</a></button>\n</ion-content>'/*ion-inline-end:"C:\xampp\htdocs\fpApp\src\pages\detalhe-da-aula-curso-principal\detalhe-da-aula-curso-principal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_screen_orientation__["a" /* ScreenOrientation */]])
    ], DetalheDaAulaCursoPrincipalPage);
    return DetalheDaAulaCursoPrincipalPage;
}());

//# sourceMappingURL=detalhe-da-aula-curso-principal.js.map

/***/ })

});
//# sourceMappingURL=6.js.map