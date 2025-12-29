"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendNotification = void 0;
// client
var SendNotification = /** @class */ (function () {
    function SendNotification(factory) {
        this.message = factory.getMessage();
        this.sender = factory.getSender();
    }
    SendNotification.prototype.send = function () {
        console.log(this.message.message());
        console.log(this.sender.connect());
    };
    return SendNotification;
}());
exports.SendNotification = SendNotification;
