"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiffHelper = void 0;
var DiffHelper = /** @class */ (function () {
    function DiffHelper() {
    }
    DiffHelper.calculate = function (oldText, newText) {
        var start = 0;
        while (start < oldText.length &&
            start < newText.length &&
            oldText[start] === newText[start]) {
            start++;
        }
        var oldEnd = oldText.length - 1;
        var newEnd = newText.length - 1;
        while (oldEnd >= start &&
            newEnd >= start &&
            oldText[oldEnd] === newText[newEnd]) {
            oldEnd--;
            newEnd--;
        }
        if (newText.length >= oldText.length) {
            var addedText = newText.substring(start, newEnd + 1);
            return {
                action: 'INSERT',
                index: start,
                text: addedText,
            };
        }
        else {
            var removedText = oldText.substring(start, oldEnd + 1);
            return {
                action: 'DELETE',
                index: start,
                text: removedText,
            };
        }
    };
    return DiffHelper;
}());
exports.DiffHelper = DiffHelper;
