"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsvReader = void 0;
// concrete class
var CsvReader = /** @class */ (function () {
    function CsvReader() {
    }
    CsvReader.prototype.convert = function (data) {
        return "The data ".concat(data, ", was charged from one CSV file.");
    };
    return CsvReader;
}());
exports.CsvReader = CsvReader;
