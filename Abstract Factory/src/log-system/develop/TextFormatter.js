"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextFormatter = void 0;
// concrete class
var TextFormatter = /** @class */ (function () {
    function TextFormatter() {
    }
    TextFormatter.prototype.format = function (log) {
        return "".concat(log, ", parsed to simple text.");
    };
    return TextFormatter;
}());
exports.TextFormatter = TextFormatter;
