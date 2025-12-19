"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FooterPdf = void 0;
// concrete class
var FooterPdf = /** @class */ (function () {
    function FooterPdf(description) {
        this.description = description;
    }
    FooterPdf.prototype.render = function () {
        console.log("A descricao definida \u00E9 ".concat(this.description));
    };
    return FooterPdf;
}());
exports.FooterPdf = FooterPdf;
