"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BmwFactory = void 0;
var BmwCar_1 = require("../bmw/BmwCar");
var BmwMotorcycle_1 = require("../bmw/BmwMotorcycle");
var BmwTruck_1 = require("../bmw/BmwTruck");
// concrete factory
var BmwFactory = /** @class */ (function () {
    function BmwFactory() {
    }
    BmwFactory.prototype.buildCar = function () {
        return new BmwCar_1.BmwCar();
    };
    BmwFactory.prototype.buildMotorcycle = function () {
        return new BmwMotorcycle_1.BmwMotorcycle();
    };
    BmwFactory.prototype.buildTruck = function () {
        return new BmwTruck_1.BmwTruck();
    };
    return BmwFactory;
}());
exports.BmwFactory = BmwFactory;
