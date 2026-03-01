import { Memento } from "./Memento";

// 2. THE ORIGINATOR (The "Agent" with the secret)
export class Originator {
    state = '';

    // Step A: Create the envelope
    save() {
        console.log(`Originator: Putting "${this.state}" into an envelop.`);
        return new Memento(this.state);
    }

    // STEP B: Open the envelope and update itself
    restore(memento: Memento) {
        this.state = memento.getState();
        console.log(`Originator: I opened the envelope. My styate is now: "${this.state}"`);
    }
}