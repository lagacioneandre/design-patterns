/**
 * 2a. Commando Concreto: Comando de Insercao.
 */

import { Command } from "./command.interface";
import { Document } from "./Document";

export class InsertCommand implements Command {
    private receiver: Document;
    private textToInsert: string;
    private position: number;

    constructor(receiver: Document, text: string, pos: number) {
        this.receiver = receiver;
        this.textToInsert = text;
        this.position = pos;
    }

    // A operacao real
    execute() {
        this.receiver.insert(this.textToInsert, this.position);
    }

    // Para desfazer, podemos chamar o metodo undo do receiver
    undo() {
        this.receiver.undo();
    }
}