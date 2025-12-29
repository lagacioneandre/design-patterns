"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailMessage = void 0;
// concrete class
var EmailMessage = /** @class */ (function () {
    function EmailMessage() {
    }
    EmailMessage.prototype.message = function () {
        return 'HTML email message.';
    };
    return EmailMessage;
}());
exports.EmailMessage = EmailMessage;
