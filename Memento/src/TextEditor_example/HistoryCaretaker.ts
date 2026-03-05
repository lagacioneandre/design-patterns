/**
 * The Caretaker manages the stack of mementos
 */

import { EditorMemento } from "./EditorMemento";
import { TextEditor } from "./TextEditor";

export class HistoryCaretaker {
    private mementos: EditorMemento[] = [];
    private originator: TextEditor;

    constructor(originator: TextEditor) {
        this.originator = originator;
    }

    backup() {
        this.mementos.push(this.originator.save());
    }

    undo() {
        if (!this.mementos.length) {
            console.log('History: Nothing to undo.');
            return;
        }

        const memento = this.mementos.pop();
        if (memento) {
            console.log(`History: Restoring to ${memento.getName()}`);
            this.originator.restore(memento);
        }
    }

    showHistory() {
        console.log('History: List of memento:');
        for (const memento of this.mementos) {
            console.log(memento.getName());
        }
    }
}