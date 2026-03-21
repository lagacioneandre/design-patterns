"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailChannel = void 0;
var EmailChannel = /** @class */ (function () {
    function EmailChannel() {
    }
    EmailChannel.prototype.sendData = function (message) {
        console.log("Email: ".concat(message));
    };
    return EmailChannel;
}());
exports.EmailChannel = EmailChannel;
