"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GalacticRegistry = void 0;
var GalacticRegistry = /** @class */ (function () {
    function GalacticRegistry() {
        this.planets = new Map();
    }
    GalacticRegistry.prototype.registry = function (name, planet) {
        this.planets.set(name, planet.clone());
    };
    GalacticRegistry.prototype.display = function (name) {
        var planet = this.planets.get(name);
        if (planet) {
            console.log("\n                Name: ".concat(planet.name, ",\n                Radio: ").concat(planet.radio, ",\n                Biome: ").concat(JSON.stringify(planet.biome), ",\n                Composition: ").concat(planet.atmosphere.composition, ",\n                Density: ").concat(planet.atmosphere.density, "\n            "));
        }
    };
    return GalacticRegistry;
}());
exports.GalacticRegistry = GalacticRegistry;
