"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelatorioCsvFactory = void 0;
var FooterCsv_1 = require("../relatorio-csv/FooterCsv");
var HeaderCsv_1 = require("../relatorio-csv/HeaderCsv");
var TableCsv_1 = require("../relatorio-csv/TableCsv");
// concrete factory
var RelatorioCsvFactory = /** @class */ (function () {
    function RelatorioCsvFactory() {
    }
    RelatorioCsvFactory.prototype.createHeader = function (title) {
        return new HeaderCsv_1.HeaderCsv(title);
    };
    RelatorioCsvFactory.prototype.createTable = function (data) {
        return new TableCsv_1.TableCsv(data);
    };
    RelatorioCsvFactory.prototype.createFooter = function (description) {
        return new FooterCsv_1.FooterCsv(description);
    };
    return RelatorioCsvFactory;
}());
exports.RelatorioCsvFactory = RelatorioCsvFactory;
