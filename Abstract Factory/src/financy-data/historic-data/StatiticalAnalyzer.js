"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatisticalAnalyzer = void 0;
// concrete class
var StatisticalAnalyzer = /** @class */ (function () {
    function StatisticalAnalyzer() {
    }
    StatisticalAnalyzer.prototype.analyse = function (data) {
        return "The data ".concat(data, ", provides a statical analyze report.");
    };
    return StatisticalAnalyzer;
}());
exports.StatisticalAnalyzer = StatisticalAnalyzer;
