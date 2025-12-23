"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailAlert = void 0;
// concrete class
var EmailAlert = /** @class */ (function () {
    function EmailAlert() {
    }
    EmailAlert.prototype.print = function (log) {
        return "".concat(log, ", email sent.");
    };
    return EmailAlert;
}());
exports.EmailAlert = EmailAlert;
