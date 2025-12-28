"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FiccaoFactory = void 0;
var Androide_1 = require("../ficcao/Androide");
var Blaster_1 = require("../ficcao/Blaster");
var CampoDeForca_1 = require("../ficcao/CampoDeForca");
var Engenheiro_1 = require("../ficcao/Engenheiro");
// concrete factory
var FiccaoFactory = /** @class */ (function () {
    function FiccaoFactory() {
    }
    FiccaoFactory.prototype.getArma = function () {
        return new Blaster_1.Blaster();
    };
    FiccaoFactory.prototype.getClasse = function () {
        return new Engenheiro_1.Engenheiro();
    };
    FiccaoFactory.prototype.getHabilidade = function () {
        return new CampoDeForca_1.CampoDeForca();
    };
    FiccaoFactory.prototype.getPersonagem = function () {
        return new Androide_1.Androide();
    };
    return FiccaoFactory;
}());
exports.FiccaoFactory = FiccaoFactory;
