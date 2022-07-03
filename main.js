(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _product_item_product_item_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-item/product-item.component */ "./src/app/product-item/product-item.component.ts");
/* harmony import */ var _online_store_online_store_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./online-store/online-store.component */ "./src/app/online-store/online-store.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _my_cart_my_cart_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./my-cart/my-cart.component */ "./src/app/my-cart/my-cart.component.ts");






var routes = [
    {
        path: '', redirectTo: 'inicio',
        pathMatch: 'full'
    },
    {
        path: 'inicio', component: _online_store_online_store_component__WEBPACK_IMPORTED_MODULE_2__["OnlineStoreComponent"]
    },
    {
        path: 'product-item/:id', component: _product_item_product_item_component__WEBPACK_IMPORTED_MODULE_1__["ProductItemComponent"]
    },
    {
        path: 'carrito', component: _my_cart_my_cart_component__WEBPACK_IMPORTED_MODULE_5__["MyCartComponent"]
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'moxi-project';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html")
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var primeng_galleria__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/galleria */ "./node_modules/primeng/galleria.js");
/* harmony import */ var primeng_galleria__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(primeng_galleria__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _common_dialog_common_dialog_common_dialog_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./common/dialog/common-dialog/common-dialog.component */ "./src/app/common/dialog/common-dialog/common-dialog.component.ts");
/* harmony import */ var _online_store_online_store_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./online-store/online-store.component */ "./src/app/online-store/online-store.component.ts");
/* harmony import */ var _product_item_product_item_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./product-item/product-item.component */ "./src/app/product-item/product-item.component.ts");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _my_cart_my_cart_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./my-cart/my-cart.component */ "./src/app/my-cart/my-cart.component.ts");







// Angular Material Imports










// Prime NG Imports

// Components Imports



// Firebase




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _common_dialog_common_dialog_common_dialog_component__WEBPACK_IMPORTED_MODULE_18__["CommonDialogComponent"],
                _online_store_online_store_component__WEBPACK_IMPORTED_MODULE_19__["OnlineStoreComponent"],
                _product_item_product_item_component__WEBPACK_IMPORTED_MODULE_20__["ProductItemComponent"],
                _my_cart_my_cart_component__WEBPACK_IMPORTED_MODULE_24__["MyCartComponent"],
            ],
            exports: [
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"]
            ],
            imports: [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_12__["MatGridListModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MatDialogModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__["MatMenuModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_15__["MatToolbarModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_16__["MatSelectModule"],
                primeng_galleria__WEBPACK_IMPORTED_MODULE_17__["GalleriaModule"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_21__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_23__["environment"].firebase),
                _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_22__["AngularFirestoreModule"],
            ],
            entryComponents: [_common_dialog_common_dialog_common_dialog_component__WEBPACK_IMPORTED_MODULE_18__["CommonDialogComponent"]],
            providers: [
                { provide: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MAT_DIALOG_DEFAULT_OPTIONS"], useValue: { hasBackdrop: true } }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/common/Models/DialogDataModel.ts":
/*!**************************************************!*\
  !*** ./src/app/common/Models/DialogDataModel.ts ***!
  \**************************************************/
/*! exports provided: DialogDataModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogDataModel", function() { return DialogDataModel; });
var DialogDataModel = /** @class */ (function () {
    function DialogDataModel() {
    }
    return DialogDataModel;
}());



/***/ }),

/***/ "./src/app/common/Models/GeneralModels.ts":
/*!************************************************!*\
  !*** ./src/app/common/Models/GeneralModels.ts ***!
  \************************************************/
/*! exports provided: OnlineStoreProductModel, ProductItemModel, GeneralCartModel, ItemCartModel, ClientModel, RequestModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnlineStoreProductModel", function() { return OnlineStoreProductModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductItemModel", function() { return ProductItemModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralCartModel", function() { return GeneralCartModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemCartModel", function() { return ItemCartModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientModel", function() { return ClientModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestModel", function() { return RequestModel; });
var OnlineStoreProductModel = /** @class */ (function () {
    function OnlineStoreProductModel() {
    }
    return OnlineStoreProductModel;
}());

var ProductItemModel = /** @class */ (function () {
    function ProductItemModel() {
    }
    return ProductItemModel;
}());

var GeneralCartModel = /** @class */ (function () {
    function GeneralCartModel() {
    }
    return GeneralCartModel;
}());

var ItemCartModel = /** @class */ (function () {
    function ItemCartModel() {
    }
    return ItemCartModel;
}());

var ClientModel = /** @class */ (function () {
    function ClientModel() {
    }
    return ClientModel;
}());

var RequestModel = /** @class */ (function () {
    function RequestModel() {
    }
    return RequestModel;
}());



/***/ }),

/***/ "./src/app/common/constants/constants.ts":
/*!***********************************************!*\
  !*** ./src/app/common/constants/constants.ts ***!
  \***********************************************/
/*! exports provided: COMMON_CONSTANTS, TEXT_CONSTANTS, CART_CONSTANTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMMON_CONSTANTS", function() { return COMMON_CONSTANTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEXT_CONSTANTS", function() { return TEXT_CONSTANTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CART_CONSTANTS", function() { return CART_CONSTANTS; });
var COMMON_CONSTANTS = /** @class */ (function () {
    function COMMON_CONSTANTS() {
    }
    COMMON_CONSTANTS.STATUS_OK = 200;
    COMMON_CONSTANTS.CONTENT_TYPE = 'application/x-www-form-urlencoded';
    COMMON_CONSTANTS.PRODUCT_CATALOG_DATA = [
        {
            productImage: 'https://target.scene7.com/is/image/Target/2019_4Wk3_HHE_NaturalCleaning_CatNav_1_All-PurposeCleaners170634-190411_1555040147518?wid=328&hei=328&qlt=80&fmt=pjpeg',
            productTitle: 'The Product',
            productDescription: 'Lorem ipsum sit amet, et audem et omnia sunt',
            productPrice: '99.99'
        },
        {
            productImage: 'https://target.scene7.com/is/image/Target/2019_4Wk3_HHE_NaturalCleaning_CatNav_1_All-PurposeCleaners170634-190411_1555040147518?wid=328&hei=328&qlt=80&fmt=pjpeg',
            productTitle: 'The Product',
            productDescription: 'Lorem ipsum sit amet, et audem et omnia sunt',
            productPrice: '99.99'
        },
        {
            productImage: 'https://target.scene7.com/is/image/Target/2019_4Wk3_HHE_NaturalCleaning_CatNav_1_All-PurposeCleaners170634-190411_1555040147518?wid=328&hei=328&qlt=80&fmt=pjpeg',
            productTitle: 'The Product',
            productDescription: 'Lorem ipsum sit amet, et audem et omnia sunt',
            productPrice: '99.99'
        },
        {
            productImage: 'https://target.scene7.com/is/image/Target/2019_4Wk3_HHE_NaturalCleaning_CatNav_1_All-PurposeCleaners170634-190411_1555040147518?wid=328&hei=328&qlt=80&fmt=pjpeg',
            productTitle: 'The Product',
            productDescription: 'Lorem ipsum sit amet, et audem et omnia sunt',
            productPrice: '99.99'
        },
        {
            productImage: 'https://target.scene7.com/is/image/Target/2019_4Wk3_HHE_NaturalCleaning_CatNav_1_All-PurposeCleaners170634-190411_1555040147518?wid=328&hei=328&qlt=80&fmt=pjpeg',
            productTitle: 'The Product',
            productDescription: 'Lorem ipsum sit amet, et audem et omnia sunt',
            productPrice: '99.99'
        },
    ];
    return COMMON_CONSTANTS;
}());

var TEXT_CONSTANTS = /** @class */ (function () {
    function TEXT_CONSTANTS() {
    }
    TEXT_CONSTANTS.GENERAL_INFO_TITLE = "Información general del Cannabidiol";
    TEXT_CONSTANTS.GENERAL_INFO_MESSAGE = "<img style='width: 100%; padding: 0 10% 0;' src='https://i.imgur.com/16O3XLa.jpg' > </br></br> Seguro has escuchado hablar del CBD o cannabidiol. <br/><br/>Es uno de los compuestos medicinales más poderosos de la planta del cannabis, que cada día cobra más fama como agente terapéutico ante diferentes enfermedades y padecimientos. Y seguramente también te preguntas para qué sirve. ¿Por qué tanto alboroto por este cannabinoide? Te hablamos un poquito de sus propiedades terapéuticas y algunos productos que ya existen en el mundo, que lo contienen<br/><br/><strong>¿Qué es el CBD?</strong><br/>El cannabidiol es uno de los cannabinoides más importantes presentes en la planta de cannabis. Estos compuestos son los productos químicos que activan los receptores cannabinoides en el cerebro y en el cuerpo de todos los mamíferos.<br/>El cannabidol posee muchos efectos medicinales, con la ventaja de que no es psicoactivo, es decir, no te pone como sí lo hace el THC, otro de los más de cien cannabinoides de la planta. Incluso, el CDB ayuda a nivelar los efectos del THC en cepas con una presencia alta de este último, reduciendo los ataques de ansiedad, las palpitaciones y otros efectos adversos que puede llegar a causar.</br>En noviembre pasado, la Organización Mundial de la Salud (OMS) reconoció que el cannabidiol no es adictivo ni psicoactivo: «La OMS, órgano de las Naciones Unidas, determinó que el cannabidiol (CBD), molécula no psicoactiva de la planta Cannabis sativa, no es una sustancia peligrosa, por el contrario, cuenta con un alto potencial terapéutico.<br/><br/><strong>¿En qué ayuda el CBD?</strong><br/>Los estudios clínicos y científicos demuestran que tiene potencial terapéutico para muchas patologías, que incluyen:<br/><ul><li>Dolor crónico</li><li>Cáncer</li><li>Ansiedad</li><li>Diabetes</li><li>Epilepsia</li><li>Artritis y reumas</li><li>Trastorno de Estrés Post Traumático</li><li>Insomnio</li><li>Alcoholismo</li><li>Enfermedades cardio-vasculares</li><li>Infecciones resistentes a los antibióticos</li><li>Problemas neurológico</li><li>Insomnio</li></ul></br></br>Además, tiene propiedades antioxidantes y es rico en ácidos grasos omega 3 y 6. </br> Un producto elaborado con la planta completa de cannabis y no con CBD sintético sino natural, siempre será la mejor opción natural debido al efecto sinérgico de todos los componentes del cannabis, incluyendo los terpenos y los flavonoides, que actúan en efecto séquito.</br> Hay padecimientos, como el cáncer, para los cuales el THC es mucho más efectivo. Sin embargo, el CBD por sí mismo puede ser una gran ayuda en varios casos, y ya podemos encontrarlo en una gran diversidad de productos que lo contienen, solo o acompañado de THC y otros cannabinoides.";
    TEXT_CONSTANTS.CONTACT_TITLE = "Información de Contacto";
    TEXT_CONSTANTS.CONTACT_MESSAGE = "<ul><li><strong>Movistar: </strong> 0995320625</li><li><strong>Claro: </strong> 0992826825</li><li><strong>Correo: </strong> andrescardosoc@hotmail.com</li></ul>";
    TEXT_CONSTANTS.POLICY_TITLE = "Política de Envíos";
    TEXT_CONSTANTS.POLICY_MESSAGE = "Trabajamos por medio de LAARCOURIER y Servientrega con envíos a todas las provincias del Ecuador, incluido Galápagos, con deposito previo y 100% seguro.";
    TEXT_CONSTANTS.ABOUT_TITLE = "Sobre Nosotros";
    TEXT_CONSTANTS.ABOUT_MESSAGE = "Somos una tienda online dedicada a la venta de productos importados, de la mejor calidad,  para su salud y bienestar";
    TEXT_CONSTANTS.TRANSFER_TEXT = "<div class='textwidget'><p><strong>Contacto:</strong><br><br>Movistar: 0995320625 <br>Claro: 0992826825<br>Correo: andrescardosoc@hotmail.com</p><p><strong>Pedidos </strong><br>Recibimos pedidos las 24 horas del día.<br>Contáctanos y te enviaremos los productos inmedatamente. <br>Envios por Servientrega a todo el Ecuador.<br></p><p><strong>Cuentas Bancarias </strong><br>Banco del Pichincha: 2200728200 <br>Banco de Guayaquil: 23232957<br>Produbanco: 12071009626<br><strong>Nombre: Andres Cardoso C.</strong> </p></div>";
    return TEXT_CONSTANTS;
}());

var CART_CONSTANTS = /** @class */ (function () {
    function CART_CONSTANTS() {
    }
    CART_CONSTANTS.GENERAL_INFO_TITLE = "Información general del Cannabidiol";
    CART_CONSTANTS.PAYPHONE_BEAR = "mCcSY_famJdJ7ITebuxV6ubGU02liB8hLhB8y73n_qMqyLXWUNNrNq7W0jvBApuiWORNR3ZapZJ5n3rmWReozHXW4Rz2UgkQknZjgF15u0s6fLVjlQlreFZusL9xvd-5MoaVU20qIj-FkysnmR_j0Fa2TWcB_wYJGbH2Xk5GVQGGAeJJ-6GClnyy6Jh9VsjCvsVEtHkSfc0OhQNQFWNaAPrDYptlmM1PfFPLObmtJT4wxShOYed12yqUMZiI54gm7k1tpGrX7_ehaIMPc8SSFMeQ8qvO32OhGY0eVrvK3Urplv1a7NdiPgn0SztS6xgjjlxJbA";
    return CART_CONSTANTS;
}());



/***/ }),

/***/ "./src/app/common/dialog/common-dialog/common-dialog.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/common/dialog/common-dialog/common-dialog.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title [innerHtml]=\"data.title\"></h1>\n<div class=\"dialog\" mat-dialog-content>\n  <p [innerHtml]=\"data.message\"></p>\n</div>\n<div mat-dialog-actions align=\"end\">\n  <button mat-button (click)=\"onNoClick()\">Cerrar</button>\n</div>"

/***/ }),

/***/ "./src/app/common/dialog/common-dialog/common-dialog.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/common/dialog/common-dialog/common-dialog.component.ts ***!
  \************************************************************************/
/*! exports provided: CommonDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonDialogComponent", function() { return CommonDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _Models_DialogDataModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Models/DialogDataModel */ "./src/app/common/Models/DialogDataModel.ts");




var CommonDialogComponent = /** @class */ (function () {
    // Modal details
    function CommonDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    /**
     * This function closes the dialog when the click is outside the dialog
     *
     * @memberof CommonDialogComponent
     */
    CommonDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    CommonDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-common-dialog',
            template: __webpack_require__(/*! ./common-dialog.component.html */ "./src/app/common/dialog/common-dialog/common-dialog.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
            _Models_DialogDataModel__WEBPACK_IMPORTED_MODULE_3__["DialogDataModel"]])
    ], CommonDialogComponent);
    return CommonDialogComponent;
}());



/***/ }),

/***/ "./src/app/common/services/cart.service.ts":
/*!*************************************************!*\
  !*** ./src/app/common/services/cart.service.ts ***!
  \*************************************************/
/*! exports provided: CartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartService", function() { return CartService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Models_GeneralModels__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Models/GeneralModels */ "./src/app/common/Models/GeneralModels.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants/constants */ "./src/app/common/constants/constants.ts");





var CartService = /** @class */ (function () {
    function CartService(http) {
        this.http = http;
    }
    /**
     * This adds an object to the cart
     *
     * @param {*} object
     * @memberof CartService
     */
    CartService.prototype.addToCart = function (object) {
        var generalCart = new _Models_GeneralModels__WEBPACK_IMPORTED_MODULE_2__["GeneralCartModel"]();
        generalCart.products = [];
        if (localStorage.getItem('myCart')) {
            var otherProducts = void 0;
            otherProducts = JSON.parse(localStorage.getItem('myCart'));
            generalCart.products = otherProducts.products;
        }
        generalCart.products.push(object);
        localStorage.removeItem('myCart');
        localStorage.setItem('myCart', JSON.stringify(generalCart));
        var item = JSON.parse(localStorage.getItem('myCart'));
        console.log(item);
    };
    /**
     * This updates an item of the cart
     *
     * @param {*} object
     * @param {number} index
     * @memberof CartService
     */
    CartService.prototype.updateCart = function (object, index) {
        var item = JSON.parse(localStorage.getItem('myCart'));
        item.products[index].productQuantity = object.productQuantity;
        item.products[index].productPrice = object.productPrice;
        localStorage.removeItem('myCart');
        localStorage.setItem('myCart', JSON.stringify(item));
        var aux = JSON.parse(localStorage.getItem('myCart'));
        console.log(aux);
    };
    /**
     * This reads the item on the cart and decides what to do
     *
     * @param {*} object
     * @memberof CartService
     */
    CartService.prototype.readCartObject = function (object) {
        var _this = this;
        var duplicatedId = false;
        var item = JSON.parse(localStorage.getItem('myCart'));
        if (item) {
            item.products.forEach(function (element, index) {
                if (element.productId === object.productId) {
                    _this.updateCart(object, index);
                    duplicatedId = true;
                }
            });
        }
        if (!duplicatedId) {
            this.addToCart(object);
        }
    };
    /**
     * This calls the Payphone API for the payment
     *
     * @param {*} totalPrice
     * @param {*} clientPhoneNumber
     * @param {*} clientMail
     * @returns
     * @memberof CartService
     */
    CartService.prototype.payPhoneCall = function (totalPrice, clientPhoneNumber, clientMail) {
        var body = {
            "amount": totalPrice,
            "amountWithoutTax": totalPrice,
            "clientTransactionId": clientPhoneNumber + new Date().getTime(),
            "responseUrl": "https://cannabidiolecuador.com/inicio",
            "phoneNumber": clientPhoneNumber,
            "email": clientMail,
            "optionalParameter": "https://cannabidiolecuador.com/inicio",
            "documentId": "string"
        };
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + _constants_constants__WEBPACK_IMPORTED_MODULE_4__["CART_CONSTANTS"].PAYPHONE_BEAR
            })
        };
        return this.http.post('https://pay.payphonetodoesposible.com/api/button/Prepare', body, httpOptions);
    };
    CartService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], CartService);
    return CartService;
}());



/***/ }),

/***/ "./src/app/my-cart/my-cart.component.html":
/*!************************************************!*\
  !*** ./src/app/my-cart/my-cart.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"product_item_banner\">\n  <div class=\"product_item_banner_layer\">\n    <mat-toolbar class=\"toolbar_item\">\n      <mat-toolbar-row>\n        <div class=\"banner_content\" [routerLink]=\"['/inicio']\">\n          <img class=\"banner_logo\" src=\"https://i.imgur.com/sGB2JwW.png\" alt=\"\">\n          <span class=\"banner_text\">\n            <p>Cannabidiol Ecuador</p>\n          </span>\n        </div>\n        <span class=\"menu_spacer\"></span>\n        <button mat-button [routerLink]=\"['/carrito']\">\n          <i class=\"material-icons\">shopping_cart</i>\n        </button>\n      </mat-toolbar-row>\n    </mat-toolbar>\n  </div>\n</div>\n\n<div class=\"product_body\" *ngIf=\"!emptyCart\">\n  <div class=\"product_col1\">\n    <h1>Carrito de compras:</h1>\n  </div>\n  <div class=\"product_col2\">\n    <mat-card>\n      No tienes productos en tu carrito de compras:\n    </mat-card>\n  </div>\n</div>\n<div class=\"product_body\" *ngIf=\"emptyCart\">\n  <div class=\"product_col1\">\n    <h1>Carrito de compras:</h1>\n    <table class=\"table_cart\">\n      <tr>\n        <th></th>\n        <th>Producto</th>\n        <th>Cantidad</th>\n        <th>Precio</th>\n      </tr>\n      <tr *ngFor=\"let item of cartItems.products\">\n        <td class=\"image_col\">\n          <img [src]=\"item.productImage\" alt=\"\">\n        </td>\n        <td>{{item.productName}}</td>\n        <td>{{item.productQuantity}}</td>\n        <td>{{item.productPrice}}</td>\n      </tr>\n\n    </table>\n\n\n    <button style=\"margin-bottom: 5%;\" class=\"see_cart_button\" mat-raised-button [routerLink]=\"['/inicio']\"\n      (click)=\"removeCartItems()\">\n      Vaciar carrito\n      <i style=\"font-size: 15px;\" class=\"material-icons\">remove_shopping_cart</i>\n    </button> <br />\n\n  </div>\n\n\n  <div class=\"product_col2\">\n    <div [hidden]=\"numberSaved\">\n      <mat-card class=\"input_phone\">\n        <h3>Llena tus datos para realizar tu pago</h3>\n        <h5> Puedes escoger entre dos opciones de pago: \n          <br /><span class=\"transfer_text\">- Tarjeta de Crédito</span> \n          <br /><span class=\"transfer_text\">- Depósito/Transferencia</span>\n          <br /><br /> Asegurate de llenar los datos correctamente para realizar el envío de tus\n          productos, no dudes en contactarnos si tienes alguna duda.</h5>\n        <div>\n          <mat-form-field class=\"cart_client_data\">\n            <input matInput placeholder=\"Primer nombre*\" [(ngModel)]=\"client.clientFirstName\" name=\"clientName\">\n          </mat-form-field>\n          <mat-form-field class=\"cart_client_data\">\n            <input matInput placeholder=\"Segundo nombre\" [(ngModel)]=\"client.clientSecondName\" name=\"clientName\">\n          </mat-form-field>\n          <mat-form-field class=\"cart_client_data\">\n            <input matInput placeholder=\"Primer apellido*\" [(ngModel)]=\"client.clientFirstLastname\" name=\"clientLastname\">\n          </mat-form-field>\n          <mat-form-field class=\"cart_client_data\">\n            <input matInput placeholder=\"Segundo apellido\" [(ngModel)]=\"client.clientSecondLastname\" name=\"clientLastname\">\n          </mat-form-field>\n          <mat-form-field class=\"cart_client_data\">\n            <input matInput placeholder=\"Cédula*\" [(ngModel)]=\"client.clientId\" name=\"clientLastname\">\n          </mat-form-field>\n          <mat-form-field class=\"cart_client_data\">\n            <input matInput placeholder=\"Teléfono*\" [(ngModel)]=\"client.clientPhoneNumber\" name=\"clientPhoneNumber\">\n          </mat-form-field>\n          <mat-form-field class=\"cart_client_data\" pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\">\n            <input matInput placeholder=\"Correo electrónico*\" [(ngModel)]=\"client.clientMail\" name=\"clientMail\">\n          </mat-form-field>\n          <mat-form-field class=\"cart_client_data\">\n            <input matInput placeholder=\"Ciudad*\" [(ngModel)]=\"client.clientCity\" name=\"clientCity\">\n          </mat-form-field>\n          <mat-form-field class=\"cart_client_data\">\n            <input matInput placeholder=\"Calle principal* - número de casa\" [(ngModel)]=\"client.clientAddress1\" name=\"clientAddress1\">\n          </mat-form-field>\n          <mat-form-field class=\"cart_client_data\">\n            <input matInput placeholder=\"Calle secundaria*\" [(ngModel)]=\"client.clientAddress2\" name=\"clientAddress2\">\n          </mat-form-field>\n          <mat-form-field class=\"cart_client_data\">\n            <input matInput placeholder=\"Referencia\" [(ngModel)]=\"client.clientReference\" name=\"clientAddress2\">\n          </mat-form-field>\n        </div>\n        <div>\n          <button class=\"transfer_button\" style=\"width: 15rem;\" mat-raised-button (click)=\"payPhoneRedirect()\">\n            Tarjeta de Crédito / Payphone \n            <span class=\"material-icons\"> payment </span>\n          </button> <br />\n          <button class=\"see_cart_button\" style=\"width: 15rem;\" mat-raised-button (click)=\"openTransferModal()\">\n            Depósito / Transferencia\n            <span class=\"material-icons\">monetization_on</span>\n          </button> <br />\n        </div>\n      </mat-card>\n    </div>\n  </div>\n</div>\n<div class=\"footer\">\n  <div>\n    <a (click)=\"openDialog(2)\">\n      <h5>Contacto</h5>\n    </a>\n  </div>\n  <div>\n    <a (click)=\"openDialog(3)\">\n      <h5>Política de envíos</h5>\n    </a>\n  </div>\n  <div>\n    <a (click)=\"openDialog(4)\">\n      <h5>Sobre nosotros</h5>\n    </a>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/my-cart/my-cart.component.ts":
/*!**********************************************!*\
  !*** ./src/app/my-cart/my-cart.component.ts ***!
  \**********************************************/
/*! exports provided: MyCartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyCartComponent", function() { return MyCartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_constants_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/constants/constants */ "./src/app/common/constants/constants.ts");
/* harmony import */ var _common_dialog_common_dialog_common_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/dialog/common-dialog/common-dialog.component */ "./src/app/common/dialog/common-dialog/common-dialog.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _common_Models_GeneralModels__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/Models/GeneralModels */ "./src/app/common/Models/GeneralModels.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _common_services_cart_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/services/cart.service */ "./src/app/common/services/cart.service.ts");









var MyCartComponent = /** @class */ (function () {
    function MyCartComponent(http, cartService, dialog, router) {
        this.http = http;
        this.cartService = cartService;
        this.dialog = dialog;
        this.router = router;
        this.totalPrice = 0;
        this.description = '';
        this.numberSaved = false;
        this.emptyCart = true;
        // Paypal variables
        this.paidFor = false;
        this.product = {
            price: this.totalPrice,
            description: this.description
        };
        // Client variable
        this.client = new _common_Models_GeneralModels__WEBPACK_IMPORTED_MODULE_5__["ClientModel"]();
        this.emptyCart = (JSON.parse(localStorage.getItem('myCart')) == null) ? false : true;
        console.log(this.cartItems, this.emptyCart);
    }
    MyCartComponent.prototype.getPriceDescription = function () {
        var _this = this;
        if (this.emptyCart) {
            this.cartItems.products.forEach(function (element) {
                _this.totalPrice = _this.totalPrice + element.productPrice;
                _this.description = (_this.description === '') ?
                    _this.description + element.productName + '(x' + element.productQuantity + ')' :
                    _this.description + ', ' + element.productName + '(x' + element.productQuantity + ')';
            });
            console.log(this.totalPrice, this.description);
        }
    };
    MyCartComponent.prototype.ngOnInit = function () {
        this.cartItems = (JSON.parse(localStorage.getItem('myCart')) == null) ? [''] : (JSON.parse(localStorage.getItem('myCart')));
        this.getPriceDescription();
    };
    MyCartComponent.prototype.initPaypal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, paypal
                            .Buttons({
                            createOrder: function (data, actions) {
                                return actions.order.create({
                                    purchase_units: [
                                        {
                                            description: _this.description,
                                            amount: {
                                                currency_code: 'USD',
                                                value: _this.totalPrice
                                            }
                                        }
                                    ]
                                });
                            },
                            onApprove: function (data, actions) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                var order;
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, actions.order.capture()];
                                        case 1:
                                            order = _a.sent();
                                            this.paidFor = true;
                                            this.removeCartItems();
                                            this.router.navigateByUrl('/inicio');
                                            console.log(order);
                                            return [2 /*return*/];
                                    }
                                });
                            }); },
                            onError: function (err) {
                                console.log(err);
                            }
                        })
                            .render(this.paypal.nativeElement)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MyCartComponent.prototype.openDialog = function (action) {
        var title;
        var message;
        switch (action) {
            case 1:
                title = _common_constants_constants__WEBPACK_IMPORTED_MODULE_2__["TEXT_CONSTANTS"].GENERAL_INFO_TITLE;
                message = _common_constants_constants__WEBPACK_IMPORTED_MODULE_2__["TEXT_CONSTANTS"].GENERAL_INFO_MESSAGE;
                break;
            case 2:
                title = _common_constants_constants__WEBPACK_IMPORTED_MODULE_2__["TEXT_CONSTANTS"].CONTACT_TITLE;
                message = _common_constants_constants__WEBPACK_IMPORTED_MODULE_2__["TEXT_CONSTANTS"].CONTACT_MESSAGE;
                break;
            case 3:
                title = _common_constants_constants__WEBPACK_IMPORTED_MODULE_2__["TEXT_CONSTANTS"].POLICY_TITLE;
                message = _common_constants_constants__WEBPACK_IMPORTED_MODULE_2__["TEXT_CONSTANTS"].POLICY_MESSAGE;
                break;
            case 4:
                title = _common_constants_constants__WEBPACK_IMPORTED_MODULE_2__["TEXT_CONSTANTS"].ABOUT_TITLE;
                message = _common_constants_constants__WEBPACK_IMPORTED_MODULE_2__["TEXT_CONSTANTS"].ABOUT_MESSAGE;
                break;
        }
        var dialogRef = this.dialog.open(_common_dialog_common_dialog_common_dialog_component__WEBPACK_IMPORTED_MODULE_3__["CommonDialogComponent"], {
            width: '550px',
            data: {
                title: title,
                message: message
            }
        });
        dialogRef.afterClosed();
    };
    MyCartComponent.prototype.removeCartItems = function () {
        localStorage.removeItem('myCart');
    };
    MyCartComponent.prototype.openTransferModal = function () {
        var dialogRef = this.dialog.open(_common_dialog_common_dialog_common_dialog_component__WEBPACK_IMPORTED_MODULE_3__["CommonDialogComponent"], {
            width: '550px',
            data: {
                title: 'Depósito o Transferencia',
                message: _common_constants_constants__WEBPACK_IMPORTED_MODULE_2__["TEXT_CONSTANTS"].TRANSFER_TEXT
            }
        });
        dialogRef.afterClosed();
    };
    MyCartComponent.prototype.validateEmptyClientData = function () {
        if (this.client.clientFirstName &&
            this.client.clientFirstLastname &&
            this.client.clientPhoneNumber &&
            this.client.clientId &&
            this.client.clientMail &&
            this.client.clientCity &&
            this.client.clientAddress1 &&
            this.client.clientAddress2) {
            return true;
        }
        else {
            return false;
        }
    };
    MyCartComponent.prototype.validateClientMail = function () {
        var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (this.client.clientMail.match(pattern)) {
            return true;
        }
        else {
            return false;
        }
    };
    MyCartComponent.prototype.payPhoneRedirect = function () {
        if (this.validateEmptyClientData()) {
            if (this.validateClientMail()) {
                this.cartService
                    .payPhoneCall((this.totalPrice * 100), this.client.clientPhoneNumber, this.client.clientMail)
                    .subscribe(function (response) {
                    console.log(response.payWithPayPhone);
                    window.location.href = response.payWithPayPhone;
                });
            }
            else {
                var dialogRef = this.dialog.open(_common_dialog_common_dialog_common_dialog_component__WEBPACK_IMPORTED_MODULE_3__["CommonDialogComponent"], {
                    width: '550px',
                    data: {
                        title: 'Error!',
                        message: 'Ingresa un correo válido'
                    }
                });
                dialogRef.afterClosed();
            }
        }
        else {
            var dialogRef = this.dialog.open(_common_dialog_common_dialog_common_dialog_component__WEBPACK_IMPORTED_MODULE_3__["CommonDialogComponent"], {
                width: '550px',
                data: {
                    title: 'Error!',
                    message: 'Todos los datos con * deben estar llenos para realizar tu pago por tarjeta de crédito'
                }
            });
            dialogRef.afterClosed();
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('paypal'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], MyCartComponent.prototype, "paypal", void 0);
    MyCartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-my-cart',
            template: __webpack_require__(/*! ./my-cart.component.html */ "./src/app/my-cart/my-cart.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"],
            _common_services_cart_service__WEBPACK_IMPORTED_MODULE_8__["CartService"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], MyCartComponent);
    return MyCartComponent;
}());

//https://social.msdn.microsoft.com/Forums/lync/es-ES/fe88048d-f803-481b-87b1-f1b2e43ec40f/consumo-de-servicios-web-sri-ecuador-para-facturacin-electrnica?forum=vcses


/***/ }),

/***/ "./src/app/online-store/online-store.component.html":
/*!**********************************************************!*\
  !*** ./src/app/online-store/online-store.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"online_store_container\">\n  <div class=\"online_store_banner\">\n    <div class=\"online_store_banner_layer\">\n      <mat-toolbar>\n        <mat-toolbar-row>\n          <div class=\"banner_content\" [routerLink]=\"['/inicio']\" >\n            <img class=\"banner_logo\" src=\"https://i.imgur.com/sGB2JwW.png\" alt=\"\">\n            <span class=\"banner_text\"><p>Cannabidiol Ecuador</p></span>\n          </div>\n          <div class=\"banner_add\">\n            <img class=\"banner_add_image\" src=\"https://i.imgur.com/TpGagnd.png\" alt=\"\">\n            <button class=\"info_button\" mat-raised-button (click)=\"openDialog(1)\">Más Información</button> <br />\n          </div>\n          <span class=\"menu_spacer\"></span>\n          <button mat-button [routerLink]=\"['/carrito']\">\n            <i class=\"material-icons\" >shopping_cart</i>\n          </button>\n        </mat-toolbar-row>\n      </mat-toolbar>\n    </div>\n  </div>\n  <div class=\"products_title\">\n    <h2>Nuestros Productos</h2>\n  </div>\n  <div class=\"products_grid\">\n    <mat-grid-list [cols]=\"gridColums\" rowHeight=\"13rem\">\n      <mat-grid-tile class=\"single_product\" *ngFor=\"let product of productsCatalogData\">\n        <div class=\"product_container\" (click)=\"router.navigateByUrl('product-item/' + product.productId);\">\n          <img [src]=\"product.productImage\" alt=\"\">\n          <h3>{{product.productTitle}}</h3>\n          <h6>${{product.productPrice}}</h6>\n        </div>\n      </mat-grid-tile>\n    </mat-grid-list>\n  </div>\n</div>\n  <div class=\"footer\">\n    <div>\n      <a (click)=\"openDialog(2)\">\n        <h5>Contacto</h5>\n      </a>\n    </div>\n    <div>\n      <a (click)=\"openDialog(3)\">\n        <h5>Política de envíos</h5>\n      </a>\n    </div>\n    <div>\n      <a (click)=\"openDialog(4)\">\n        <h5>Sobre nosotros</h5>\n      </a>\n    </div>\n  </div>\n\n\n\n\n"

/***/ }),

/***/ "./src/app/online-store/online-store.component.ts":
/*!********************************************************!*\
  !*** ./src/app/online-store/online-store.component.ts ***!
  \********************************************************/
/*! exports provided: OnlineStoreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnlineStoreComponent", function() { return OnlineStoreComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _common_constants_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../common/constants/constants */ "./src/app/common/constants/constants.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _common_Models_GeneralModels__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/Models/GeneralModels */ "./src/app/common/Models/GeneralModels.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _common_dialog_common_dialog_common_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/dialog/common-dialog/common-dialog.component */ "./src/app/common/dialog/common-dialog/common-dialog.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");










var OnlineStoreComponent = /** @class */ (function () {
    function OnlineStoreComponent(db, router, dialog, meta) {
        this.db = db;
        this.router = router;
        this.dialog = dialog;
        this.meta = meta;
        // Responsive Variables
        this.gridColums = 4;
        // Firabase variables
        this.itemValue = '';
        this.items = db.collection('productos').valueChanges();
    }
    OnlineStoreComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getScreenSize();
        //this.tempCreate()
        this.items.subscribe(function (data) {
            _this.productsCatalogData = [];
            data.forEach(function (element) {
                var mapData = new _common_Models_GeneralModels__WEBPACK_IMPORTED_MODULE_5__["OnlineStoreProductModel"]();
                mapData.productId = element.id;
                mapData.productDescription = element.decription;
                mapData.productImage = element.images[0];
                mapData.productPrice = element.precio;
                mapData.productTitle = element.nombre;
                mapData.productOrder = element.order;
                _this.productsCatalogData.push(mapData);
                _this.productsCatalogData = _this.productsCatalogData.sort(function (a, b) { return (a.productOrder > b.productOrder) ? 1 : -1; });
            });
            console.log(data);
        });
    };
    OnlineStoreComponent.prototype.tempCreate = function () {
        var itemRef = this.db.collection('productos');
        itemRef.add({
            description: 'Nuestro bálsamo de CBD Relief + Recovery es una mezcla vigorizante de extracto de cáñamo de espectro completo e ingredientes funcionales como capsaicina y mentol, elaborado para aliviar dolores y molestias con su sensación refrescante/caliente. Nuestras fórmulas de bálsamo nuevas y mejoradas brindan un alivio sostenido del dolor muscular y la inflamación localizados, al mismo tiempo que nutren la piel y brindan apoyo a su cuerpo y mente. Este tópico profundamente refrescante combina bien con estilos de vida activos y recuperación sobre la marcha.<br/><br/>Ingredientes: Cera Alba orgánica (cera de abeja), aceite de semilla de Simmondsia Chinensis (jojoba) orgánico, aceite de semilla de Helianthus Annuus (girasol) orgánico, mantequilla de semilla de Mangifera Indica (mango) orgánica, lanolina, extracto de cáñamo de espectro completo, mentol, aceite de corteza de Cinnamomum Camphora, Aceite de Ocimum basilicum (albahaca dulce), aceite de hoja natural de Gaultheria procumbens (gaulteria), miristato de isopropilo, extracto de Capsicum annuum. Fabricado en una instalación que procesa frutos secos.',
            howToUse: 'Consulte a su médico antes de usar si le han desaconsejado comer toronja. No lo use si el sello de seguridad está roto. Sólo para uso externo<br/><br/>Aplicar según sea necesario en las áreas objetivo para un alivio duradero. Nuestros bálsamos son probados por terceros para potencia, pesticidas y metales pesados. Nuestro proceso de prueba garantiza que ofrecemos un producto que es natural, seguro y consistente. Todos los resultados de las pruebas están disponibles en la pestaña Resultados de la prueba.',
            images: ['https://i.imgur.com/WNl3tHj.jpg', 'https://i.imgur.com/FgWRwIj.jpg', 'https://i.imgur.com/rDvGiu4.jpg'],
            nombre: 'CBD Balm - Relief + Recovery',
            precio: '9.99',
        });
    };
    // This gets the event of the window resize
    OnlineStoreComponent.prototype.getScreenSize = function () {
        if (window.innerWidth > 600) {
            this.gridColums = 3;
        }
        if (window.innerWidth < 600) {
            this.gridColums = 3;
        }
        if (window.innerWidth < 435) {
            this.gridColums = 2;
        }
    };
    // This gets the event of the window scroll
    OnlineStoreComponent.prototype.onScroll = function () {
        this.opacityController = (100 - window.scrollY) + '%';
    };
    OnlineStoreComponent.prototype.openDialog = function (action) {
        var title;
        var message;
        switch (action) {
            case 1:
                title = _common_constants_constants__WEBPACK_IMPORTED_MODULE_2__["TEXT_CONSTANTS"].GENERAL_INFO_TITLE;
                message = _common_constants_constants__WEBPACK_IMPORTED_MODULE_2__["TEXT_CONSTANTS"].GENERAL_INFO_MESSAGE;
                break;
            case 2:
                title = _common_constants_constants__WEBPACK_IMPORTED_MODULE_2__["TEXT_CONSTANTS"].CONTACT_TITLE;
                message = _common_constants_constants__WEBPACK_IMPORTED_MODULE_2__["TEXT_CONSTANTS"].CONTACT_MESSAGE;
                break;
            case 3:
                title = _common_constants_constants__WEBPACK_IMPORTED_MODULE_2__["TEXT_CONSTANTS"].POLICY_TITLE;
                message = _common_constants_constants__WEBPACK_IMPORTED_MODULE_2__["TEXT_CONSTANTS"].POLICY_MESSAGE;
                break;
            case 4:
                title = _common_constants_constants__WEBPACK_IMPORTED_MODULE_2__["TEXT_CONSTANTS"].ABOUT_TITLE;
                message = _common_constants_constants__WEBPACK_IMPORTED_MODULE_2__["TEXT_CONSTANTS"].ABOUT_MESSAGE;
                break;
        }
        var dialogRef = this.dialog.open(_common_dialog_common_dialog_common_dialog_component__WEBPACK_IMPORTED_MODULE_7__["CommonDialogComponent"], {
            width: '550px',
            data: {
                title: title,
                message: message
            }
        });
        dialogRef.afterClosed();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"])('window:resize', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], OnlineStoreComponent.prototype, "getScreenSize", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"])('window:scroll', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], OnlineStoreComponent.prototype, "onScroll", null);
    OnlineStoreComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-online-store',
            template: __webpack_require__(/*! ./online-store.component.html */ "./src/app/online-store/online-store.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["Meta"]])
    ], OnlineStoreComponent);
    return OnlineStoreComponent;
}());

// COMMANDS FOR DEPLOY:
// ng build --base-href https://dpazmino94.github.io/moxi-project/
// ngh
//https://i.imgur.com/eJPUP44.jpg


/***/ }),

/***/ "./src/app/product-item/product-item.component.html":
/*!**********************************************************!*\
  !*** ./src/app/product-item/product-item.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"product_item_banner\">\n  <div class=\"product_item_banner_layer\">\n    <mat-toolbar class=\"toolbar_item\">\n      <mat-toolbar-row>\n        <div class=\"banner_content\" [routerLink]=\"['/inicio']\">\n          <img class=\"banner_logo\" src=\"https://i.imgur.com/sGB2JwW.png\" alt=\"\">\n          <span class=\"banner_text\">\n            <p>Cannabidiol Ecuador</p>\n          </span>\n        </div>\n        <span class=\"menu_spacer\"></span>\n        <button mat-button [routerLink]=\"['/carrito']\">\n          <i class=\"material-icons\">shopping_cart</i>\n        </button>\n      </mat-toolbar-row>\n    </mat-toolbar>\n  </div>\n</div>\n\n<div class=\"product_body\">\n  <div class=\"product_col1\">\n    <p-galleria [images]=\"images\" panelWidth=\"100%\" panelHeight=\"313\" autoPlay=\"false\" [showCaption]=\"false\">\n    </p-galleria>\n    <div class=\"product_uses_desktop\">\n      <h1>\n        Sobre su uso\n      </h1>\n      <p [innerHtml]=\"productData.howToUse\"></p>\n    </div>\n  </div>\n  <div class=\"product_col2\">\n    <h1>\n      {{productData.nombre}}\n    </h1>\n    <p [innerHtml]=\"productData.description\"></p>\n    <div class=\"product_values\">\n      <mat-form-field>\n        <mat-label>Cantidad</mat-label>\n        <mat-select #fontSize value=\"16px\" color=\"dark\" [(ngModel)]=\"selectedQuantity\"\n          (selectionChange)=\"onQuantityChange()\">\n          <mat-option value=\"1\">1</mat-option>\n          <mat-option value=\"2\">2</mat-option>\n          <mat-option value=\"3\">3</mat-option>\n          <mat-option value=\"4\">4</mat-option>\n          <mat-option value=\"5\">5</mat-option>\n        </mat-select>\n      </mat-form-field>\n      <h2>\n        ${{publicPrice}}\n      </h2>\n      <button class=\"buy_button\" mat-raised-button (click)=\"addToCart()\"> Añadir al carrito</button> <br />\n      <button class=\"see_cart_button\" mat-raised-button [routerLink]=\"['/carrito']\">\n        Ver Carrito\n        <i style=\"font-size: 15px;\" class=\"material-icons\">shopping_cart</i>\n      </button> <br />\n      <button class=\"onlyText_button\" mat-button (click)=\"openDialog(3)\"> Política de envío</button>\n    </div>\n    <div class=\"product_uses_mobile\">\n      <h1>\n        Sobre su uso\n      </h1>\n      <p [innerHtml]=\"productData.howToUse\"></p>\n    </div>\n  </div>\n</div>\n<div class=\"footer\">\n  <div>\n    <a (click)=\"openDialog(2)\">\n      <h5>Contacto</h5>\n    </a>\n  </div>\n  <div>\n    <a (click)=\"openDialog(3)\">\n      <h5>Política de envíos</h5>\n    </a>\n  </div>\n  <div>\n    <a (click)=\"openDialog(4)\">\n      <h5>Sobre nosotros</h5>\n    </a>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/product-item/product-item.component.ts":
/*!********************************************************!*\
  !*** ./src/app/product-item/product-item.component.ts ***!
  \********************************************************/
/*! exports provided: ProductItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductItemComponent", function() { return ProductItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _common_Models_GeneralModels__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/Models/GeneralModels */ "./src/app/common/Models/GeneralModels.ts");
/* harmony import */ var _common_constants_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/constants/constants */ "./src/app/common/constants/constants.ts");
/* harmony import */ var _common_dialog_common_dialog_common_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/dialog/common-dialog/common-dialog.component */ "./src/app/common/dialog/common-dialog/common-dialog.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _common_services_cart_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/services/cart.service */ "./src/app/common/services/cart.service.ts");









var ProductItemComponent = /** @class */ (function () {
    function ProductItemComponent(route, db, dialog, cartService) {
        var _this = this;
        this.route = route;
        this.db = db;
        this.dialog = dialog;
        this.cartService = cartService;
        // Product data variables
        this.productData = new _common_Models_GeneralModels__WEBPACK_IMPORTED_MODULE_4__["ProductItemModel"]();
        // This gets the firestore id param from the URL
        this.route.params.subscribe(function (params) {
            _this.productId = params['id'];
            // Firestore query
            var docRef = db.collection("productos").doc(_this.productId).valueChanges();
            // This gets the data from the variable
            docRef.subscribe(function (data) {
                // This parts gets the images from firestore and fills the galleria
                _this.images = [];
                data.images.forEach(function (element, index) {
                    _this.images.push({ source: element, alt: 'Description for Image' + index, title: 'Title ' + index });
                });
                // This part gets all the info for the product
                _this.productData.precio = data.precio;
                _this.publicPrice = Number(_this.productData.precio);
                _this.productData.nombre = data.nombre;
                _this.productData.description = data.description;
                _this.productData.howToUse = data.howToUse;
            });
        });
    }
    ProductItemComponent.prototype.openDialog = function (action) {
        var title;
        var message;
        switch (action) {
            case 2:
                title = _common_constants_constants__WEBPACK_IMPORTED_MODULE_5__["TEXT_CONSTANTS"].CONTACT_TITLE;
                message = _common_constants_constants__WEBPACK_IMPORTED_MODULE_5__["TEXT_CONSTANTS"].CONTACT_MESSAGE;
                break;
            case 3:
                title = _common_constants_constants__WEBPACK_IMPORTED_MODULE_5__["TEXT_CONSTANTS"].POLICY_TITLE;
                message = _common_constants_constants__WEBPACK_IMPORTED_MODULE_5__["TEXT_CONSTANTS"].POLICY_MESSAGE;
                break;
            case 4:
                title = _common_constants_constants__WEBPACK_IMPORTED_MODULE_5__["TEXT_CONSTANTS"].ABOUT_TITLE;
                message = _common_constants_constants__WEBPACK_IMPORTED_MODULE_5__["TEXT_CONSTANTS"].ABOUT_MESSAGE;
                break;
        }
        var dialogRef = this.dialog.open(_common_dialog_common_dialog_common_dialog_component__WEBPACK_IMPORTED_MODULE_6__["CommonDialogComponent"], {
            width: '550px',
            data: {
                title: title,
                message: message
            }
        });
        dialogRef.afterClosed();
    };
    ProductItemComponent.prototype.onQuantityChange = function () {
        this.publicPrice = Number(this.productData.precio) * Number(this.selectedQuantity);
    };
    ProductItemComponent.prototype.addToCart = function () {
        var cartItem = new _common_Models_GeneralModels__WEBPACK_IMPORTED_MODULE_4__["ItemCartModel"]();
        cartItem.productId = this.productId;
        cartItem.productName = this.productData.nombre;
        cartItem.productImage = this.images[0].source;
        cartItem.productPrice = (this.publicPrice) ? this.publicPrice : Number(this.productData.precio);
        cartItem.productQuantity = ((this.selectedQuantity)) ? Number(this.selectedQuantity) : 1;
        this.cartService.readCartObject(cartItem);
        this.dialog.open(_common_dialog_common_dialog_common_dialog_component__WEBPACK_IMPORTED_MODULE_6__["CommonDialogComponent"], {
            width: '550px',
            data: {
                title: 'Producto añadido al carrito exitosamente',
                message: ''
            }
        });
    };
    ProductItemComponent.prototype.ngOnInit = function () { };
    ProductItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-product-item',
            template: __webpack_require__(/*! ./product-item.component.html */ "./src/app/product-item/product-item.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"],
            _common_services_cart_service__WEBPACK_IMPORTED_MODULE_8__["CartService"]])
    ], ProductItemComponent);
    return ProductItemComponent;
}());

/*
Hemp Oil 3000mg: https://i.imgur.com/guYrpcw.jpg

Hemp Oil 5000mg:
https://i.imgur.com/6LHdo9j.jpg
https://i.imgur.com/Cxlvluk.jpg
https://i.imgur.com/jE3XlEe.jpg
https://i.imgur.com/u4Uljmr.jpg
https://i.imgur.com/dVN53BP.jpg
https://i.imgur.com/cn0VYwV.jpg
https://i.imgur.com/Pe8AgvW.jpg
https://i.imgur.com/nPflCFp.jpg
https://i.imgur.com/ifYQYwJ.jpg

Hemp CBD Oil 6000mg:
https://i.imgur.com/hGdN5ed.jpg
https://i.imgur.com/02os1t6.jpg
https://i.imgur.com/9ceh4To.jpg
https://i.imgur.com/eCQvgul.jpg
https://i.imgur.com/Ounn3cE.jpg
https://i.imgur.com/ilEMV0J.jpg

Hemp Oil Pets: https://i.imgur.com/ywtNwtz.jpg

Hemp Cream:
https://i.imgur.com/Ckjjg9Q.jpg
https://i.imgur.com/qcqphBu.jpg
https://i.imgur.com/E7xoN9d.jpg
https://i.imgur.com/MsY0n79.jpg
https://i.imgur.com/dAH0PKb.jpg
https://i.imgur.com/2pIVZ78.jpg
https://i.imgur.com/iIFIfu8.jpg

Testosterone Booster:
https://i.imgur.com/38Yaapq.jpg
https://i.imgur.com/8n1uxgs.jpg
https://i.imgur.com/ePthLPR.jpg
https://i.imgur.com/gbdO1u2.jpg
https://i.imgur.com/68GBGrX.jpg

Keto 3000mg: https://i.imgur.com/8h9OnWQ.jpg
Keto 1250mg: https://i.imgur.com/s6mBng2.jpg
Keto 800mg: https://i.imgur.com/RZnw0A0.jpg

All Hemp Products: https://i.imgur.com/16O3XLa.jpg
*/


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyBn9eJ2WMQb_UKyBySiQ-2SJnIakhfLWok",
        authDomain: "online-store-9cab1.firebaseapp.com",
        databaseURL: "https://online-store-9cab1.firebaseio.com",
        projectId: "online-store-9cab1",
        storageBucket: "online-store-9cab1.appspot.com",
        messagingSenderId: "384497441582",
        appId: "1:384497441582:web:a6cc2f5f9c1dabc4a6f8bf",
        measurementId: "G-EJMRTNG7Y8"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/davidpazmino/Documents/Projects/moxi-project/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map