"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeaderPDF = void 0;
// abstract product
var HeaderPDF = /** @class */ (function () {
    function HeaderPDF() {
    }
    HeaderPDF.prototype.title = function () {
        return 'Titulo do documento em PDF.';
    };
    return HeaderPDF;
}());
exports.HeaderPDF = HeaderPDF;
