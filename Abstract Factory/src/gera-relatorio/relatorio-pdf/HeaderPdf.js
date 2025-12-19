"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeaderPdf = void 0;
// concrete class
var HeaderPdf = /** @class */ (function () {
    function HeaderPdf(title) {
        this.title = title;
    }
    HeaderPdf.prototype.render = function () {
        console.log("O titulo do header foi renderizado com ".concat(this.title));
    };
    return HeaderPdf;
}());
exports.HeaderPdf = HeaderPdf;
