"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JSONFormatter = void 0;
// concrete class
var JSONFormatter = /** @class */ (function () {
    function JSONFormatter() {
    }
    JSONFormatter.prototype.format = function (log) {
        return "".concat(log, " parsed to JSON.");
    };
    return JSONFormatter;
}());
exports.JSONFormatter = JSONFormatter;
