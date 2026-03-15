"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EmailService_1 = require("./EmailService");
var SMTPService_1 = require("./SMTPService");
var Client = /** @class */ (function () {
    function Client(emailService) {
        this.emailService = emailService;
    }
    Client.prototype.execute = function () {
        this.emailService.send('receiver@email.com', 'Email Subject', 'Email body');
    };
    return Client;
}());
(function () {
    var legacy = new SMTPService_1.SMTPService();
    var adapter = new EmailService_1.EmailService(legacy);
    var client = new Client(adapter);
    client.execute();
})();
