webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'TODO today';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n        <h1>{{title}}:</h1>\n        <item-list></item-list>\n        \n  ",
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var platform_browser_1 = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var forms_1 = __webpack_require__("../../../forms/@angular/forms.es5.js");
var http_1 = __webpack_require__("../../../http/@angular/http.es5.js");
// for in-memory web api
var angular_in_memory_web_api_1 = __webpack_require__("../../../../angular-in-memory-web-api/index.js");
var in_memory_data_service_1 = __webpack_require__("../../../../../src/app/in-memory-data.service.ts");
var app_component_1 = __webpack_require__("../../../../../src/app/app.component.ts");
var item_list_component_1 = __webpack_require__("../../../../../src/app/item-list.component.ts");
var item_service_1 = __webpack_require__("../../../../../src/app/item.service.ts");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            angular_in_memory_web_api_1.InMemoryWebApiModule.forRoot(in_memory_data_service_1.InMemoryDataService),
        ],
        declarations: [
            app_component_1.AppComponent,
            item_list_component_1.ItemListComponent,
        ],
        providers: [item_service_1.ItemService],
        bootstrap: [app_component_1.AppComponent],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/in-memory-data.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var items = [
            { priority: 1, todo: 'clean garage' },
            { priority: 2, todo: 'do dishes' },
            { priority: 3, todo: 'walk dog' },
            { priority: 4, todo: 'wait, I don\'t have a dog' },
            { priority: 5, todo: 'get a dog' },
            { priority: null, todo: 'get 2 dogs' },
        ];
        return { items: items };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map

/***/ }),

/***/ "../../../../../src/app/item-list.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>My Items</h2>\n<div>\n    <label>TODO:</label> <input #todo/>\n    <button (click)=\"add(todo.value); todo.value=''\">\n        Add\n    </button>\n</div>\n<div>\n    <ul class=\"items\">\n        <li *ngFor=\"let item of items\"\n            [class.selected]=\"item === selectedItem\"\n            (click)=\"onSelect(item)\">\n            <span class=\"badge\"></span> <!-- {{item.priority}}</span> -->\n            {{item.todo}}\n        <button class=\"delete\"\n            (click)=\"delete(item)\">x</button>\n        </li>\n    </ul>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/item-list.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var item_service_1 = __webpack_require__("../../../../../src/app/item.service.ts");
var ItemListComponent = (function () {
    function ItemListComponent(itemService) {
        this.itemService = itemService;
    }
    ItemListComponent.prototype.getItems = function () {
        var _this = this;
        this.itemService.getItems()
            .then(function (items) { return _this.items = items; });
    };
    ItemListComponent.prototype.ngOnInit = function () {
        this.getItems();
    };
    ItemListComponent.prototype.onSelect = function (item) {
        this.selectedItem = item;
    };
    ItemListComponent.prototype.add = function (todo) {
        var _this = this;
        todo = todo.trim();
        if (!todo) {
            return;
        }
        this.itemService.create(todo)
            .then(function (item) {
            _this.items.push(item);
            _this.selectedItem = null;
        });
    };
    ItemListComponent.prototype.delete = function (item) {
        var _this = this;
        this.itemService
            .delete(item.priority)
            .then(function () {
            _this.items = _this.items.filter(function (i) { return i !== item; });
            if (_this.selectedItem === item) {
                _this.selectedItem = null;
            }
        });
    };
    return ItemListComponent;
}());
ItemListComponent = __decorate([
    core_1.Component({
        selector: 'item-list',
        template: __webpack_require__("../../../../../src/app/item-list.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof item_service_1.ItemService !== "undefined" && item_service_1.ItemService) === "function" && _a || Object])
], ItemListComponent);
exports.ItemListComponent = ItemListComponent;
var _a;
//# sourceMappingURL=item-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/item.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var http_1 = __webpack_require__("../../../http/@angular/http.es5.js");
__webpack_require__("../../../../rxjs/add/operator/toPromise.js");
var ItemService = (function () {
    function ItemService(http) {
        this.http = http;
        this.itemsUrl = 'api/values'; //URL to web api
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    ItemService.prototype.getItems = function () {
        return this.http.get(this.itemsUrl)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    ItemService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    ItemService.prototype.getItem = function (priority) {
        var url = this.itemsUrl + "/" + priority;
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    ItemService.prototype.update = function (item) {
        var url = this.itemsUrl + "/" + item.priority;
        return this.http
            .put(url, JSON.stringify(item), { headers: this.headers })
            .toPromise()
            .then(function () { return item; })
            .catch(this.handleError);
    };
    ItemService.prototype.create = function (todo) {
        return this.http
            .post(this.itemsUrl, JSON.stringify({ todo: todo }), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    ItemService.prototype.delete = function (priority) {
        var url = this.itemsUrl + "/" + priority;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    return ItemService;
}());
ItemService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _a || Object])
], ItemService);
exports.ItemService = ItemService;
var _a;
//# sourceMappingURL=item.service.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var platform_browser_dynamic_1 = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
var app_module_1 = __webpack_require__("../../../../../src/app/app.module.ts");
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map