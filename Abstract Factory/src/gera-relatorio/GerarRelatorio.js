"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GerarRelatorio = void 0;
// client
var GerarRelatorio = /** @class */ (function () {
    function GerarRelatorio(factory) {
        this.factory = factory;
    }
    GerarRelatorio.prototype.renderHeader = function (title) {
        var header = this.factory.createHeader(title);
        header.render();
    };
    GerarRelatorio.prototype.renderTable = function (data) {
        var table = this.factory.createTable(data);
        table.render();
    };
    GerarRelatorio.prototype.renderFooter = function (description) {
        var footer = this.factory.createFooter(description);
        footer.render();
    };
    return GerarRelatorio;
}());
exports.GerarRelatorio = GerarRelatorio;
