"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesPerson = void 0;
var SalesPerson = /** @class */ (function () {
    function SalesPerson(builder) {
        this.builder = builder;
    }
    SalesPerson.prototype.buildDefaultModel = function () {
        return this.builder
            .defineEngine()
            .defineColor()
            .defineBattery()
            .defineWheels()
            .getCarConfiguration();
    };
    return SalesPerson;
}());
exports.SalesPerson = SalesPerson;
