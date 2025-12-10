"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JSONParser = void 0;
// concrete product
var JSONParser = /** @class */ (function () {
    function JSONParser() {
    }
    JSONParser.prototype.convert = function (data) {
        return "The data ".concat(data, ", was converted to JSON.");
    };
    return JSONParser;
}());
exports.JSONParser = JSONParser;
