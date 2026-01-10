"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentDirector = void 0;
var DocumentDirector = /** @class */ (function () {
    function DocumentDirector(builder) {
        this.builder = builder;
    }
    DocumentDirector.prototype.printSimpleIntroduction = function (title) {
        this.builder.reset();
        var document = this.builder
            .addTitle(title)
            .addSection('Introduction')
            .addContent('This is the intoduction section...')
            .addSection('About this document')
            .addContent('This is the section About this document.')
            .getDocument();
        document.printDocument();
    };
    DocumentDirector.prototype.printCompleteDocument = function (title) {
        this.builder.reset();
        var document = this.builder
            .addTitle(title)
            .addSection('General')
            .addContent('Tecnique details')
            .addSection('Another sections')
            .addContent('This is the content of the second section.')
            .getDocument();
        document.printDocument();
    };
    return DocumentDirector;
}());
exports.DocumentDirector = DocumentDirector;
