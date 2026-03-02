// The Originator (The Multi-Step Form)

import { IFormData } from "./form-data.interface";
import { FormCheckpoint } from "./FormCheckpoint";

export class MultiStepForm {
    private state: IFormData = {
        step: 1,
        preferences: [],
    };

    updateData(data: Partial<IFormData>) {
        this.state = { ...this.state, ...data };
        console.log(`Form: Update to step ${this.state.step}. Data: `, this.state);
    }

    // Creates the checkpoint
    createCheckpoint() {
        console.log(`\n[Action] Creating checkpoint at Step ${this.state.step}...`);
        return new FormCheckpoint(this.state);
    }

    // Restores from the checkpoint
    restore(checkpoint: FormCheckpoint) {
        this.state = checkpoint.getState();
        console.log(`\n[Action] Form restored to ${checkpoint.getInfo()}`);
    }

    showCurrentData() {
        console.log(`Current form state: `, JSON.stringify(this.state, null, 2));
    }
}