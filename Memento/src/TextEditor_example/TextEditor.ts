/**
 * The Originator:
 * This class holds the actual business logic and the state we car about.
 */

import { EditorMemento } from "./EditorMemento";

export class TextEditor {
    private content = '';

    type(text: string) {
        console.log(`Editor: Typing... "${text}"`);
        this.content += text;
    }

    getContent(): string {
        return this.content;
    }

    // Creates the "snapshot"
    save(): EditorMemento {
        console.log('Editor: saving state...');
        return new EditorMemento(this.content);
    }

    // Restore the snapshot
    restore(memento: EditorMemento) {
        this.content = memento.getState();
        console.log(`Editor: State restored to: "${this.content}"`);
    }
}