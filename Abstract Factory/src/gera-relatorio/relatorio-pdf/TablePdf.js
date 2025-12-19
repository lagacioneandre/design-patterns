"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TablePdf = void 0;
// concrete class
var TablePdf = /** @class */ (function () {
    function TablePdf(data) {
        this.data = data;
    }
    TablePdf.prototype.render = function () {
        console.log("Os dados recebidos foram ".concat(this.data));
    };
    return TablePdf;
}());
exports.TablePdf = TablePdf;
