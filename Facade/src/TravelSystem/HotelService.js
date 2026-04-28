"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HotelService = void 0;
var HotelService = /** @class */ (function () {
    function HotelService() {
    }
    HotelService.prototype.bookRoom = function (city) {
        console.log("[Hotel Service]: Quarto em ".concat(city, " reservado com sucesso!"));
    };
    return HotelService;
}());
exports.HotelService = HotelService;
