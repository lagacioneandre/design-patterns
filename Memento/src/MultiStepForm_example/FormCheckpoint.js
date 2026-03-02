"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormCheckpoint = void 0;
var FormCheckpoint = /** @class */ (function () {
    function FormCheckpoint(state) {
        this.state = state;
        this.timestamp = new Date();
    }
    FormCheckpoint.prototype.getState = function () {
        return this.state;
    };
    FormCheckpoint.prototype.getInfo = function () {
        return "Checkpoint from ".concat(this.timestamp.toLocaleTimeString(), " (Step: ").concat(this.state.step, ")");
    };
    return FormCheckpoint;
}());
exports.FormCheckpoint = FormCheckpoint;
