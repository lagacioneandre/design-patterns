"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HondaFactory = void 0;
var HondaCar_1 = require("../honda/HondaCar");
var HondaMotorcycle_1 = require("../honda/HondaMotorcycle");
var HondaTruck_1 = require("../honda/HondaTruck");
// concrete factory
var HondaFactory = /** @class */ (function () {
    function HondaFactory() {
    }
    HondaFactory.prototype.buildCar = function () {
        return new HondaCar_1.HondaCar();
    };
    HondaFactory.prototype.buildMotorcycle = function () {
        return new HondaMotorcycle_1.HondaMotorcycle();
    };
    HondaFactory.prototype.buildTruck = function () {
        return new HondaTruck_1.HondaTruck();
    };
    return HondaFactory;
}());
exports.HondaFactory = HondaFactory;
