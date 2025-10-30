"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SportsPackageFactory = void 0;
var AlloyWheels_1 = require("../sports-package/AlloyWheels");
var PanelMeters_1 = require("../sports-package/PanelMeters");
var SportsSeat_1 = require("../sports-package/SportsSeat");
// concrete factory
var SportsPackageFactory = /** @class */ (function () {
    function SportsPackageFactory() {
    }
    SportsPackageFactory.prototype.getPanel = function () {
        return new PanelMeters_1.PanelMeters();
    };
    SportsPackageFactory.prototype.getSeat = function () {
        return new SportsSeat_1.SportsSeat();
    };
    SportsPackageFactory.prototype.getWheels = function () {
        return new AlloyWheels_1.AlloyWheels();
    };
    return SportsPackageFactory;
}());
exports.SportsPackageFactory = SportsPackageFactory;
