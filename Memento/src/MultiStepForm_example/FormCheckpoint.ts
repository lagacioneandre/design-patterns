// The memento (The snapshot)
import { IFormData } from "./form-data.interface";

export class FormCheckpoint {
    private readonly state: IFormData;
    private readonly timestamp: Date;

    constructor(state: IFormData) {
        this.state = state;
        this.timestamp = new Date();
    }

    getState() {
        return this.state;
    }

    getInfo() {
        return `Checkpoint from ${this.timestamp.toLocaleTimeString()} (Step: ${this.state.step})`;
    }
}
