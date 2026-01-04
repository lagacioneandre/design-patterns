"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PdfFactory = void 0;
var BodyPDF_1 = require("../PDF/BodyPDF");
var FooterPDF_1 = require("../PDF/FooterPDF");
var HeaderPDF_1 = require("../PDF/HeaderPDF");
// concrete factory
var PdfFactory = /** @class */ (function () {
    function PdfFactory() {
    }
    PdfFactory.prototype.header = function () {
        return new HeaderPDF_1.HeaderPDF();
    };
    PdfFactory.prototype.body = function () {
        return new BodyPDF_1.BodyPDF();
    };
    PdfFactory.prototype.footer = function () {
        return new FooterPDF_1.FooterPDF();
    };
    return PdfFactory;
}());
exports.PdfFactory = PdfFactory;
