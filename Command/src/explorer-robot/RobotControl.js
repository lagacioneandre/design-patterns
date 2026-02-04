"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RobotControl = void 0;
var RobotControl = /** @class */ (function () {
    function RobotControl() {
        this.history = [];
    }
    RobotControl.prototype.go = function (commandDirection) {
        commandDirection.execute();
        this.history.push(commandDirection);
    };
    RobotControl.prototype.back = function () {
        var lastCommand = this.history.pop();
        if (!lastCommand) {
            console.log('The robot has not moved yet!');
            return;
        }
        lastCommand.undo();
    };
    return RobotControl;
}());
exports.RobotControl = RobotControl;
