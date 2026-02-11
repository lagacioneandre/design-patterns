// import { Command } from "./command.interface";
// import { Document } from "./Document";

// export class DeleteTextCommand implements Command {
//     private receiver: Document;
//     private position: number;
//     private length: number;

//     constructor(receiver: Document, position: number, length: number) {
//         this.receiver = receiver;
//         this.position = position;
//         this.length = length;
//     }


//     execute(): void {
//         this.receiver.delete(this.length, this.position);    
//     }

//     undo(): void {
//         this.receiver.undo();
//     }
// }

import { Command } from "./command.interface";
import { Document } from "./Document";

export class DeleteTextCommand implements Command {
    private deletedText: string = '';

    constructor(
        private receiver: Document, 
        private position: number, 
        private length: number
    ) {}

    execute(): void {
        // Salvamos o que foi deletado para poder restaurar depois
        this.deletedText = this.receiver.delete(this.position, this.length);
        console.log(`[Deletado]: "${this.deletedText}" da pos ${this.position}`);
    }

    undo(): void {
        // Para desfazer uma deleção, re-inserimos o texto salvo
        this.receiver.insert(this.deletedText, this.position);
        console.log(`[Undo Deletar]: Restaurado "${this.deletedText}"`);
    }
}