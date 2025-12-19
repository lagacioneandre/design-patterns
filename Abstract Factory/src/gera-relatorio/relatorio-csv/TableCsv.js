"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableCsv = void 0;
// concrete class
var TableCsv = /** @class */ (function () {
    function TableCsv(data) {
        this.data = data;
    }
    TableCsv.prototype.render = function () {
        console.log("Os dados recebidos foram ".concat(this.data));
    };
    return TableCsv;
}());
exports.TableCsv = TableCsv;
