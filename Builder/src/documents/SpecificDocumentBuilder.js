"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpecificDocumentBuilder = void 0;
var Document_1 = require("./Document");
var SpecificDocumentBuilder = /** @class */ (function () {
    function SpecificDocumentBuilder() {
        this.sectionCounter = 1;
    }
    SpecificDocumentBuilder.prototype.reset = function () {
        this.document = Document_1.Document.newDocument();
        this.sectionCounter = 1;
    };
    SpecificDocumentBuilder.prototype.addTitle = function (title) {
        this.document.addContent("[ESPEC] ".concat(title));
        return this;
    };
    SpecificDocumentBuilder.prototype.addSection = function (section) {
        this.document.addContent("".concat(this.sectionCounter, " SECAO: ").concat(section));
        this.sectionCounter++;
        return this;
    };
    SpecificDocumentBuilder.prototype.addContent = function (content) {
        this.document.addContent("  - ".concat(content));
        return this;
    };
    SpecificDocumentBuilder.prototype.getDocument = function () {
        return this.document;
    };
    return SpecificDocumentBuilder;
}());
exports.SpecificDocumentBuilder = SpecificDocumentBuilder;
