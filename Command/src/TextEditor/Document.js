"use strict";
// export class Document {
//     private content = '';
//     private history: string[] = [];
Object.defineProperty(exports, "__esModule", { value: true });
exports.Document = void 0;
//     insert(text: string, position: number) {
//         const contentBegin = this.content.slice(0, position);
//         const contentEnd = this.content.slice(position);
//         this.content = `${contentBegin} ${text} ${contentEnd}`;
//         this.history.push(this.content);
//         console.log(`[Documento] Insercao: "${text}" na posicao ${position}`);
//         console.log(`[Conteudo]: ${this.content}`);
//         console.log('=================================');
//     }
//     delete(length: number, position: number) {
//         this.history.push(this.content);
//         const content = `${this.content.slice(0, position)} ${this.content.slice(position + length)}`;
//         this.content = content;
//         console.log(`[Documento] Delecao de ${length} caracteres a partir de ${position}`);
//         console.log(`[Conteudo]: ${this.content}`);
//         console.log('=================================');
//     }
//     undo() {
//         if (!!this.history.length) {
//             this.history.pop();
//             this.content = this.history[this.history.length - 1];
//             console.log(`[Documento] Acao desfeita. Conteudo atualizado`);
//             console.log(`[Conteudo]: ${this.content}`);
//             console.log('=================================');
//         } else {
//             console.log(`[Documento] Nada para desfazer`);
//         }
//     }
// }
var Document = /** @class */ (function () {
    function Document() {
        this.content = '';
    }
    Document.prototype.getContent = function () {
        return this.content;
    };
    // Lógica pura de inserção sem histórico interno
    Document.prototype.insert = function (text, position) {
        this.content =
            this.content.slice(0, position) +
                text +
                this.content.slice(position);
    };
    // Lógica pura de deleção que retorna o texto apagado (necessário para o Undo)
    Document.prototype.delete = function (position, length) {
        var deletedText = this.content.substring(position, position + length);
        this.content =
            this.content.slice(0, position) +
                this.content.slice(position + length);
        return deletedText;
    };
    return Document;
}());
exports.Document = Document;
