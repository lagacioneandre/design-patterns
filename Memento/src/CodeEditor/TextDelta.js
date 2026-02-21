"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextDelta = void 0;
var TextDelta = /** @class */ (function () {
    function TextDelta(action, index, prevValue) {
        this.action = action;
        this.index = index;
        this.prevValue = prevValue;
    }
    TextDelta.prototype.getStatus = function () {
        return {
            action: this.action,
            index: this.index,
            prevValue: this.prevValue,
        };
    };
    return TextDelta;
}());
exports.TextDelta = TextDelta;
