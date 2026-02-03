"use strict";
/**
 * O Receiver (receptador): Contem a logica de negocio real
 * Ele sabe como executar as operacoes
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Document = void 0;
var Document = /** @class */ (function () {
    function Document(initialContent) {
        if (initialContent === void 0) { initialContent = ''; }
        this.history = [];
        this.content = initialContent;
        this.history.push(initialContent); // salva o estado inicial
    }
    Document.prototype.insert = function (text, position) {
        this.content = this.content.slice(0, position) + text + this.content.slice(position);
        this.history.push(this.content);
        console.log("[Documento] Insercao: \"".concat(text, "\" na posicao ").concat(position));
    };
    Document.prototype.delete = function (start, length) {
        this.content = this.content.slice(0, start) + this.content.slice(start + length);
        this.history.push(this.content);
        console.log("[Documento] Delecao de ".concat(length, " caracteres a partir de ").concat(start));
    };
    Document.prototype.undo = function () {
        if (this.history.length) {
            this.history.pop(); // Remove o estado atual
            this.content = this.history[this.history.length - 1]; // volta para o estado anterior
            console.log("[Documento] Acao desfeita. Conteudo atualizado");
        }
        else {
            console.log("[Documento] Nada para desfazer");
        }
    };
    Document.prototype.getContent = function () {
        return this.content;
    };
    return Document;
}());
exports.Document = Document;
