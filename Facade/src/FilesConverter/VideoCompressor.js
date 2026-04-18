"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideoCompressor = void 0;
var VideoCompressor = /** @class */ (function () {
    function VideoCompressor() {
    }
    VideoCompressor.prototype.compress = function (filePath) {
        console.log("Comprimido o video ".concat(filePath));
    };
    return VideoCompressor;
}());
exports.VideoCompressor = VideoCompressor;
