"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.XMLFormatter = void 0;
// concrete class
var XMLFormatter = /** @class */ (function () {
    function XMLFormatter() {
    }
    XMLFormatter.prototype.format = function (log) {
        return "".concat(log, " parsed to XML.");
    };
    return XMLFormatter;
}());
exports.XMLFormatter = XMLFormatter;
