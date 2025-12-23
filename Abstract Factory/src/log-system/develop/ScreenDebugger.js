"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScreenDebugger = void 0;
// concrete class
var ScreenDebugger = /** @class */ (function () {
    function ScreenDebugger() {
    }
    ScreenDebugger.prototype.print = function (log) {
        return "".concat(log, ", printed on screen.");
    };
    return ScreenDebugger;
}());
exports.ScreenDebugger = ScreenDebugger;
