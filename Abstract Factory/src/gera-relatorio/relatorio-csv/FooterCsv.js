"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FooterCsv = void 0;
// concrete class
var FooterCsv = /** @class */ (function () {
    function FooterCsv(description) {
        this.description = description;
    }
    FooterCsv.prototype.render = function () {
        console.log("A descricao definida \u00E9 ".concat(this.description));
    };
    return FooterCsv;
}());
exports.FooterCsv = FooterCsv;
