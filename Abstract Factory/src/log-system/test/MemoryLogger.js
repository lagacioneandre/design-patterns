"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemoryLogger = void 0;
// concrete class
var MemoryLogger = /** @class */ (function () {
    function MemoryLogger() {
    }
    MemoryLogger.prototype.getLog = function () {
        return 'Test logger.';
    };
    return MemoryLogger;
}());
exports.MemoryLogger = MemoryLogger;
