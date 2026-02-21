import { TextDelta } from "./TextDelta";
import { TextDocument } from "./TextDocument";

export class EditorHistory {
    private history: TextDelta[] = [];

    constructor(
        private readonly textDocument: TextDocument
    ) {}

    save(memento: TextDelta) {
        this.history.push(memento);
    }

    undo() {
        const memento = this.history.pop();

        if(!memento) {
            console.log('Nothing to undo!');
            return;
        }

        this.textDocument.undo(memento);
    }
}