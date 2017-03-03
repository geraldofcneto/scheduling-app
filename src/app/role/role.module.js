"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var role_component_1 = require("./role.component");
var router_1 = require("@angular/router");
var role_service_1 = require("./role.service");
var RoleModule = (function () {
    function RoleModule() {
    }
    return RoleModule;
}());
RoleModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, /*ROTA*/ router_1.RouterModule.forChild([{ path: 'roles', component: role_component_1.RoleComponent }]) /*ROTA*/],
        declarations: [role_component_1.RoleComponent],
        providers: [role_service_1.RoleService]
    })
], RoleModule);
exports.RoleModule = RoleModule;
//# sourceMappingURL=role.module.js.map