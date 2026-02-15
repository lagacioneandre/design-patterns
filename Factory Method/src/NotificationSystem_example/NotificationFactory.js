"use strict";
// abstract class
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationFactory = void 0;
var NotificationFactory = /** @class */ (function () {
    function NotificationFactory() {
    }
    // Logica de negocio que usa o objeto criado
    NotificationFactory.prototype.notify = function (message) {
        var notification = this.createNotification();
        notification.send(message);
    };
    return NotificationFactory;
}());
exports.NotificationFactory = NotificationFactory;
