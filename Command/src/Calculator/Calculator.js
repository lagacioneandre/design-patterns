"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calculator = void 0;
var Calculator = /** @class */ (function () {
    function Calculator() {
        this.history = [];
    }
    Calculator.prototype.execute = function (command) {
        command.execute();
        this.history.push(command);
    };
    Calculator.prototype.undo = function () {
        var command = this.history.pop();
        if (!command) {
            console.log('Any operation was executed at the moment!');
            return;
        }
        command.undo();
    };
    return Calculator;
}());
exports.Calculator = Calculator;
