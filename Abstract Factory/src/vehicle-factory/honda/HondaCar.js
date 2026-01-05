"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HondaCar = void 0;
// concrete class
var HondaCar = /** @class */ (function () {
    function HondaCar() {
    }
    HondaCar.prototype.color = function (color) {
        return "O cor do carro e ".concat(color);
    };
    HondaCar.prototype.numberOfPorts = function (ports) {
        return "O numero de portas e ".concat(ports);
    };
    HondaCar.prototype.engineModel = function (engine) {
        return "O motor e ".concat(engine);
    };
    return HondaCar;
}());
exports.HondaCar = HondaCar;
