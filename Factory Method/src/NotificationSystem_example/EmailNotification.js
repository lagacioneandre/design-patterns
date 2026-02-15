"use strict";
// concrete product
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailNotification = void 0;
var EmailNotification = /** @class */ (function () {
    function EmailNotification() {
    }
    EmailNotification.prototype.send = function (message) {
        console.log("Enviando email: ".concat(message));
    };
    return EmailNotification;
}());
exports.EmailNotification = EmailNotification;
