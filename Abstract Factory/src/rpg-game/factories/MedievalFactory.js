"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MedievalFactory = void 0;
var BolaDeFogo_1 = require("../medieval/BolaDeFogo");
var Cavaleiro_1 = require("../medieval/Cavaleiro");
var Espada_1 = require("../medieval/Espada");
var Mago_1 = require("../medieval/Mago");
// concrete factory
var MedievalFactory = /** @class */ (function () {
    function MedievalFactory() {
    }
    MedievalFactory.prototype.getArma = function () {
        return new Espada_1.Espada();
    };
    MedievalFactory.prototype.getClasse = function () {
        return new Mago_1.Mago();
    };
    MedievalFactory.prototype.getHabilidade = function () {
        return new BolaDeFogo_1.BolaDeFogo();
    };
    MedievalFactory.prototype.getPersonagem = function () {
        return new Cavaleiro_1.Cavaleiro();
    };
    return MedievalFactory;
}());
exports.MedievalFactory = MedievalFactory;
