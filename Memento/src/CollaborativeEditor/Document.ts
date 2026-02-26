import { DiffHelper } from "./DiffHelper";
import { IncrementalMemento } from "./IncrementalMemento";

export class Document {
    private content = '';
    private oldContent = '';

    setText(newText: string) {
        console.log(`Adding new text: ${newText}`);
        this.content = newText;
    }

    save() {
        const { action, index, text } = DiffHelper.calculate(this.oldContent, this.content);
        this.oldContent = this.content;
        return new IncrementalMemento(action, index, text);
    }

    restore(text: string) {
        this.content = text;
        this.oldContent = text;
    }

    getContent() {
        return this.content;
    }
}