"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EletricCar = void 0;
var EletricCar = /** @class */ (function () {
    function EletricCar() {
    }
    EletricCar.createCar = function () {
        return new EletricCar();
    };
    EletricCar.prototype.setEngine = function (engine) {
        this.engine = engine;
    };
    EletricCar.prototype.setColor = function (color) {
        this.color = color;
    };
    EletricCar.prototype.setBattery = function (battery) {
        this.battery = battery;
    };
    EletricCar.prototype.setWheels = function (wheels) {
        this.wheels = wheels;
    };
    EletricCar.prototype.carConfiguration = function () {
        console.log("\n==================================");
        console.log("Carro Montado:");
        console.log("  Motor:   ".concat(this.engine));
        console.log("  Bateria: ".concat(this.battery));
        console.log("  Cor:     ".concat(this.color));
        console.log("  Rodas:   ".concat(this.wheels));
        console.log("==================================");
    };
    return EletricCar;
}());
exports.EletricCar = EletricCar;
