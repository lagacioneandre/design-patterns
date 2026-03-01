// 3. THE CARETAKER (The "Vault" - It just holds the envelope)

import { Memento } from "./Memento";

export class Caretaker {
    private memento!: Memento; // Just a placeholder

    store(memento: Memento) {
        console.log('Caretaker: I received the envelope. I wont look inside!');
        this.memento = memento;
    }

    retrieve() {
        console.log('Carataker: Giving the envelope back.');
        return this.memento;
    }
}