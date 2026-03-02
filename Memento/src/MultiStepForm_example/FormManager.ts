/**
 * The Caretaker (The checkpoint manager)
 * Unlike an Undo stack, a Checkpoint Manager usually allows the user to pick a specific "Save Point" 
 * or just revert to the very last one.
 */

import { FormCheckpoint } from "./FormCheckpoint";
import { MultiStepForm } from "./MultiStepForm";

export class FormManager {
    private checkPoints: FormCheckpoint[] = [];
    private form: MultiStepForm;

    constructor(form: MultiStepForm) {
        this.form = form;
    }

    save() {
        this.checkPoints.push(this.form.createCheckpoint());
    }

    undoToLastCheckpoint() {
        const checkpoint = this.checkPoints.pop();
        if (checkpoint) {
            this.form.restore(checkpoint);
        } else {
            console.log('No checkpoints found!');
        }
    }
}