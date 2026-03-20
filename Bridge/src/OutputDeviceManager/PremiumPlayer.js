"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.PremiumPlayer = void 0;
var VideoPlayer_1 = require("./VideoPlayer");
var PremiumPlayer = /** @class */ (function (_super) {
    __extends(PremiumPlayer, _super);
    function PremiumPlayer(videoDevice) {
        return _super.call(this, videoDevice) || this;
    }
    PremiumPlayer.prototype.play = function (content) {
        this.videoDevice.setQuality(1080);
        this.videoDevice.renderFrame(content);
    };
    PremiumPlayer.prototype.rewind = function () {
        console.log("Voltando 10 segundos no [".concat(this.videoDevice.deviceName, "]..."));
    };
    return PremiumPlayer;
}(VideoPlayer_1.VideoPlayer));
exports.PremiumPlayer = PremiumPlayer;
