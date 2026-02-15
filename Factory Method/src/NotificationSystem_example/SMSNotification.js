"use strict";
// concrete product
Object.defineProperty(exports, "__esModule", { value: true });
exports.SMSNotification = void 0;
var SMSNotification = /** @class */ (function () {
    function SMSNotification() {
    }
    SMSNotification.prototype.send = function (message) {
        console.log("Enviando SMS: ".concat(message));
    };
    return SMSNotification;
}());
exports.SMSNotification = SMSNotification;
