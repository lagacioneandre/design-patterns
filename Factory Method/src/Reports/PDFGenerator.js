"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.PDFGenerator = void 0;
var DocumentGenerator_1 = require("./DocumentGenerator");
var PDFDocument_1 = require("./PDFDocument");
var PDFGenerator = /** @class */ (function (_super) {
    __extends(PDFGenerator, _super);
    function PDFGenerator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PDFGenerator.prototype.createDocument = function () {
        return new PDFDocument_1.PDFDocument();
    };
    return PDFGenerator;
}(DocumentGenerator_1.DocumentGenerator));
exports.PDFGenerator = PDFGenerator;
