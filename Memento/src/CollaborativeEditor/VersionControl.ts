import { Document } from "./Document";
import { IncrementalMemento } from "./IncrementalMemento";

export class VersionControl {
    private histoty: IncrementalMemento[] = [];
    private document: Document;

    constructor (document: Document) {
        this.document = document;
    }

    save() {
        this.histoty.push(this.document.save());
    }

    undo() {
        if (!this.histoty.length) {
            console.log('Nothing to undo.');
            return;
        }

        this.histoty.pop();
        let rebuiltContent = '';

        for (const memento of this.histoty) {
            const { action, index, text } = memento.getDetails();

            if (action === 'INSERT') {
                rebuiltContent = rebuiltContent.slice(0, index) + text + rebuiltContent.slice(index);
            } else {
                rebuiltContent = rebuiltContent.slice(0, index) + rebuiltContent.slice(index + text.length);
            }
        }

        this.document.restore(rebuiltContent)
    }
}