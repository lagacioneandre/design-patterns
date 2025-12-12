"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PredictiveAnalyzer = void 0;
// concrete product
var PredictiveAnalyzer = /** @class */ (function () {
    function PredictiveAnalyzer() {
    }
    PredictiveAnalyzer.prototype.analyse = function (data) {
        return "The data ".concat(data, ", provides a predictive analyze report.");
    };
    return PredictiveAnalyzer;
}());
exports.PredictiveAnalyzer = PredictiveAnalyzer;
