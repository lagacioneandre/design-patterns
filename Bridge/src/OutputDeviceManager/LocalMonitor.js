"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalMonitor = void 0;
var LocalMonitor = /** @class */ (function () {
    function LocalMonitor() {
        this.deviceName = 'Monitor local';
    }
    LocalMonitor.prototype.renderFrame = function (data) {
        console.log("Exibindo no ".concat(this.deviceName, ": [").concat(data, "]"));
    };
    LocalMonitor.prototype.setQuality = function (level) {
        console.log("Quality seted to ".concat(level));
    };
    return LocalMonitor;
}());
exports.LocalMonitor = LocalMonitor;
