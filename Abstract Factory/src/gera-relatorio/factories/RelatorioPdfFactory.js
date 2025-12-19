"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelatorioPdfFactory = void 0;
var FooterPdf_1 = require("../relatorio-pdf/FooterPdf");
var HeaderPdf_1 = require("../relatorio-pdf/HeaderPdf");
var TablePdf_1 = require("../relatorio-pdf/TablePdf");
// concrete factory
var RelatorioPdfFactory = /** @class */ (function () {
    function RelatorioPdfFactory() {
    }
    RelatorioPdfFactory.prototype.createHeader = function (title) {
        return new HeaderPdf_1.HeaderPdf(title);
    };
    RelatorioPdfFactory.prototype.createTable = function (data) {
        return new TablePdf_1.TablePdf(data);
    };
    RelatorioPdfFactory.prototype.createFooter = function (description) {
        return new FooterPdf_1.FooterPdf(description);
    };
    return RelatorioPdfFactory;
}());
exports.RelatorioPdfFactory = RelatorioPdfFactory;
