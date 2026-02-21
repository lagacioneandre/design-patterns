import { TextDelta } from "./TextDelta";

export class TextDocument {
    private documentFile: string[] = [];

    addLine(content: string) {
        this.documentFile.push(content);
        const index = this.documentFile.length - 1;
        this.print();
        return new TextDelta('INSERT', index, '');
    }

    editLine(index: number, newContent: string) {
        const currentContent = this.documentFile[index];
        this.documentFile.splice(index, 1, newContent);
        this.print();
        return new TextDelta('UPDATE', index, currentContent);
    }

    removeLine(index: number) {
        const currentContent = this.documentFile[index];
        this.documentFile.splice(index, 1);
        this.print();
        return new TextDelta('DELETE', index, currentContent);
    }

    undo(memento: TextDelta) {
        const { action, index, prevValue } = memento.getStatus();
        if (action === 'DELETE') {
            this.documentFile.splice(index, 0, prevValue);
        this.print();
        } else if (action === 'INSERT') {
            this.documentFile.splice(index, 1);
        this.print();
        } else {
            this.documentFile.splice(index, 1, prevValue);
        this.print();
        }
    }

    private print() {
        this.documentFile.map(item => console.log(item));
    }
}