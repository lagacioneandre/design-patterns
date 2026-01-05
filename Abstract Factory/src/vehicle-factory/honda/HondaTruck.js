"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HondaTruck = void 0;
// concrete class
var HondaTruck = /** @class */ (function () {
    function HondaTruck() {
    }
    HondaTruck.prototype.color = function (color) {
        return "A cor do caminhao e ".concat(color);
    };
    HondaTruck.prototype.numberOfWheels = function (wheels) {
        return "A quantidade de rodas e ".concat(wheels);
    };
    HondaTruck.prototype.enginePowder = function (powder) {
        return "A forca do motor e ".concat(powder);
    };
    return HondaTruck;
}());
exports.HondaTruck = HondaTruck;
