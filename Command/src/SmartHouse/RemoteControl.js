"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoteControl = void 0;
var RemoteControl = /** @class */ (function () {
    function RemoteControl(command) {
        this.command = command;
    }
    RemoteControl.prototype.pressButton = function () {
        this.command.execute();
    };
    return RemoteControl;
}());
exports.RemoteControl = RemoteControl;
