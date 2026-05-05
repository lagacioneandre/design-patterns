"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatMessage = void 0;
var ChatMessage = /** @class */ (function () {
    function ChatMessage(text, timestamp, userStyle) {
        this.text = text;
        this.timestamp = timestamp;
        this.userStyle = userStyle;
    }
    ChatMessage.prototype.print = function () {
        this.userStyle.display(this.text, this.timestamp);
    };
    return ChatMessage;
}());
exports.ChatMessage = ChatMessage;
