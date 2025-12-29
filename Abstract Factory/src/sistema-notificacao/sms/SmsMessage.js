"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SmsMessage = void 0;
// concrete class
var SmsMessage = /** @class */ (function () {
    function SmsMessage() {
    }
    SmsMessage.prototype.message = function () {
        return 'SMS text message.';
    };
    return SmsMessage;
}());
exports.SmsMessage = SmsMessage;
