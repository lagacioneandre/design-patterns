"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CSVDocument = void 0;
var CSVDocument = /** @class */ (function () {
    function CSVDocument() {
    }
    CSVDocument.prototype.render = function (content) {
        console.log("CSV: Imprimindo relatorio: ".concat(content));
    };
    return CSVDocument;
}());
exports.CSVDocument = CSVDocument;
