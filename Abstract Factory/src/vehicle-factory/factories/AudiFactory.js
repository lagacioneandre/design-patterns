"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AudiFactory = void 0;
var AudiCar_1 = require("../audi/AudiCar");
var AudiMotorcycle_1 = require("../audi/AudiMotorcycle");
var AudiTruck_1 = require("../audi/AudiTruck");
// concrete factory
var AudiFactory = /** @class */ (function () {
    function AudiFactory() {
    }
    AudiFactory.prototype.buildCar = function () {
        return new AudiCar_1.AudiCar();
    };
    AudiFactory.prototype.buildMotorcycle = function () {
        return new AudiMotorcycle_1.AudiMotorcycle();
    };
    AudiFactory.prototype.buildTruck = function () {
        return new AudiTruck_1.AudiTruck();
    };
    return AudiFactory;
}());
exports.AudiFactory = AudiFactory;
