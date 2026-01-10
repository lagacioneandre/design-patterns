"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Document = void 0;
var Document = /** @class */ (function () {
    function Document() {
        this.contentList = [];
    }
    Document.newDocument = function () {
        return new Document();
    };
    Document.prototype.addContent = function (content) {
        this.contentList.push(content);
    };
    Document.prototype.printDocument = function () {
        console.log("\n--- INÍCIO DO DOCUMENTO ---");
        if (this.contentList.length === 0) {
            console.log("[Documento Vazio]");
        }
        else {
            this.contentList.forEach(function (item) {
                console.log(item);
            });
        }
        console.log("--- FIM DO DOCUMENTO ---\n");
    };
    return Document;
}());
exports.Document = Document;
