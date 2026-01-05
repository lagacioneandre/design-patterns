"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuildVehicle = void 0;
/**
 * client
 */
var BuildVehicle = /** @class */ (function () {
    function BuildVehicle(factory) {
        this._factory = factory;
        this._car = this._factory.buildCar();
        this._motorcycle = this._factory.buildMotorcycle();
        this._truck = this._factory.buildTruck();
    }
    BuildVehicle.prototype.setCarProperties = function (color, numberOfPorts, engineModel) {
        return "\n            ".concat(this._car.color(color), ", \n            ").concat(this._car.numberOfPorts(numberOfPorts), ", \n            ").concat(this._car.engineModel(engineModel), "\n        ");
    };
    BuildVehicle.prototype.setMotorcycleProperties = function (color, cubicCapacity, fuelCapacity) {
        return "\n            ".concat(this._motorcycle.color(color), ", \n            ").concat(this._motorcycle.cubicCapacity(cubicCapacity), ", \n            ").concat(this._motorcycle.fuelCapacity(fuelCapacity), "\n        ");
    };
    BuildVehicle.prototype.setTruckProperties = function (color, numberOfWheels, enginePowder) {
        return "\n            ".concat(this._truck.color(color), ", \n            ").concat(this._truck.numberOfWheels(numberOfWheels), ", \n            ").concat(this._truck.enginePowder(enginePowder), "\n        ");
    };
    return BuildVehicle;
}());
exports.BuildVehicle = BuildVehicle;
