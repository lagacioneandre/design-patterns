"use strict";
// The Originator (The Multi-Step Form)
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultiStepForm = void 0;
var FormCheckpoint_1 = require("./FormCheckpoint");
var MultiStepForm = /** @class */ (function () {
    function MultiStepForm() {
        this.state = {
            step: 1,
            preferences: [],
        };
    }
    MultiStepForm.prototype.updateData = function (data) {
        this.state = __assign(__assign({}, this.state), data);
        console.log("Form: Update to step ".concat(this.state.step, ". Data: "), this.state);
    };
    // Creates the checkpoint
    MultiStepForm.prototype.createCheckpoint = function () {
        console.log("\n[Action] Creating checkpoint at Step ".concat(this.state.step, "..."));
        return new FormCheckpoint_1.FormCheckpoint(this.state);
    };
    // Restores from the checkpoint
    MultiStepForm.prototype.restore = function (checkpoint) {
        this.state = checkpoint.getState();
        console.log("\n[Action] Form restored to ".concat(checkpoint.getInfo()));
    };
    MultiStepForm.prototype.showCurrentData = function () {
        console.log("Current form state: ", JSON.stringify(this.state, null, 2));
    };
    return MultiStepForm;
}());
exports.MultiStepForm = MultiStepForm;
