"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SmartRemote = void 0;
var SmartRemote = /** @class */ (function () {
    function SmartRemote() {
        this.history = [];
    }
    SmartRemote.prototype.pressButton = function (command) {
        var response = command.execute();
        if (response)
            this.history.push(command);
    };
    SmartRemote.prototype.pressUndo = function () {
        var command = this.history.pop();
        if (!command) {
            console.log('No commands to undo!');
            return;
        }
        command.undo();
    };
    return SmartRemote;
}());
exports.SmartRemote = SmartRemote;
