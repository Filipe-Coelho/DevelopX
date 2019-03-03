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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng2-slim-loading-bar color=\"blue\"></ng2-slim-loading-bar>\n<nav class=\"navbar navbar-expand-sm bg-light\">\n  <div class=\"container-fluid\">\n    <ul class=\"navbar-nav\">\n        <li class=\"nav-item\">\n            <a routerLink=\"create\" class=\"nav-link\" routerLinkActive=\"active\">\n              Create Client\n            </a>\n          </li>\n      <li class=\"nav-item\">\n        <a routerLink=\"withdraw\" class=\"nav-link\" routerLinkActive=\"active\">\n          Withdraw Money\n        </a>\n      </li>\n      <li class=\"nav-item\">\n        <a routerLink=\"index\" class=\"nav-link\" routerLinkActive=\"active\">\n          List of Withdraws\n        </a>\n      </li> \n      <li class=\"nav-item\">\n        <a routerLink=\"clients\" class=\"nav-link\" routerLinkActive=\"active\">\n          List of Clients\n        </a>\n      </li> \n    </ul>\n  </div>\n</nav>\n\n<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-slim-loading-bar */ "./node_modules/ng2-slim-loading-bar/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(_loadingBar, _router) {
        var _this = this;
        this._loadingBar = _loadingBar;
        this._router = _router;
        this.title = 'Bank App';
        this._router.events.subscribe(function (event) {
            _this.navigationInterceptor(event);
        });
    }
    AppComponent.prototype.navigationInterceptor = function (event) {
        if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
            this._loadingBar.start();
        }
        if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
            this._loadingBar.complete();
        }
        if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationCancel"]) {
            this._loadingBar.stop();
        }
        if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationError"]) {
            this._loadingBar.stop();
        }
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_1__["SlimLoadingBarService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng2_order_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-order-pipe */ "./node_modules/ng2-order-pipe/dist/index.js");
/* harmony import */ var ng2_order_pipe__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng2_order_pipe__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/dist/index.js");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ng2_search_filter__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-slim-loading-bar */ "./node_modules/ng2-slim-loading-bar/index.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _bank_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./bank.service */ "./src/app/bank.service.ts");
/* harmony import */ var _components_create_create_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/create/create.component */ "./src/app/components/create/create.component.ts");
/* harmony import */ var _components_edit_edit_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/edit/edit.component */ "./src/app/components/edit/edit.component.ts");
/* harmony import */ var _components_index_index_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/index/index.component */ "./src/app/components/index/index.component.ts");
/* harmony import */ var _components_withdraw_withdraw_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/withdraw/withdraw.component */ "./src/app/components/withdraw/withdraw.component.ts");
/* harmony import */ var _components_client_client_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/client/client.component */ "./src/app/components/client/client.component.ts");
/* harmony import */ var _components_app_pipe_filter__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/app.pipe.filter */ "./src/app/components/app.pipe.filter.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var routes = [
    {
        path: '',
        component: _components_withdraw_withdraw_component__WEBPACK_IMPORTED_MODULE_14__["WithdrawComponent"]
    },
    {
        path: 'create',
        component: _components_create_create_component__WEBPACK_IMPORTED_MODULE_11__["CreateComponent"]
    },
    {
        path: 'withdraw',
        component: _components_withdraw_withdraw_component__WEBPACK_IMPORTED_MODULE_14__["WithdrawComponent"]
    },
    {
        path: 'edit',
        component: _components_edit_edit_component__WEBPACK_IMPORTED_MODULE_12__["EditComponent"],
        data: { history: history }
    },
    {
        path: 'index',
        component: _components_index_index_component__WEBPACK_IMPORTED_MODULE_13__["IndexComponent"]
    },
    {
        path: 'clients',
        component: _components_client_client_component__WEBPACK_IMPORTED_MODULE_15__["ClientComponent"]
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                _components_create_create_component__WEBPACK_IMPORTED_MODULE_11__["CreateComponent"],
                _components_withdraw_withdraw_component__WEBPACK_IMPORTED_MODULE_14__["WithdrawComponent"],
                _components_index_index_component__WEBPACK_IMPORTED_MODULE_13__["IndexComponent"],
                _components_edit_edit_component__WEBPACK_IMPORTED_MODULE_12__["EditComponent"],
                _components_client_client_component__WEBPACK_IMPORTED_MODULE_15__["ClientComponent"],
                _components_app_pipe_filter__WEBPACK_IMPORTED_MODULE_16__["FilterPipeSearch"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes),
                ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_7__["SlimLoadingBarModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                ng2_search_filter__WEBPACK_IMPORTED_MODULE_6__["Ng2SearchPipeModule"],
                ng2_order_pipe__WEBPACK_IMPORTED_MODULE_5__["Ng2OrderModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_8__["NgxPaginationModule"]
            ],
            providers: [_bank_service__WEBPACK_IMPORTED_MODULE_10__["BankService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/bank.service.ts":
/*!*********************************!*\
  !*** ./src/app/bank.service.ts ***!
  \*********************************/
/*! exports provided: BankService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BankService", function() { return BankService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BankService = /** @class */ (function () {
    function BankService(http) {
        this.http = http;
        this.uri = 'http://localhost:8080';
    }
    BankService.prototype.withdraw = function (amount, clientId) {
        return this.http
            .get(this.uri + "/withdraw/" + amount + "/" + clientId);
        // .map(response => response.toString())
    };
    BankService.prototype.updateClient = function (id, name, identifier) {
        var params = {
            id: id,
            identifier: identifier,
            name: name
        };
        return this.http
            .post(this.uri + "/updateClient", params);
    };
    BankService.prototype.getHistory = function () {
        return this.http
            .get(this.uri + "/history/");
    };
    BankService.prototype.deleteHistory = function (id) {
        return this.http
            .get(this.uri + "/deleteHistory/" + id);
    };
    BankService.prototype.deleteClient = function (id) {
        return this.http
            .get(this.uri + "/deleteClient/" + id);
    };
    BankService.prototype.getListClients = function () {
        return this.http
            .get(this.uri + "/clients/");
    };
    BankService.prototype.createClient = function (identification, name) {
        var params = {
            identifier: identification,
            name: name
        };
        return this.http.post(this.uri + "/createClient", params);
    };
    BankService.prototype.addAdUnit = function (unit_name, unit_price) {
        var obj = {
            unit_name: unit_name,
            unit_price: unit_price
        };
        this.http.post(this.uri + "/add", obj)
            .subscribe(function (res) { return console.log('Done'); });
    };
    BankService.prototype.getAdUnits = function () {
        return this
            .http
            .get("" + this.uri);
    };
    BankService.prototype.editAdUnit = function (id) {
        return this
            .http
            .get(this.uri + "/edit/" + id);
    };
    BankService.prototype.updateAdUnit = function (unit_name, unit_price, id) {
        var obj = {
            unit_name: unit_name,
            unit_price: unit_price
        };
        this
            .http
            .post(this.uri + "/update/" + id, obj)
            .subscribe(function (res) { return console.log('Done'); });
    };
    BankService.prototype.deleteAdUnit = function (id) {
        return this
            .http
            .get(this.uri + "/delete/" + id);
    };
    BankService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], BankService);
    return BankService;
}());



/***/ }),

/***/ "./src/app/components/app.pipe.filter.ts":
/*!***********************************************!*\
  !*** ./src/app/components/app.pipe.filter.ts ***!
  \***********************************************/
/*! exports provided: FilterPipeSearch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipeSearch", function() { return FilterPipeSearch; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterPipeSearch = /** @class */ (function () {
    function FilterPipeSearch() {
    }
    FilterPipeSearch.prototype.transform = function (value, q) {
        if (!q || q === '') {
            return value;
        }
        return value.filter(function (item) { return item.client.name.toLowerCase().match(q.toLowerCase()); });
    };
    FilterPipeSearch = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'stringFilter'
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], FilterPipeSearch);
    return FilterPipeSearch;
}());



/***/ }),

/***/ "./src/app/components/client/client.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/client/client.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/client/client.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/client/client.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " \n<br>\n<div class=\"row\">\n    <label class=\"col-sm-0 mr-1\" for=\"filterNameClient\">Name: </label>\n    <input type=\"text\" class=\"input col-sm-2  border border-gray \" placeholder=\"Filer by Name\" id=\"filterNameClient\"\n      (keyup)=\"filterListClient(keyFilter.value, keyFilterIdentifier.value)\"\n      #keyFilter >\n      <span class=\"mr-2\" ></span>\n      <label class=\"col-sm-0 mr-1\" for=\"filterIdentifierClient\">Identification: </label>\n    <input type=\"text\" class=\"input col-sm-2  border border-gray \" \n        placeholder=\"Filer by Identification\" id=\"filterIdentifierClient\"\n        (keyup)=\"filterListClient(keyFilter.value, keyFilterIdentifier.value)\"\n        #keyFilterIdentifier >\n</div>\n<br>\n<table class=\"table table-hover\">\n  <thead>\n  <tr>\n    <td>Client name</td>\n    <td>Client Identification</td>\n    <td>Created date</td>\n    <td >Edit</td>\n    <td >Delete</td>\n  </tr>\n  </thead>\n\n  <tbody>\n      <tr *ngFor=\"let client of (\n        listClientFiltered == null ? clients : listClientFiltered\n        ) | paginate: { itemsPerPage: 4, currentPage: p }; \">\n          <td>{{ client.name }}</td>\n          <td>{{ client.identifier  }}</td>\n          <td >{{ client?.createTime | date: \"MM/dd/yyyy HH:mm\"}}</td>\n          <td><a [routerLink]=\"['/edit', client ]\" class=\"btn btn-primary\">Edit</a></td>\n          <td><button (click)=\"deleteClient(client.id)\"  class=\"btn btn-danger\">Delete</button></td>\n      </tr>\n  </tbody>\n  <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\n</table>"

/***/ }),

/***/ "./src/app/components/client/client.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/client/client.component.ts ***!
  \*******************************************************/
/*! exports provided: ClientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientComponent", function() { return ClientComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_bank_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/bank.service */ "./src/app/bank.service.ts");
/* harmony import */ var _app_pipe_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.pipe.filter */ "./src/app/components/app.pipe.filter.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ClientComponent = /** @class */ (function () {
    function ClientComponent(bankervice) {
        this.bankervice = bankervice;
        this.listClientFiltered = null;
        this.pipeFilter = new _app_pipe_filter__WEBPACK_IMPORTED_MODULE_2__["FilterPipeSearch"];
    }
    ClientComponent.prototype.filterByName = function (name) {
        if (!name || name === '') {
            this.listClientFiltered = null;
            return;
        }
        var filtered = this.clients.filter(function (item) { return item.name.toLowerCase().match(name.toLowerCase()); });
        this.listClientFiltered = filtered;
        return filtered;
    };
    ClientComponent.prototype.filterListClient = function (name, identifier) {
        this.filterIdentifier = identifier;
        this.filterName = name;
        var listFiltredByName = this.filterByName(name);
        var filtered = [];
        if (listFiltredByName) {
            filtered = listFiltredByName.filter(function (item) { return item.identifier.toString().match(identifier); });
        }
        else {
            filtered = this.clients.filter(function (item) { return item.identifier.toString().match(identifier); });
        }
        this.listClientFiltered = filtered;
    };
    ClientComponent.prototype.deleteClient = function (id) {
        var _this = this;
        this.bankervice.deleteClient(id).subscribe(function (success) {
            console.log('Deleted');
            console.log(success);
            _this.getListClients();
        }, function (error) {
            console.log(error);
            alert("Error to delete Client.");
        });
    };
    ClientComponent.prototype.ngOnInit = function () {
        this.getListClients();
    };
    ClientComponent.prototype.getListClients = function () {
        var _this = this;
        this.bankervice
            .getListClients()
            .subscribe(function (success) {
            _this.clients = success.message;
            _this.listClientFiltered = _this.clients;
            _this.filterListClient(_this.filterName, _this.filterIdentifier);
        }, function (error) {
            console.log(error);
            alert("Error to get Clients.");
        });
    };
    ClientComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-client',
            template: __webpack_require__(/*! ./client.component.html */ "./src/app/components/client/client.component.html"),
            styles: [__webpack_require__(/*! ./client.component.css */ "./src/app/components/client/client.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_bank_service__WEBPACK_IMPORTED_MODULE_1__["BankService"]])
    ], ClientComponent);
    return ClientComponent;
}());



/***/ }),

/***/ "./src/app/components/create/create.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/create/create.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/create/create.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/create/create.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-body\">\n    <form [formGroup]=\"angForm\" novalidate>\n\n      <div class=\"form-group\">\n        <label class=\"col-md-4\">Client identification</label>\n        <input type=\"text\" placeholder=\"Client identification\" class=\"form-control\" name=\"clientIdentification\" formControlName=\"clientIdentification\" #clientIdentification/>\n      </div>\n      <div *ngIf=\"angForm.controls['clientIdentification'].invalid && (angForm.controls['clientIdentification'].dirty || angForm.controls['clientIdentification'].touched)\" class=\"alert alert-danger\">\n        <div *ngIf=\"angForm.controls['clientIdentification'].errors.required\">\n          Client Identification is required.\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <label class=\"col-md-4\">Client name</label>\n        <input type=\"text\" placeholder=\"Client name\" class=\"form-control\" name=\"name\" formControlName=\"name\" #name/>\n      </div>\n      <div *ngIf=\"angForm.controls['name'].invalid && (angForm.controls['name'].dirty || angForm.controls['name'].touched)\" class=\"alert alert-danger\">\n        <div *ngIf=\"angForm.controls['name'].errors.required\">\n          Client name is required.\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <button (click)=\"save(angForm)\" \n            [disabled]=\"angForm.pristine || angForm.invalid\" \n            class=\"btn btn-primary\">Save</button>\n      </div>\n\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/create/create.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/create/create.component.ts ***!
  \*******************************************************/
/*! exports provided: CreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateComponent", function() { return CreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_bank_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/bank.service */ "./src/app/bank.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CreateComponent = /** @class */ (function () {
    function CreateComponent(bankService, fb) {
        this.bankService = bankService;
        this.fb = fb;
        this.createForm();
    }
    CreateComponent.prototype.createForm = function () {
        this.angForm = this.fb.group({
            clientIdentification: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    };
    CreateComponent.prototype.save = function (angForm) {
        var _this = this;
        var identification = angForm.get('clientIdentification');
        var name = angForm.get('name');
        this.bankService.createClient(Number(identification.value), name.value)
            .subscribe(function (success) {
            console.log(success);
            alert("Client Saved successfully!");
            _this.clearFields();
        }, function (error) {
            console.log(error);
            alert("Error to save Client.");
        });
    };
    CreateComponent.prototype.clearFields = function () {
        this.angForm.get('clientIdentification').setValue('');
        this.angForm.get('name').setValue('');
        this.angForm.reset();
    };
    CreateComponent.prototype.ngOnInit = function () {
    };
    CreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create',
            template: __webpack_require__(/*! ./create.component.html */ "./src/app/components/create/create.component.html"),
            styles: [__webpack_require__(/*! ./create.component.css */ "./src/app/components/create/create.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_bank_service__WEBPACK_IMPORTED_MODULE_2__["BankService"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], CreateComponent);
    return CreateComponent;
}());



/***/ }),

/***/ "./src/app/components/edit/edit.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/edit/edit.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/edit/edit.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/edit/edit.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-body\">\n    <form [formGroup]=\"angForm\" novalidate>\n        {{angForm.get('clientName').value}}\n      <div class=\"form-group\">\n        <label class=\"col-md-4\">Client Name</label>\n        <input type=\"text\" \n          class=\"form-control\" \n          name=\"clientName\" \n          value=\"angForm.get('clientName').value\"\n          formControlName=\"clientName\" \n          #clientName [(ngModel)] = \"angForm.get('clientName').value\"/>\n      </div>\n      <div *ngIf=\"angForm.controls['clientName'].invalid && (angForm.controls['clientName'].dirty || angForm.controls['clientName'].touched)\" class=\"alert alert-danger\">\n        <div *ngIf=\"angForm.controls['clientName'].errors.required\">\n          Client Name is required.\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label class=\"col-md-4\">Client Identification</label>\n        <input type=\"text\" class=\"form-control\" name=\"clientIdentifier\" \n          formControlName=\"clientIdentifier\" #clientIdentifier \n          [(ngModel)] = \"angForm.get('clientIdentifier').value\"/>\n      </div>\n      <div *ngIf=\"angForm.controls['clientIdentifier'].invalid && (angForm.controls['clientIdentifier'].dirty || angForm.controls['clientIdentifier'].touched)\" class=\"alert alert-danger\">\n        <div *ngIf=\"angForm.controls['clientIdentifier'].errors.required\">\n          Client Price is required.\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <button (click)=\"updateClient(updateClient)\" [disabled]=\"angForm.invalid\" class=\"btn btn-primary\">Update Client</button>\n      </div>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/edit/edit.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/edit/edit.component.ts ***!
  \***************************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_bank_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/bank.service */ "./src/app/bank.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditComponent = /** @class */ (function () {
    function EditComponent(route, router, bankservice, fb) {
        this.route = route;
        this.router = router;
        this.bankservice = bankservice;
        this.fb = fb;
        this.adClient = {};
    }
    EditComponent.prototype.createForm = function () {
        this.angForm = this.fb.group({
            clientName: [this.client.name, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            clientIdentifier: [this.client.identifier, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    EditComponent.prototype.updateClient = function () {
        var _this = this;
        try {
            this.bankservice.updateClient(this.client.id, this.angForm.get('clientName').value, this.angForm.get('clientIdentifier').value).subscribe(function (success) {
                console.log(success);
                _this.router.navigateByUrl('/clients');
            }, function (error) {
                console.log(error);
                alert("Error to update client.");
            });
        }
        catch (error) {
            alert("Error to update Client.");
        }
        // this.route.params.subscribe(params => {
        //     this.adunitservice.updateAdUnit(unit_name, unit_price, params['id']);
        //     this.router.navigate(['index']);
        // });
    };
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            var client;
            client = JSON.parse(JSON.stringify(params));
            _this.client = client;
            _this.createForm();
        });
    };
    EditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! ./edit.component.html */ "./src/app/components/edit/edit.component.html"),
            styles: [__webpack_require__(/*! ./edit.component.css */ "./src/app/components/edit/edit.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            src_app_bank_service__WEBPACK_IMPORTED_MODULE_3__["BankService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./src/app/components/index/index.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/index/index.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/index/index.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/index/index.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " \n<br>\n<div class=\"row\">\n    <label class=\"col-sm-0 mr-1\" for=\"filterNameClient\">Name: </label>\n    <input type=\"text\" class=\"input col-sm-2  border border-gray \" placeholder=\"Filer by Name\" id=\"filterNameClient\"\n      (keyup)=\"filterListHistory(keyFilter.value, keyFilterAmount.value)\"\n      #keyFilter >\n      <span class=\"mr-2\" ></span>\n      <label class=\"col-sm-0 mr-1\" for=\"filterAmountClient\">Amount: </label>\n      <input type=\"text\" class=\"input col-sm-2  border border-gray \" \n        placeholder=\"Filer by Amount\" id=\"filterAmountClient\"\n        (keyup)=\"filterListHistory(keyFilter.value, keyFilterAmount.value)\"\n        #keyFilterAmount >\n</div>\n<br>\n<table class=\"table table-hover\">\n  <thead>\n  <tr>\n    <td>Client name</td>\n    <td>Client Identification</td>\n    <td>Amout to Withdraw</td>\n    <td>Notes</td>\n    <td colspan=\"2\">Actions</td>\n  </tr>\n  </thead>\n\n  <tbody>\n      <tr *ngFor=\"let history of (\n        listHistoryFiltered == null ? listHistory : listHistoryFiltered\n        ) | paginate: { itemsPerPage: 4, currentPage: p }; let i=index \">\n          <td>{{ history?.client?.name }}</td>\n          <td>{{  history?.client?.identifier }}</td>\n          <td>{{ history?.withdrawAmount }}</td>\n          <td>\n            <div *ngFor=\"let note of history?.notes; \">\n                {{ note?.quantity }} of {{ note?.name }}\n            </div>\n          </td>\n          <td><button (click)=\"deleteHistory(history.id)\"  class=\"btn btn-danger\">Delete</button></td>\n      </tr>\n  </tbody>\n</table>\n<pagination-controls (pageChange)=\"p = $event\" responsive=\"true\"></pagination-controls>"

/***/ }),

/***/ "./src/app/components/index/index.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/index/index.component.ts ***!
  \*****************************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_bank_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/bank.service */ "./src/app/bank.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var IndexComponent = /** @class */ (function () {
    function IndexComponent(listBankervice) {
        this.listBankervice = listBankervice;
        this.listHistory = [];
        this.listHistoryFiltered = null;
        this.listNote = [];
    }
    IndexComponent.prototype.filterByName = function (name) {
        if (!name || name === '') {
            this.listHistoryFiltered = null;
            return;
        }
        var filtered = this.listHistory.filter(function (item) { return item.client.name.toLowerCase().match(name.toLowerCase()); });
        this.listHistoryFiltered = filtered;
        return filtered;
    };
    IndexComponent.prototype.filterListHistory = function (name, amount) {
        this.filterAmount = amount;
        this.filterName = name;
        var listFiltredByName = this.filterByName(name);
        var filtered = [];
        if (listFiltredByName) {
            filtered = listFiltredByName.filter(function (item) { return item.withdrawAmount.toString().match(amount); });
        }
        else {
            filtered = this.listHistory.filter(function (item) { return item.withdrawAmount.toString().match(amount); });
        }
        this.listHistoryFiltered = filtered;
    };
    IndexComponent.prototype.deleteHistory = function (id) {
        var _this = this;
        this.listBankervice.deleteHistory(id)
            .subscribe(function (success) {
            _this.getListHistory();
        }, function (error) {
            console.log(error);
            alert("Error to delete History.");
        });
    };
    IndexComponent.prototype.ngOnInit = function () {
        this.getListHistory();
    };
    IndexComponent.prototype.getListHistory = function () {
        var _this = this;
        // if(this.listHistoryFiltered != null){
        //   return this.listHistoryFiltered;
        // }
        this.listBankervice
            .getHistory()
            .subscribe(function (success) {
            console.log(success.message);
            _this.listHistory = JSON.parse(JSON.stringify(success.message));
            _this.listHistoryFiltered = _this.listHistory;
            _this.filterListHistory(_this.filterName, _this.filterAmount);
        }, function (error) {
            console.log(error);
            alert("Error to get History of withdraws.");
        });
    };
    IndexComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-index',
            template: __webpack_require__(/*! ./index.component.html */ "./src/app/components/index/index.component.html"),
            styles: [__webpack_require__(/*! ./index.component.css */ "./src/app/components/index/index.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_bank_service__WEBPACK_IMPORTED_MODULE_1__["BankService"]])
    ], IndexComponent);
    return IndexComponent;
}());



/***/ }),

/***/ "./src/app/components/withdraw/withdraw.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/withdraw/withdraw.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/withdraw/withdraw.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/withdraw/withdraw.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-body\">\n    <form [formGroup]=\"angForm\" novalidate>\n\n      <div class=\"form-group\">\n        <label class=\"col-md-4\">Client identification</label>\n        <input type=\"text\" class=\"form-control\" name=\"clientIdentification\" formControlName=\"clientIdentification\" #clientIdentification/>\n      </div>\n\n      <div *ngIf=\"angForm.controls['clientIdentification'].invalid && (angForm.controls['clientIdentification'].dirty || angForm.controls['clientIdentification'].touched)\" class=\"alert alert-danger\">\n        <div *ngIf=\"angForm.controls['clientIdentification'].errors.required\">\n          Unit Identification is required.\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <label class=\"col-md-4\">Amount to withdraw</label>\n        <input type=\"text\" class=\"form-control\" name=\"amount\" formControlName=\"amount\" #amount/>\n      </div>\n\n      <div *ngIf=\"angForm.controls['amount'].invalid && (angForm.controls['amount'].dirty || angForm.controls['amount'].touched)\" class=\"alert alert-danger\">\n        <div *ngIf=\"angForm.controls['amount'].errors.required\">\n          Unit Price is required.\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <button (click)=\"withdraw(clientIdentification.value, amount.value)\" \n            [disabled]=\"angForm.pristine || angForm.invalid\" \n            class=\"btn btn-primary\">Withdraw Money</button>\n      </div>\n\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/withdraw/withdraw.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/withdraw/withdraw.component.ts ***!
  \***********************************************************/
/*! exports provided: WithdrawComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WithdrawComponent", function() { return WithdrawComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_bank_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/bank.service */ "./src/app/bank.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WithdrawComponent = /** @class */ (function () {
    function WithdrawComponent(bankService, fb) {
        this.bankService = bankService;
        this.fb = fb;
        this.createForm();
    }
    WithdrawComponent.prototype.createForm = function () {
        this.angForm = this.fb.group({
            clientIdentification: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            amount: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    };
    WithdrawComponent.prototype.withdraw = function (clientIdentification, amount) {
        var _this = this;
        this.bankService.withdraw(amount, clientIdentification)
            .subscribe(function (success) {
            console.log(success);
            alert("Withdraw successfully!");
            _this.clearFields();
        }, function (error) {
            console.log(error);
            alert("Error to withdraw money.");
        });
    };
    WithdrawComponent.prototype.clearFields = function () {
        this.angForm.get('clientIdentification').setValue(' ');
        this.angForm.get('amount').setValue(' ');
        this.angForm.reset();
    };
    WithdrawComponent.prototype.ngOnInit = function () {
    };
    WithdrawComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-withdraw',
            template: __webpack_require__(/*! ./withdraw.component.html */ "./src/app/components/withdraw/withdraw.component.html"),
            styles: [__webpack_require__(/*! ./withdraw.component.css */ "./src/app/components/withdraw/withdraw.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_bank_service__WEBPACK_IMPORTED_MODULE_2__["BankService"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], WithdrawComponent);
    return WithdrawComponent;
}());



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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\PC_Gamer\Documents\Filipe\Bank Account Project\Bank Account Project\Bank App angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map