"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecuritySystemCommand = void 0;
var SecuritySystemCommand = /** @class */ (function () {
    function SecuritySystemCommand(receiver, lockThenAll) {
        this.receiver = receiver;
        this.lockThenAll = lockThenAll;
    }
    SecuritySystemCommand.prototype.execute = function () {
        this.previousState = this.receiver.currentState;
        if (this.lockThenAll) {
            return this.receiver.lockAll();
        }
        return this.receiver.unlockAll();
        ;
    };
    SecuritySystemCommand.prototype.undo = function () {
        if (this.previousState) {
            this.receiver.unlockAll();
        }
        else {
            this.receiver.lockAll();
        }
    };
    return SecuritySystemCommand;
}());
exports.SecuritySystemCommand = SecuritySystemCommand;
