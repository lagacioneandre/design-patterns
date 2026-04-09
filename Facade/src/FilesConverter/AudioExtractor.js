"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AudioExtractor = void 0;
var AudioExtractor = /** @class */ (function () {
    function AudioExtractor() {
    }
    AudioExtractor.prototype.extract = function (filePath) {
        console.log("Extraindo audio do arquivo ".concat(filePath));
    };
    return AudioExtractor;
}());
exports.AudioExtractor = AudioExtractor;
