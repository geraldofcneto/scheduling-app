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
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var mock_1 = require("../shared/mock");
var SERVICE_URL = 'api/booking';
var BookingService = (function () {
    function BookingService(_httpService) {
        this._httpService = _httpService;
    }
    BookingService.prototype.getBookings = function () {
        var url = SERVICE_URL + "/list";
        return this._httpService.get(url)
            .toPromise()
            .then(function (response) {
            return response.json();
        });
    };
    BookingService.prototype.getBooking = function (id) {
        return mock_1.BOOKINGS.find(function (r) { return r.id == id; });
    };
    return BookingService;
}());
BookingService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], BookingService);
exports.BookingService = BookingService;
//# sourceMappingURL=booking.service.js.map