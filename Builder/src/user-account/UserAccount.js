"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAccount = void 0;
var UserAccount = /** @class */ (function () {
    function UserAccount(_a) {
        var userId = _a.userId, userName = _a.userName, email = _a.email, _b = _a.isVerified, isVerified = _b === void 0 ? false : _b, _c = _a.roles, roles = _c === void 0 ? [] : _c, _d = _a.profilePictureUrl, profilePictureUrl = _d === void 0 ? null : _d;
        this.isVerified = false;
        this.roles = [];
        this.profilePictureUrl = null;
        this.userId = userId;
        this.userName = userName;
        this.email = email;
        this.isVerified = isVerified;
        this.roles = Object.freeze(__spreadArray([], roles, true));
        this.profilePictureUrl = profilePictureUrl;
    }
    UserAccount.prototype.getUser = function () {
        console.log('=== User created ===');
        console.log("User ID: ".concat(this.userId));
        console.log("User name: ".concat(this.userName));
        console.log("Email: ".concat(this.email));
        console.log("Is verified: ".concat(this.isVerified ? 'Yes' : 'No'));
        console.log("Profile picture: ".concat(this.profilePictureUrl));
        console.log("Roles: ".concat(this.roles.forEach(function (role) { return role; })));
    };
    return UserAccount;
}());
exports.UserAccount = UserAccount;
