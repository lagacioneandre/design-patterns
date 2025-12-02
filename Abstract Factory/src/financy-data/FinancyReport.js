"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FinancyReport = void 0;
// client
var FinancyReport = /** @class */ (function () {
    function FinancyReport(factory) {
        this.factory = factory;
    }
    FinancyReport.prototype.generate = function (conector, data) {
        var connection = this.factory.createConnection();
        var converter = this.factory.convertData();
        var analyzer = this.factory.analyzeData();
        var convertedData = converter.convert(data);
        console.log(connection.createConection(conector));
        console.log(convertedData);
        console.log(analyzer.analyse(convertedData));
    };
    return FinancyReport;
}());
exports.FinancyReport = FinancyReport;
