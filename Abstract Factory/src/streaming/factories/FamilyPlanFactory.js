"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FamilyPlanFactory = void 0;
var FamilyPlanlegenda_1 = require("../family-plan/FamilyPlanlegenda");
var FamilyPlanQualidadeVideo_1 = require("../family-plan/FamilyPlanQualidadeVideo");
var FamilyPlanVideoPlayer_1 = require("../family-plan/FamilyPlanVideoPlayer");
// concrete factory
var FamilyPlanFactory = /** @class */ (function () {
    function FamilyPlanFactory() {
    }
    FamilyPlanFactory.prototype.criarLegendas = function () {
        return new FamilyPlanlegenda_1.FamilyPlanLegenda();
    };
    FamilyPlanFactory.prototype.criarQualidadeVideo = function () {
        return new FamilyPlanQualidadeVideo_1.FamiltPlanQualidadeVideo();
    };
    FamilyPlanFactory.prototype.criarVideoPlayer = function () {
        return new FamilyPlanVideoPlayer_1.FamilyPlanVideoPlayer();
    };
    return FamilyPlanFactory;
}());
exports.FamilyPlanFactory = FamilyPlanFactory;
