// 1. THE MEMENTO (The "Secret Envelope")
export class Memento {
    // Only the Originator should really be "opening" this
    constructor(private readonly state: string){}

    getState() {
        return this.state;
    }
}