"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FooterPDF = void 0;
// abstract product
var FooterPDF = /** @class */ (function () {
    function FooterPDF() {
    }
    FooterPDF.prototype.corpyright = function () {
        return 'Footer do documento em PDF.';
    };
    return FooterPDF;
}());
exports.FooterPDF = FooterPDF;
