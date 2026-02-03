/**
 * 2b Commando Concreto: Comando de delecao
 */

import { Command } from "./command.interface";
import { Document } from "./Document";

export class DeleteCommand implements Command {
    private receiver: Document;
    // Em um cenario real, voce armazenario o texto DELETADO para poder refazer
    private start: number;
    private length: number;

    constructor(receiver: Document, start: number, length: number) {
        this.receiver = receiver;
        this.start = start;
        this.length = length;
    }

    execute(): void {
        this.receiver.delete(this.start, this.length);
    }

    undo(): void {
        this.receiver.undo();
    }
}