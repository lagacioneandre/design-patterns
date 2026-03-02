import { FormManager } from "./FormManager";
import { MultiStepForm } from "./MultiStepForm";

class Client {
    execute() {
        const myForm = new MultiStepForm();
        const manager = new FormManager(myForm);

        // STEP 1: Basic info
        myForm.updateData({ name: 'Gemini', email: 'gemini@ai.com' });
        manager.save(); // Checkpoint 1 saved

        // STEP 2: Address
        myForm.updateData({ step: 2, address: '123 Google st. '});
        manager.save(); // Checkpoint 2 saved

        // STEP 3: Preferences (User makes a mistake here)
        myForm.updateData({ step: 3, preferences: ['Pizza', 'Code'] });
        myForm.updateData({ name: 'WRONG NAME '}); // Accidental edit

        // RECOVERY: Oops! Go back to the end of Step 2
        manager.undoToLastCheckpoint();
        myForm.showCurrentData();
    }
}

(() => {
    new Client().execute();
})();