"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AudiTruck = void 0;
// concrete class
var AudiTruck = /** @class */ (function () {
    function AudiTruck() {
    }
    AudiTruck.prototype.color = function (color) {
        return "A cor do caminhao e ".concat(color);
    };
    AudiTruck.prototype.numberOfWheels = function (wheels) {
        return "A quantidade de rodas e ".concat(wheels);
    };
    AudiTruck.prototype.enginePowder = function (powder) {
        return "A forca do motor e ".concat(powder);
    };
    return AudiTruck;
}());
exports.AudiTruck = AudiTruck;
