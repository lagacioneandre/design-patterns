/**
 * 3. O Originator (Documento)
 * Ele apenas executa operações brutas. Ele não sabe o que é um "Undo", ele apenas recebe ordens.
 */

export class TextDocument {
    lines: string[] = [];

    rawInsert(index: number, text: string) {
        this.lines.splice(index, 0, text);
    }

    rawDelete(index: number) {
        return this.lines.splice(index, 1)[0];
    }

    rawUpdate(index: number, text: string) {
        const old = this.lines[index];
        this.lines[index] = text;
        return old;
    }

    print() {
        console.log('Content: ', JSON.stringify(this.lines));
    }
}