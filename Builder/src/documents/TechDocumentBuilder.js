"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TechDocumentBuilder = void 0;
var convert_to_roman_numbers_1 = require("./convert-to-roman-numbers");
var Document_1 = require("./Document");
var TechDocumentBuilder = /** @class */ (function () {
    function TechDocumentBuilder() {
        this.sectionCounter = 1;
    }
    TechDocumentBuilder.prototype.reset = function () {
        this.document = Document_1.Document.newDocument();
        this.sectionCounter = 1;
    };
    TechDocumentBuilder.prototype.addTitle = function (title) {
        var parsedTitle = title.toLocaleUpperCase('pt-BR');
        this.document.addContent("=== ".concat(parsedTitle, " ==="));
        return this;
    };
    TechDocumentBuilder.prototype.addSection = function (section) {
        var romanNumber = (0, convert_to_roman_numbers_1.CONVERT_TO_ROMAN_NUMBERS)(this.sectionCounter);
        this.document.addContent("".concat(romanNumber, ". ").concat(section));
        this.sectionCounter++;
        return this;
    };
    TechDocumentBuilder.prototype.addContent = function (content) {
        this.document.addContent(content);
        return this;
    };
    TechDocumentBuilder.prototype.getDocument = function () {
        return this.document;
    };
    return TechDocumentBuilder;
}());
exports.TechDocumentBuilder = TechDocumentBuilder;
