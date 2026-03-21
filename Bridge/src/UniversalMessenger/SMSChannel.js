"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SMSChannel = void 0;
var SMSChannel = /** @class */ (function () {
    function SMSChannel() {
    }
    SMSChannel.prototype.sendData = function (message) {
        console.log("SMS: ".concat(message));
    };
    return SMSChannel;
}());
exports.SMSChannel = SMSChannel;
