"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WindowsLogAdapter = void 0;
var WindowsLogAdapter = /** @class */ (function () {
    function WindowsLogAdapter(windowsLog) {
        this.warningLogMap = {
            1: 'CRITICAL',
            2: 'WARNING',
            3: 'INFO'
        };
        this.windowsLog = windowsLog;
    }
    WindowsLogAdapter.prototype.showWarning = function () {
        var legacyLog = this.windowsLog.logWarning();
        var parsedLog = this.warningLogMap[legacyLog];
        console.log("[LOG]: Current status ".concat(parsedLog));
    };
    return WindowsLogAdapter;
}());
exports.WindowsLogAdapter = WindowsLogAdapter;
