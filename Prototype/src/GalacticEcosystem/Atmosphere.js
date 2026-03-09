"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Atmosphere = void 0;
var Atmosphere = /** @class */ (function () {
    function Atmosphere(composition, density) {
        this.composition = composition;
        this.density = density;
    }
    Atmosphere.prototype.clone = function () {
        return new Atmosphere(this.composition, this.density);
    };
    return Atmosphere;
}());
exports.Atmosphere = Atmosphere;
