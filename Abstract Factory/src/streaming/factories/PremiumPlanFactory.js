"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PremiumPlanFacotry = void 0;
var PremiumPlanLegenda_1 = require("../premium-plan/PremiumPlanLegenda");
var PremiumPlanQualidadeVideo_1 = require("../premium-plan/PremiumPlanQualidadeVideo");
var PremiumPlanVideoPlayer_1 = require("../premium-plan/PremiumPlanVideoPlayer");
// concrete factory
var PremiumPlanFacotry = /** @class */ (function () {
    function PremiumPlanFacotry() {
    }
    PremiumPlanFacotry.prototype.criarLegendas = function () {
        return new PremiumPlanLegenda_1.PremiumPlanLegenda();
    };
    PremiumPlanFacotry.prototype.criarQualidadeVideo = function () {
        return new PremiumPlanQualidadeVideo_1.PremiumPlanQualidadeVideo();
    };
    PremiumPlanFacotry.prototype.criarVideoPlayer = function () {
        return new PremiumPlanVideoPlayer_1.PremiumPlanVideoPlayer();
    };
    return PremiumPlanFacotry;
}());
exports.PremiumPlanFacotry = PremiumPlanFacotry;
