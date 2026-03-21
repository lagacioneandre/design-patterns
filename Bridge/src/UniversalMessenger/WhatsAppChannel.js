"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WhatsAppChannel = void 0;
var WhatsAppChannel = /** @class */ (function () {
    function WhatsAppChannel() {
    }
    WhatsAppChannel.prototype.sendData = function (message) {
        console.log("WhatsApp: ".concat(message));
    };
    return WhatsAppChannel;
}());
exports.WhatsAppChannel = WhatsAppChannel;
