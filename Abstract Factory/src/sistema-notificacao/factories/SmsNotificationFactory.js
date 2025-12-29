"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SmsNotificationFactory = void 0;
var SmsApiService_1 = require("../sms/SmsApiService");
var SmsMessage_1 = require("../sms/SmsMessage");
// abstract factory
var SmsNotificationFactory = /** @class */ (function () {
    function SmsNotificationFactory() {
    }
    SmsNotificationFactory.prototype.getMessage = function () {
        return new SmsMessage_1.SmsMessage();
    };
    SmsNotificationFactory.prototype.getSender = function () {
        return new SmsApiService_1.SmsApiService();
    };
    return SmsNotificationFactory;
}());
exports.SmsNotificationFactory = SmsNotificationFactory;
