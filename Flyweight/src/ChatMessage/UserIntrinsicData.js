"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserIntrinsicData = void 0;
var UserIntrinsicData = /** @class */ (function () {
    function UserIntrinsicData(username, avatar, headerColor) {
        this.username = username;
        this.avatar = avatar;
        this.headerColor = headerColor;
    }
    UserIntrinsicData.prototype.display = function (messageText, timestamp) {
        console.log("Imprimindo mensagem: ".concat(messageText, " em ").concat(timestamp, " enviado por ").concat(this.username, ", ").concat(this.avatar, ", ").concat(this.headerColor));
    };
    return UserIntrinsicData;
}());
exports.UserIntrinsicData = UserIntrinsicData;
