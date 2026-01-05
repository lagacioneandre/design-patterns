"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BmwMotorcycle = void 0;
// concrete class
var BmwMotorcycle = /** @class */ (function () {
    function BmwMotorcycle() {
    }
    BmwMotorcycle.prototype.color = function (color) {
        return "O cor da moto e ".concat(color);
    };
    BmwMotorcycle.prototype.cubicCapacity = function (cc) {
        return "As cilindradas sao ".concat(cc);
    };
    BmwMotorcycle.prototype.fuelCapacity = function (fuelCapacity) {
        return "A capacidade de combustivel e ".concat(fuelCapacity);
    };
    return BmwMotorcycle;
}());
exports.BmwMotorcycle = BmwMotorcycle;
