"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VehiclePackage = void 0;
// client
var VehiclePackage = /** @class */ (function () {
    function VehiclePackage(factory) {
        this.wheels = factory.getWheels();
        this.seat = factory.getSeat();
        this.panel = factory.getPanel();
    }
    VehiclePackage.prototype.buildPackage = function () {
        console.log("Wheels type: ".concat(this.wheels.type()));
        console.log("Seat: ".concat(this.seat.description()));
        console.log("Panel configuration: ".concat(this.panel.configuration()));
    };
    return VehiclePackage;
}());
exports.VehiclePackage = VehiclePackage;
