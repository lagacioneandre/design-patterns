"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileLogger = void 0;
// concrete class
var FileLogger = /** @class */ (function () {
    function FileLogger() {
    }
    FileLogger.prototype.getLog = function () {
        return 'Production log';
    };
    return FileLogger;
}());
exports.FileLogger = FileLogger;
