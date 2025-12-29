"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailNotificationFactory = void 0;
var EmailMessage_1 = require("../email/EmailMessage");
var SmtpService_1 = require("../email/SmtpService");
// concrete factory
var EmailNotificationFactory = /** @class */ (function () {
    function EmailNotificationFactory() {
    }
    EmailNotificationFactory.prototype.getMessage = function () {
        return new EmailMessage_1.EmailMessage();
    };
    EmailNotificationFactory.prototype.getSender = function () {
        return new SmtpService_1.SmtpService();
    };
    return EmailNotificationFactory;
}());
exports.EmailNotificationFactory = EmailNotificationFactory;
