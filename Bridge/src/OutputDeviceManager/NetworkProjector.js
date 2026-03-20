"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NetworkProjector = void 0;
var NetworkProjector = /** @class */ (function () {
    function NetworkProjector() {
        this.deviceName = 'Projetor';
    }
    NetworkProjector.prototype.renderFrame = function (data) {
        console.log("Enviando via wi-fi para o ".concat(this.deviceName, ": [").concat(data, "]"));
    };
    NetworkProjector.prototype.setQuality = function (level) {
        console.log("Quality seted to ".concat(level));
    };
    return NetworkProjector;
}());
exports.NetworkProjector = NetworkProjector;
