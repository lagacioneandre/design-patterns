"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LuxuryPackageFactory = void 0;
var ChromeWheels_1 = require("../luxury-package/ChromeWheels");
var LeatherSeat_1 = require("../luxury-package/LeatherSeat");
var PanelTouch_1 = require("../luxury-package/PanelTouch");
// concrete factory
var LuxuryPackageFactory = /** @class */ (function () {
    function LuxuryPackageFactory() {
    }
    LuxuryPackageFactory.prototype.getPanel = function () {
        return new PanelTouch_1.PanelTouch();
    };
    LuxuryPackageFactory.prototype.getSeat = function () {
        return new LeatherSeat_1.LeatherSeat();
    };
    LuxuryPackageFactory.prototype.getWheels = function () {
        return new ChromeWheels_1.ChromeWheels();
    };
    return LuxuryPackageFactory;
}());
exports.LuxuryPackageFactory = LuxuryPackageFactory;
