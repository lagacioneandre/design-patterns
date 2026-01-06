"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TemaFantasiaFacotry = void 0;
var TemaFantasiaPecas_1 = require("../tema-fantasia/TemaFantasiaPecas");
var TemaFantasiaTabuleiro_1 = require("../tema-fantasia/TemaFantasiaTabuleiro");
var TemaFantasiaFacotry = /** @class */ (function () {
    function TemaFantasiaFacotry() {
    }
    TemaFantasiaFacotry.prototype.definirPecas = function () {
        return new TemaFantasiaPecas_1.TemaFantasiaPecas();
    };
    TemaFantasiaFacotry.prototype.definirTabuleiro = function () {
        return new TemaFantasiaTabuleiro_1.TemaFantasiaTabuleiro();
    };
    return TemaFantasiaFacotry;
}());
exports.TemaFantasiaFacotry = TemaFantasiaFacotry;
