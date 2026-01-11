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
exports.FamiliarModelBuilder = void 0;
var EletricCar_1 = require("./EletricCar");
var FamiliarModelBuilder = /** @class */ (function (_super) {
    __extends(FamiliarModelBuilder, _super);
    function FamiliarModelBuilder() {
        return _super.call(this) || this;
    }
    FamiliarModelBuilder.prototype.defineEngine = function () {
        _super.prototype.setEngine.call(this, 'Motor simple otimizado para eficiencia (200cv)');
        return this;
    };
    FamiliarModelBuilder.prototype.defineColor = function () {
        _super.prototype.setColor.call(this, 'Prata');
        return this;
    };
    FamiliarModelBuilder.prototype.defineBattery = function () {
        _super.prototype.setBattery.call(this, 'Bateria Padrão (60kWh)');
        return this;
    };
    FamiliarModelBuilder.prototype.defineWheels = function () {
        _super.prototype.setWheels.call(this, 'Rodas de Aço 18 polegadas com Calota');
        return this;
    };
    FamiliarModelBuilder.prototype.getCarConfiguration = function () {
        return this;
    };
    return FamiliarModelBuilder;
}(EletricCar_1.EletricCar));
exports.FamiliarModelBuilder = FamiliarModelBuilder;
