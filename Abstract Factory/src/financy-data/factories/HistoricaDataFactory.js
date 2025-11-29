"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HistoricDataFactory = void 0;
var CsvReader_1 = require("../historic-data/CsvReader");
var DataBaseConnector_1 = require("../historic-data/DataBaseConnector");
var StatiticalAnalyzer_1 = require("../historic-data/StatiticalAnalyzer");
// concrete factory
var HistoricDataFactory = /** @class */ (function () {
    function HistoricDataFactory() {
    }
    HistoricDataFactory.prototype.createConnection = function () {
        return new DataBaseConnector_1.DataBaseConnector();
    };
    HistoricDataFactory.prototype.analyzeData = function () {
        return new StatiticalAnalyzer_1.StatisticalAnalyzer();
    };
    HistoricDataFactory.prototype.convertData = function () {
        return new CsvReader_1.CsvReader();
    };
    return HistoricDataFactory;
}());
exports.HistoricDataFactory = HistoricDataFactory;
