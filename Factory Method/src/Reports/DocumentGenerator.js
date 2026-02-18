"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentGenerator = void 0;
var DocumentGenerator = /** @class */ (function () {
    function DocumentGenerator() {
    }
    DocumentGenerator.prototype.addDocumentSign = function () {
        console.log('Assinatura digital adicionada.');
    };
    DocumentGenerator.prototype.export = function (content) {
        console.log('Preparando o documento para ser exportado.');
        this.addDocumentSign();
        var createDocument = this.createDocument();
        createDocument.render(content);
    };
    return DocumentGenerator;
}());
exports.DocumentGenerator = DocumentGenerator;
