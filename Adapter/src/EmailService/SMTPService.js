"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SMTPService = void 0;
var SMTPService = /** @class */ (function () {
    function SMTPService() {
    }
    SMTPService.prototype.setReceiver = function (email) {
        this.receiver = email;
    };
    SMTPService.prototype.setHeader = function (text) {
        this.subject = text;
    };
    SMTPService.prototype.setMessageContent = function (content) {
        this.content = content;
    };
    SMTPService.prototype.dispatch = function () {
        console.log("Receiver: ".concat(this.receiver));
        console.log("Subject: ".concat(this.subject));
        console.log("Content: ".concat(this.content));
        console.log('--- Email enviado ---');
    };
    return SMTPService;
}());
exports.SMTPService = SMTPService;
