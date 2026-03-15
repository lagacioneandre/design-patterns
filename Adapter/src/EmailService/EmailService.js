"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailService = void 0;
var EmailService = /** @class */ (function () {
    function EmailService(smtpService) {
        this.smtpService = smtpService;
    }
    EmailService.prototype.send = function (to, subject, body) {
        console.log('--- Enviando email ---');
        this.smtpService.setReceiver(to);
        this.smtpService.setHeader(subject);
        this.smtpService.setMessageContent(body);
        this.smtpService.dispatch();
    };
    return EmailService;
}());
exports.EmailService = EmailService;
