"use strict";
/**
 * The Caretaker manages the stack of mementos
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.HistoryCaretaker = void 0;
var HistoryCaretaker = /** @class */ (function () {
    function HistoryCaretaker(originator) {
        this.mementos = [];
        this.originator = originator;
    }
    HistoryCaretaker.prototype.backup = function () {
        this.mementos.push(this.originator.save());
    };
    HistoryCaretaker.prototype.undo = function () {
        if (!this.mementos.length) {
            console.log('History: Nothing to undo.');
            return;
        }
        var memento = this.mementos.pop();
        if (memento) {
            console.log("History: Restoring to ".concat(memento.getName()));
            this.originator.restore(memento);
        }
    };
    HistoryCaretaker.prototype.showHistory = function () {
        console.log('History: List of memento:');
        for (var _i = 0, _a = this.mementos; _i < _a.length; _i++) {
            var memento = _a[_i];
            console.log(memento.getName());
        }
    };
    return HistoryCaretaker;
}());
exports.HistoryCaretaker = HistoryCaretaker;
