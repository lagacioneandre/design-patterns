import { Canvas } from "./Canvas";
import { CanvasMemento } from "./CanvasMemento";

export class CanvasHistory {
    private history: CanvasMemento[] = [];
    private canvas: Canvas;

    constructor(canvas: Canvas) {
        this.canvas = canvas;
        // FIX: Crucial capture the initial (empty) state right away
        this.history.push(this.canvas.save());
    }

    push() {
        console.log('Adding new shape.');
        this.history.push(this.canvas.save());
    }

    undo() {
        // const memento = this.history.pop();
        // if (memento) {
        //     console.log('Removing last shape.');
        //     this.canvas.restore(memento);
        // } else {
        //     console.log('Nothing to undo.');
        // }

        /**
         * If we only have 1 memento, it's the initial state.
         * We shouldn't pop it, or we'll have nothing to restore
         */
        if (this.history.length <= 1) {
            console.log('History: Already at the beginning. Nothing to undo.')
            return;
        }

        console.log('History: Performing: Undo...');

        // 1. Remove the "current" state from the stack...
        this.history.pop();

        // 2. The "new top" is now our target state
        const previousState = this.history[this.history.length - 1];

        // 3. Tell the canvas to go back
        this.canvas.restore(previousState);
    }
}