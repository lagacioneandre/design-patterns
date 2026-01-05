"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BmwTruck = void 0;
// concrete class
var BmwTruck = /** @class */ (function () {
    function BmwTruck() {
    }
    BmwTruck.prototype.color = function (color) {
        return "A cor do caminhao e ".concat(color);
    };
    BmwTruck.prototype.numberOfWheels = function (wheels) {
        return "A quantidade de rodas e ".concat(wheels);
    };
    BmwTruck.prototype.enginePowder = function (powder) {
        return "A forca do motor e ".concat(powder);
    };
    return BmwTruck;
}());
exports.BmwTruck = BmwTruck;
