"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AudiCar = void 0;
// concrete class
var AudiCar = /** @class */ (function () {
    function AudiCar() {
    }
    AudiCar.prototype.color = function (color) {
        return "O cor do carro e ".concat(color);
    };
    AudiCar.prototype.numberOfPorts = function (ports) {
        return "O numero de portas e ".concat(ports);
    };
    AudiCar.prototype.engineModel = function (engine) {
        return "O motor e ".concat(engine);
    };
    return AudiCar;
}());
exports.AudiCar = AudiCar;
