"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasicPlanFactory = void 0;
var BasicPlanLegenda_1 = require("../basic-plan/BasicPlanLegenda");
var BasicPlanQualidadeVideo_1 = require("../basic-plan/BasicPlanQualidadeVideo");
var BasicPlanVideoPlayer_1 = require("../basic-plan/BasicPlanVideoPlayer");
// concrete factory
var BasicPlanFactory = /** @class */ (function () {
    function BasicPlanFactory() {
    }
    BasicPlanFactory.prototype.criarLegendas = function () {
        return new BasicPlanLegenda_1.BasicPlanLegenda();
    };
    BasicPlanFactory.prototype.criarQualidadeVideo = function () {
        return new BasicPlanQualidadeVideo_1.BasicPlanQualidadeVideo();
    };
    BasicPlanFactory.prototype.criarVideoPlayer = function () {
        return new BasicPlanVideoPlayer_1.BasicPlanVideoPlayer();
    };
    return BasicPlanFactory;
}());
exports.BasicPlanFactory = BasicPlanFactory;
