"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeaderCsv = void 0;
// concrete class
var HeaderCsv = /** @class */ (function () {
    function HeaderCsv(title) {
        this.title = title;
    }
    HeaderCsv.prototype.render = function () {
        console.log("O titulo do header foi renderizado com ".concat(this.title));
    };
    return HeaderCsv;
}());
exports.HeaderCsv = HeaderCsv;
