"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.SportsModelBuilder = void 0;
var EletricCar_1 = require("./EletricCar");
var SportsModelBuilder = /** @class */ (function (_super) {
    __extends(SportsModelBuilder, _super);
    function SportsModelBuilder() {
        return _super.call(this) || this;
    }
    SportsModelBuilder.prototype.defineEngine = function () {
        _super.prototype.setEngine.call(this, 'Motor duplo de alta performance');
        return this;
    };
    SportsModelBuilder.prototype.defineColor = function () {
        _super.prototype.setColor.call(this, 'Roxo');
        return this;
    };
    SportsModelBuilder.prototype.defineBattery = function () {
        _super.prototype.setBattery.call(this, 'Bateria de longo alcance');
        return this;
    };
    SportsModelBuilder.prototype.defineWheels = function () {
        _super.prototype.setWheels.call(this, 'Rodas de liga leve de 20 polegadas');
        return this;
    };
    SportsModelBuilder.prototype.getCarConfiguration = function () {
        return this;
    };
    return SportsModelBuilder;
}(EletricCar_1.EletricCar));
exports.SportsModelBuilder = SportsModelBuilder;
