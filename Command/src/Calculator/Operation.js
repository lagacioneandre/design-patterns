"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Operation = void 0;
var Operation = /** @class */ (function () {
    function Operation() {
        this.result = 0;
    }
    Operation.prototype.toAdd = function (value) {
        this.result += value;
        console.log("Added ".concat(value, ", the result is: ").concat(this.result));
    };
    Operation.prototype.toSubtract = function (value) {
        this.result -= value;
        console.log("Subtracted ".concat(value, ", the result is: ").concat(this.result));
    };
    return Operation;
}());
exports.Operation = Operation;
