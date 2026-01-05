"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AudiMotorcycle = void 0;
// concrete class
var AudiMotorcycle = /** @class */ (function () {
    function AudiMotorcycle() {
    }
    AudiMotorcycle.prototype.color = function (color) {
        return "O cor da moto e ".concat(color);
    };
    AudiMotorcycle.prototype.cubicCapacity = function (cc) {
        return "As cilindradas sao ".concat(cc);
    };
    AudiMotorcycle.prototype.fuelCapacity = function (fuelCapacity) {
        return "A capacidade de combustivel e ".concat(fuelCapacity);
    };
    return AudiMotorcycle;
}());
exports.AudiMotorcycle = AudiMotorcycle;
