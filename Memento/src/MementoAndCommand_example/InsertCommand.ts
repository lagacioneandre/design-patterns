/**
 * 4. Implementação do Command (Ex: Insert)
 * O comando usa o Memento internamente para saber como voltar atrás.
 */

import { Command } from "./command.interface";
import { TextDocument } from "./TextDocument";
import { TextMemento } from "./TextMemento";

export class InsertCommand implements Command {
    private memento?: TextMemento;

    constructor(
        private doc: TextDocument,
        private text: string,
        private index?: number,
    ) {}

    execute(): void {
        const targetIndex = this.index ?? this.doc.lines.length;
        this.doc.rawInsert(targetIndex, this.text);
        // Criamos o memento do que foi feito para podermos desfazer
        this.memento = new TextMemento('INSERT', targetIndex, this.text);
    }

    undo() {
        if (this.memento) {
            this.doc.rawDelete(this.memento.index);
        }
    }
}