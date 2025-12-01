"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RealimeFactory = void 0;
var JSONParser_1 = require("../realtime-data/JSONParser");
var PredictiveAnalyser_1 = require("../realtime-data/PredictiveAnalyser");
var StreamConnector_1 = require("../realtime-data/StreamConnector");
// concrete factory
var RealimeFactory = /** @class */ (function () {
    function RealimeFactory() {
    }
    RealimeFactory.prototype.createConnection = function () {
        return new StreamConnector_1.StreamConnector();
    };
    RealimeFactory.prototype.analyzeData = function () {
        return new PredictiveAnalyser_1.PredictiveAnalyzer();
    };
    RealimeFactory.prototype.convertData = function () {
        return new JSONParser_1.JSONParser();
    };
    return RealimeFactory;
}());
exports.RealimeFactory = RealimeFactory;
