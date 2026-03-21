"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EmailChannel_1 = require("./EmailChannel");
var EmergencyNotification_1 = require("./EmergencyNotification");
var SMSChannel_1 = require("./SMSChannel");
var UserNotification_1 = require("./UserNotification");
var WhatsAppChannel_1 = require("./WhatsAppChannel");
var Client = /** @class */ (function () {
    function Client() {
    }
    Client.prototype.execute = function () {
        var emailChannel = new EmailChannel_1.EmailChannel();
        var smsChannel = new SMSChannel_1.SMSChannel();
        var whatsAppChannel = new WhatsAppChannel_1.WhatsAppChannel();
        var userMessage = new UserNotification_1.UserNotification(emailChannel, 'Seu boleto chegou');
        var emergencyEmailMessage = new EmergencyNotification_1.EmergencyNotification(emailChannel, 'Tentativa de login suspeita');
        var emergencySMSMessage = new EmergencyNotification_1.EmergencyNotification(smsChannel, 'Tentativa de login suspeita');
        var emergencyWhatsAppMessage = new EmergencyNotification_1.EmergencyNotification(whatsAppChannel, 'Tentativa de login suspeita');
        userMessage.send();
        emergencyEmailMessage.send();
        emergencySMSMessage.send();
        emergencyWhatsAppMessage.send();
    };
    return Client;
}());
(function () {
    new Client().execute();
})();
