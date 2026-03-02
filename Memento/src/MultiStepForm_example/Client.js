"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FormManager_1 = require("./FormManager");
var MultiStepForm_1 = require("./MultiStepForm");
var Client = /** @class */ (function () {
    function Client() {
    }
    Client.prototype.execute = function () {
        var myForm = new MultiStepForm_1.MultiStepForm();
        var manager = new FormManager_1.FormManager(myForm);
        // STEP 1: Basic info
        myForm.updateData({ name: 'Gemini', email: 'gemini@ai.com' });
        manager.save(); // Checkpoint 1 saved
        // STEP 2: Address
        myForm.updateData({ step: 2, address: '123 Google st. ' });
        manager.save(); // Checkpoint 2 saved
        // STEP 3: Preferences (User makes a mistake here)
        myForm.updateData({ step: 3, preferences: ['Pizza', 'Code'] });
        myForm.updateData({ name: 'WRONG NAME ' }); // Accidental edit
        // RECOVERY: Oops! Go back to the end of Step 2
        manager.undoToLastCheckpoint();
        myForm.showCurrentData();
    };
    return Client;
}());
(function () {
    new Client().execute();
})();
