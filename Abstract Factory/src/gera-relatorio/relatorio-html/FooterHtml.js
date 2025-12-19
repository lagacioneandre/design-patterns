"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FooterHtml = void 0;
// concrete class
var FooterHtml = /** @class */ (function () {
    function FooterHtml(description) {
        this.description = description;
    }
    FooterHtml.prototype.render = function () {
        console.log("A descricao definida \u00E9 ".concat(this.description));
    };
    return FooterHtml;
}());
exports.FooterHtml = FooterHtml;
