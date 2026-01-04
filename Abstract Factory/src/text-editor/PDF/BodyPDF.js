"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BodyPDF = void 0;
// abstract product
var BodyPDF = /** @class */ (function () {
    function BodyPDF() {
    }
    BodyPDF.prototype.content = function () {
        return 'Conteudo do documento em PDF.';
    };
    return BodyPDF;
}());
exports.BodyPDF = BodyPDF;
