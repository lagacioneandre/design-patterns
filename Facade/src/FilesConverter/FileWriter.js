"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileWriter = void 0;
var FileWriter = /** @class */ (function () {
    function FileWriter() {
    }
    FileWriter.prototype.write = function (filePath, targetFormat) {
        console.log("Salvando arquivo ".concat(filePath, " no formato ").concat(targetFormat));
    };
    return FileWriter;
}());
exports.FileWriter = FileWriter;
