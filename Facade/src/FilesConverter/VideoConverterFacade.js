"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideoConverterFacade = void 0;
var AudioExtractor_1 = require("./AudioExtractor");
var FileWriter_1 = require("./FileWriter");
var SubtitleMerger_1 = require("./SubtitleMerger");
var VideoCompressor_1 = require("./VideoCompressor");
var VideoConverterFacade = /** @class */ (function () {
    function VideoConverterFacade() {
        this.audioExtractor = new AudioExtractor_1.AudioExtractor();
        this.videoCompressor = new VideoCompressor_1.VideoCompressor();
        this.subtitleMerger = new SubtitleMerger_1.SubtitleMerger();
        this.fileWriter = new FileWriter_1.FileWriter();
    }
    VideoConverterFacade.prototype.convert = function (filePath, targetFormat) {
        console.log("[Converter]: Iniciando a conversao do video ".concat(filePath, ", para o formato ").concat(targetFormat));
        this.audioExtractor.extract(filePath);
        this.subtitleMerger.merge(filePath);
        this.videoCompressor.compress(filePath);
        this.fileWriter.write(filePath, targetFormat);
        console.log('[Converter]: Video convertido com sucesso!');
    };
    return VideoConverterFacade;
}());
exports.VideoConverterFacade = VideoConverterFacade;
