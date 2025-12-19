"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableHtml = void 0;
// concrete class
var TableHtml = /** @class */ (function () {
    function TableHtml(data) {
        this.data = data;
    }
    TableHtml.prototype.render = function () {
        console.log("Os dados recebidos foram ".concat(this.data));
    };
    return TableHtml;
}());
exports.TableHtml = TableHtml;
