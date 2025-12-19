"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeaderHtml = void 0;
// concrete class
var HeaderHtml = /** @class */ (function () {
    function HeaderHtml(title) {
        this.title = title;
    }
    HeaderHtml.prototype.render = function () {
        console.log("O titulo do header foi renderizado com ".concat(this.title));
    };
    return HeaderHtml;
}());
exports.HeaderHtml = HeaderHtml;
