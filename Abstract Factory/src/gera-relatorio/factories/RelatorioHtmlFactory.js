"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelatorioHtmlFactory = void 0;
var FooterHtml_1 = require("../relatorio-html/FooterHtml");
var headerHtml_1 = require("../relatorio-html/headerHtml");
var TableHtml_1 = require("../relatorio-html/TableHtml");
// concrete factory
var RelatorioHtmlFactory = /** @class */ (function () {
    function RelatorioHtmlFactory() {
    }
    RelatorioHtmlFactory.prototype.createHeader = function (title) {
        return new headerHtml_1.HeaderHtml(title);
    };
    RelatorioHtmlFactory.prototype.createTable = function (data) {
        return new TableHtml_1.TableHtml(data);
    };
    RelatorioHtmlFactory.prototype.createFooter = function (description) {
        return new FooterHtml_1.FooterHtml(description);
    };
    return RelatorioHtmlFactory;
}());
exports.RelatorioHtmlFactory = RelatorioHtmlFactory;
