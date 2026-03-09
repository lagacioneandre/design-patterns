"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GalcticRegistry_1 = require("./GalcticRegistry");
var Planet_1 = require("./Planet");
var Client = /** @class */ (function () {
    function Client() {
    }
    Client.prototype.execute = function () {
        var earthBase = new Planet_1.Planet('Terra base', 50, ['Florestas', 'Montanhas'], 'Oxigen: 21%', 30);
        var galaticRegisty = new GalcticRegistry_1.GalacticRegistry();
        galaticRegisty.registry('Terra base', earthBase);
        var earthExperiment = earthBase.clone();
        earthExperiment.biome.push('Pantano');
        earthExperiment.atmosphere.density = 40;
        galaticRegisty.registry('Terra experimento', earthExperiment);
        galaticRegisty.display('Terra base'); // Name: Terra base, Radio: 50, Biome: Florestas, Montanhas, Composition: Oxigen: 21%, Density: 30
        galaticRegisty.display('Terra experimento'); // Name: Terra experimento, Radio: 50, Biome: Florestas, Montanhas, Pantano, Composition: Oxigen: 21%, Density: 40
    };
    return Client;
}());
(function () {
    new Client().execute();
})();
