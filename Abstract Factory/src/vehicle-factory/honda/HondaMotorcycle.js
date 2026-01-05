"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HondaMotorcycle = void 0;
// concrete class
var HondaMotorcycle = /** @class */ (function () {
    function HondaMotorcycle() {
    }
    HondaMotorcycle.prototype.color = function (color) {
        return "O cor da moto e ".concat(color);
    };
    HondaMotorcycle.prototype.cubicCapacity = function (cc) {
        return "As cilindradas sao ".concat(cc);
    };
    HondaMotorcycle.prototype.fuelCapacity = function (fuelCapacity) {
        return "A capacidade de combustivel e ".concat(fuelCapacity);
    };
    return HondaMotorcycle;
}());
exports.HondaMotorcycle = HondaMotorcycle;
