"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WindowsLog = void 0;
var WindowsLog = /** @class */ (function () {
    function WindowsLog() {
    }
    WindowsLog.prototype.logWarning = function () {
        return Math.round(Math.random() * 2 + 1);
    };
    return WindowsLog;
}());
exports.WindowsLog = WindowsLog;
