"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Planet = void 0;
var Atmosphere_1 = require("./Atmosphere");
var Planet = /** @class */ (function () {
    function Planet(name, radio, biome, composition, density) {
        this.name = name;
        this.radio = radio;
        this.biome = biome;
        this.atmosphere = new Atmosphere_1.Atmosphere(composition, density);
    }
    Planet.prototype.clone = function () {
        var clone = new Planet(this.name, this.radio, __spreadArray([], this.biome, true), this.atmosphere.composition, this.atmosphere.density);
        clone.atmosphere = this.atmosphere.clone();
        return clone;
    };
    return Planet;
}());
exports.Planet = Planet;
