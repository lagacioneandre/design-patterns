"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarRentalService = void 0;
var CarRentalService = /** @class */ (function () {
    function CarRentalService() {
    }
    CarRentalService.prototype.rentCer = function (city) {
        console.log("[Car rental Service]: Carro alugado com sucesso em ".concat(city));
    };
    return CarRentalService;
}());
exports.CarRentalService = CarRentalService;
