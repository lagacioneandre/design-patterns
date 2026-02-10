"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LightOnCommand = void 0;
var LightOnCommand = /** @class */ (function () {
    function LightOnCommand(receiver) {
        this.receiver = receiver;
    }
    LightOnCommand.prototype.execute = function () {
        this.receiver.toggleLight(true);
    };
    return LightOnCommand;
}());
exports.LightOnCommand = LightOnCommand;
