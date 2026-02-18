"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTMLDocument = void 0;
var HTMLDocument = /** @class */ (function () {
    function HTMLDocument() {
    }
    HTMLDocument.prototype.render = function (content) {
        console.log("HTML: Imprimindo relatorio: ".concat(content));
    };
    return HTMLDocument;
}());
exports.HTMLDocument = HTMLDocument;
