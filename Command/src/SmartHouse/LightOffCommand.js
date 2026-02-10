"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LightOffCommand = void 0;
var LightOffCommand = /** @class */ (function () {
    function LightOffCommand(receiver) {
        this.receiver = receiver;
    }
    LightOffCommand.prototype.execute = function () {
        this.receiver.toggleLight(false);
    };
    return LightOffCommand;
}());
exports.LightOffCommand = LightOffCommand;
