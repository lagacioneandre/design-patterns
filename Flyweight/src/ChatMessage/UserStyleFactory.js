"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserStyleFactory = void 0;
var UserIntrinsicData_1 = require("./UserIntrinsicData");
var UserStyleFactory = /** @class */ (function () {
    function UserStyleFactory() {
    }
    UserStyleFactory.getUserData = function (username, avatar, headerColor) {
        var key = "".concat(username, "_").concat(avatar, "_").concat(headerColor);
        if (!this.usersMessage[key]) {
            console.log("[Factory]: Criando um novo usuario no chat: ".concat(username));
            this.usersMessage[key] = new UserIntrinsicData_1.UserIntrinsicData(username, avatar, headerColor);
        }
        return this.usersMessage[key];
    };
    UserStyleFactory.usersMessage = {};
    return UserStyleFactory;
}());
exports.UserStyleFactory = UserStyleFactory;
