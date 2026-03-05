/**
 * The memento interface provides a way to retrieve the mememnto's metadata,
 * but it doesn't expose the Originator's state.
 */

export class EditorMemento {
    private readonly state: string;
    private readonly date: string;

    constructor (state: string) {
        this.state = state;
        this.date = new Date().toISOString().slice(11, 19);
    }

    // this is used by the Originator to get its state back
    getState() {
        return this.state;
    }

    getName() {
        return `${this.date} / (${this.state.substring(0, 9)}...)`;
    }
}