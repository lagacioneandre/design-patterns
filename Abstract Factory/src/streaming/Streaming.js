"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Streaming = void 0;
// client
var Streaming = /** @class */ (function () {
    function Streaming(factory) {
        this.factory = factory;
    }
    Streaming.prototype.play = function () {
        var player = this.factory.criarVideoPlayer().obterPlayer();
        var legendas = this.factory.criarLegendas().definirLegenda();
        var quality = this.factory.criarQualidadeVideo().definirQualidade();
        console.log(player);
        console.log(legendas);
        console.log(quality);
    };
    return Streaming;
}());
exports.Streaming = Streaming;
