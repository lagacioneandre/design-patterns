"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThermostatHistory = void 0;
var ThermostatHistory = /** @class */ (function () {
    function ThermostatHistory(thermostat) {
        this.undoStack = [];
        this.redoStack = [];
        this.thermostat = thermostat;
    }
    ThermostatHistory.prototype.save = function () {
        this.redoStack = [];
        this.undoStack.push(this.thermostat.save());
    };
    ThermostatHistory.prototype.undo = function () {
        var currentState = this.undoStack.pop();
        if (currentState)
            this.redoStack.push(currentState);
        var previousState = this.undoStack[this.undoStack.length - 1];
        if (!previousState) {
            console.log('Nothing to undo.');
            return;
        }
        this.thermostat.restore(previousState);
    };
    ThermostatHistory.prototype.redo = function () {
        var currentState = this.redoStack.pop();
        if (!currentState) {
            console.log('Nothing to redo.');
            return;
        }
        this.undoStack.push(currentState);
        this.thermostat.restore(currentState);
    };
    return ThermostatHistory;
}());
exports.ThermostatHistory = ThermostatHistory;
