"use strict";
/**
 * The Caretaker (The checkpoint manager)
 * Unlike an Undo stack, a Checkpoint Manager usually allows the user to pick a specific "Save Point"
 * or just revert to the very last one.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormManager = void 0;
var FormManager = /** @class */ (function () {
    function FormManager(form) {
        this.checkPoints = [];
        this.form = form;
    }
    FormManager.prototype.save = function () {
        this.checkPoints.push(this.form.createCheckpoint());
    };
    FormManager.prototype.undoToLastCheckpoint = function () {
        var checkpoint = this.checkPoints.pop();
        if (checkpoint) {
            this.form.restore(checkpoint);
        }
        else {
            console.log('No checkpoints found!');
        }
    };
    return FormManager;
}());
exports.FormManager = FormManager;
