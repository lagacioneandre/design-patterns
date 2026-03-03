"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UndoManager = void 0;
var UndoManager = /** @class */ (function () {
    function UndoManager(characteSheet) {
        this.history = [];
        this.characteSheet = characteSheet;
    }
    // push(memento: AttributeDelta) {
    //     this.history.push(memento);
    // }
    UndoManager.prototype.saveState = function (type) {
        this.history.push(this.characteSheet.createMemento(type));
    };
    UndoManager.prototype.undo = function () {
        // if (!this.history.length) {
        //     console.log('Nothing to undo!');
        //     return;
        // }
        // const memento = this.history.pop();
        // if (memento) {
        //     const { attribute, delta, bio } = memento;
        //     this.characteSheet.undo(attribute, delta, bio);
        //     this.characteSheet.save();
        // }
        var memento = this.history.pop();
        if (memento) {
            this.characteSheet.restore(memento);
        }
        else {
            console.log('Nothing to undo!');
        }
    };
    return UndoManager;
}());
exports.UndoManager = UndoManager;
