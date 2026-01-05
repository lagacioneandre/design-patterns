"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BmwCar = void 0;
// concrete class
var BmwCar = /** @class */ (function () {
    function BmwCar() {
    }
    BmwCar.prototype.color = function (color) {
        return "O cor do carro e ".concat(color);
    };
    BmwCar.prototype.numberOfPorts = function (ports) {
        return "O numero de portas e ".concat(ports);
    };
    BmwCar.prototype.engineModel = function (engine) {
        return "O motor e ".concat(engine);
    };
    return BmwCar;
}());
exports.BmwCar = BmwCar;
