import { Thermostat } from "./Thermostat";
import { ThermostatMemento } from "./ThermostatMemento";

export class ThermostatHistory {
    private undoStack: ThermostatMemento[] = [];
    private redoStack: ThermostatMemento[] = [];
    private thermostat: Thermostat;

    constructor (thermostat: Thermostat) {
        this.thermostat = thermostat;
    }

    save() {
        this.redoStack = [];
        this.undoStack.push(this.thermostat.save());
    }

    undo() {
        const currentState = this.undoStack.pop();
        if (currentState) this.redoStack.push(currentState);
        const previousState = this.undoStack[this.undoStack.length - 1]
        if (!previousState) {
            console.log('Nothing to undo.');
            return;
        }

        this.thermostat.restore(previousState);
    }

    redo() {
        const currentState = this.redoStack.pop();
        if (!currentState) {
            console.log('Nothing to redo.');
            return;
        }

        this.undoStack.push(currentState);
        this.thermostat.restore(currentState);
    }
}