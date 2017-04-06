webpackJsonp([2,4],{

/***/ 208:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 208;


/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(273);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_map_service__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_nominatim_service__ = __webpack_require__(272);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LatLng = L.LatLng;
var AppComponent = (function () {
    function AppComponent(mapService, nominatimService) {
        this.mapService = mapService;
        this.nominatimService = nominatimService;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.mapService.initialize();
    };
    AppComponent.prototype.search = function () {
        var _this = this;
        this.clear();
        this.nominatimService.search(this.searchQuery).subscribe(function (results) { return _this.results = results; });
    };
    AppComponent.prototype.clear = function () {
        this.results = [];
        this.searchQuery = "";
    };
    AppComponent.prototype.showResult = function (place) {
        var latlng = new LatLng(place.lat, place.lon);
        L.marker(latlng).addTo(this.mapService.map);
        this.mapService.map.setView(latlng, 15);
    };
    AppComponent.prototype.showDetails = function (result) {
        window.open('https://nominatim.openstreetmap.org/details.php?place_id=' + result.place_id);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(336),
        styles: [__webpack_require__(330)],
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_map_service__["a" /* default */], __WEBPACK_IMPORTED_MODULE_2__services_nominatim_service__["a" /* NominatimService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_map_service__["a" /* default */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_map_service__["a" /* default */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_nominatim_service__["a" /* NominatimService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_nominatim_service__["a" /* NominatimService */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_flex_layout__ = __webpack_require__(225);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_flex_layout__["a" /* FlexLayoutModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_leaflet__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_leaflet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_leaflet__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MapService = (function () {
    function MapService() {
    }
    MapService.prototype.initialize = function () {
        if (this.map) {
            return;
        }
        this.map = L.map('map', {
            zoomControl: true,
            center: L.latLng(0, 0),
            zoom: 2,
            minZoom: 3,
            maxZoom: 19
        });
        L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, Tiles courtesy of <a href="http://hot.openstreetmap.org/" target="_blank">Humanitarian OpenStreetMap Team</a>'
        }).addTo(this.map);
        L.control.scale().addTo(this.map);
    };
    MapService.prototype.showBoundary = function (geometry) {
        this.clear();
        var featureCollection = {
            type: 'FeatureCollection',
            features: [
                {
                    type: 'Feature',
                    geometry: geometry,
                    properties: {}
                }
            ]
        };
        this.currentLayer = L.geoJSON(featureCollection, {
            style: function () {
                return {
                    color: '#3F51B5',
                    fillColor: '#3F51B5'
                };
            }
        }).addTo(this.map);
        this.map.fitBounds(this.currentLayer.getBounds());
    };
    MapService.prototype.clear = function () {
        if (this.currentLayer) {
            this.map.removeLayer(this.currentLayer);
            this.currentLayer = undefined;
        }
    };
    return MapService;
}());
MapService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], MapService);
/* harmony default export */ __webpack_exports__["a"] = MapService;
//# sourceMappingURL=map.service.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(44);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NominatimService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NominatimService = (function () {
    function NominatimService(http) {
        this.http = http;
    }
    NominatimService.prototype.search = function (q) {
        var url = 'https://nominatim.openstreetmap.org/search?q=' + q + '&format=json&limit=10';
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    return NominatimService;
}());
NominatimService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], NominatimService);

var _a;
//# sourceMappingURL=nominatim.service.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 330:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(36)();
// imports


// module
exports.push([module.i, ".toolbar-filler {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n}\n.content {\n  position: absolute;\n  top: 64px;\n  bottom: 0;\n  width: 100%;\n}\n.content #map {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  width: 75%;\n}\n.content .search-sidebar {\n  padding: 15px;\n  min-width: 300px;\n  overflow-y: auto;\n}\n.content .search-sidebar .search-box {\n  width: calc(100% - 75px);\n}\n.content .search-sidebar .search-button {\n  width: 30px;\n  min-width: 0 !important;\n  padding: 0 !important;\n}\n.content .search-sidebar .selected-result {\n  border-bottom: 5px solid #3F51B5;\n}\n.content .search-sidebar .search-result {\n  margin-top: 15px;\n}\n.content .search-sidebar .search-result .osm-link {\n  cursor: pointer;\n  color: #2ca1e3;\n}\n.content .search-sidebar .search-result:hover {\n  border-bottom: 5px solid #3F51B5;\n}\n.white-frame {\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n.clickable {\n  cursor: pointer;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 336:
/***/ (function(module, exports) {

module.exports = "<md-toolbar class=\"white-frame\" color=\"primary\">\n  <span>Leaflet example app</span>\n  <span class=\"toolbar-filler\"></span>\n</md-toolbar>\n\n<div class=\"flex-container content\" fxLayout=\"row\">\n  <div class=\"flex-item search-sidebar white-frame\" fxFlex=\"25%\">\n\n    <md-card>\n      <md-card-title>Search OpenStreetMap</md-card-title>\n      <md-input-container class=\"search-box\">\n        <input mdInput\n               placeholder=\"place name\"\n               [(ngModel)]=\"searchQuery\"\n               (keyup.enter)=\"search()\">\n      </md-input-container>\n      <button md-button\n              class=\"search-button\"\n              color=\"primary\"\n              style=\"margin-left: 5px\"\n              (click)=\"search()\"\n              md-tooltip=\"Search this location\">\n      </button>\n      <button md-button\n              class=\"search-button\"\n              md-tooltip=\"Clear results\"\n              (click)=\"clear()\">\n        <i class=\"fa fa-remove\"></i>\n      </button>\n    </md-card>\n    <md-card *ngFor=\"let result of results; let i = index\"\n             class=\"search-result\"\n             [ngClass]=\"{ 'selected-result': selectedIndex === i }\">\n      <md-card-header class=\"clickable\"\n                      (click)=\"showResult(result)\"\n                      md-tooltip=\"Show boundary\">\n        <md-card-title>{{ result.display_name }}</md-card-title>\n        <md-card-subtitle>\n          {{ result.type }}\n        </md-card-subtitle>\n      </md-card-header>\n      <br>\n      <button md-raised-button md-tooltip=\"Show details\" (click)=\"showDetails(result)\">\n        Details\n      </button>\n    </md-card>\n    <md-card class=\"search-result\" *ngIf=\"noResult\">\n      <md-card-subtitle>No Result</md-card-subtitle>\n    </md-card>\n  </div>\n  <div class=\"flex-item\"  fxFlex=\"75%\">\n    <div id=\"map\"></div>\n  </div>\n</div>\n"

/***/ }),

/***/ 385:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(209);


/***/ })

},[385]);
//# sourceMappingURL=main.bundle.js.map