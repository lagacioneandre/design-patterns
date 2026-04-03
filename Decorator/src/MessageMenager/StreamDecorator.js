"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StreamDecorator = void 0;
var StreamDecorator = /** @class */ (function () {
    function StreamDecorator(dataStream) {
        this.dataStream = dataStream;
    }
    StreamDecorator.prototype.process = function (data) {
        return this.dataStream.process(data);
    };
    return StreamDecorator;
}());
exports.StreamDecorator = StreamDecorator;
