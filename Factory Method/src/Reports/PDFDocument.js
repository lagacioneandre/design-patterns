"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PDFDocument = void 0;
var PDFDocument = /** @class */ (function () {
    function PDFDocument() {
    }
    PDFDocument.prototype.render = function (content) {
        console.log("PDF: Imprimindo relatorio: ".concat(content));
    };
    return PDFDocument;
}());
exports.PDFDocument = PDFDocument;
