// import { Command } from "./command.interface";
// import { Document } from "./Document";

// export class InsertTextCommand implements Command {
//     private receiver: Document;
//     private content = '';
//     private position: number

//     constructor(receiver: Document, content: string, position: number) {
//         this.receiver = receiver;
//         this.content = content;
//         this.position = position;
//     }

//     execute(): void {
//         this.receiver.insert(this.content, this.position);
//     }

//     undo(): void {
//         this.receiver.undo();
//     }
// }

import { Command } from "./command.interface";
import { Document } from "./Document";

export class InsertTextCommand implements Command {
    constructor(
        private receiver: Document, 
        private text: string, 
        private position: number
    ) {}

    execute(): void {
        this.receiver.insert(this.text, this.position);
        console.log(`[Inserido]: "${this.text}" na pos ${this.position}`);
    }

    undo(): void {
        // Para desfazer uma inserção, deletamos o comprimento do texto que adicionamos
        this.receiver.delete(this.position, this.text.length);
        console.log(`[Undo Inserir]: Removido "${this.text}"`);
    }
}