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
exports.UserAccountBuilder = void 0;
var UserAccount_1 = require("./UserAccount");
var UserAccountBuilder = /** @class */ (function () {
    function UserAccountBuilder() {
        this.isVerified = false;
        this.roles = [];
        this.profilePictureUrl = null;
        this.TOTAL_NAME_LENGTH = 50;
        this.TOTAL_UUID_LENGTH = 8;
    }
    UserAccountBuilder.prototype.setUserId = function (id) {
        this.userId = id;
        return this;
    };
    UserAccountBuilder.prototype.setUserName = function (name) {
        this.userName = name;
        return this;
    };
    UserAccountBuilder.prototype.setUserEmail = function (email) {
        this.email = email;
        return this;
    };
    UserAccountBuilder.prototype.isUserVerified = function (isVerified) {
        this.isVerified = isVerified;
        return this;
    };
    UserAccountBuilder.prototype.setRoles = function (roles) {
        this.roles = __spreadArray([], roles, true);
        return this;
    };
    UserAccountBuilder.prototype.setProfilePictureUrl = function (url) {
        this.profilePictureUrl = url || null;
        return this;
    };
    UserAccountBuilder.prototype.build = function () {
        var isValidName = this.validateUserName(this.userName);
        var isValidId = this.validateUUID(this.userId);
        var isValidEmail = this.validateEmail(this.email);
        if (!isValidName) {
            throw new Error("Name must to be less than ".concat(this.TOTAL_NAME_LENGTH, " characters."));
        }
        if (!isValidId) {
            throw new Error("ID must to be more than ".concat(this.TOTAL_UUID_LENGTH, " characters."));
        }
        if (!isValidEmail) {
            throw new Error("Email is invalid");
        }
        var userAccountData = {
            userId: this.userId,
            userName: this.userName,
            email: this.email,
            isVerified: this.isVerified,
            roles: this.roles,
            profilePictureUrl: this.profilePictureUrl,
        };
        return new UserAccount_1.UserAccount(userAccountData);
    };
    UserAccountBuilder.prototype.validateUserName = function (name) {
        return name.length < this.TOTAL_NAME_LENGTH;
    };
    UserAccountBuilder.prototype.validateUUID = function (id) {
        return id.length >= this.TOTAL_UUID_LENGTH;
    };
    UserAccountBuilder.prototype.validateEmail = function (email) {
        var regex = /@/;
        return email.length && regex.test(email);
    };
    return UserAccountBuilder;
}());
exports.UserAccountBuilder = UserAccountBuilder;
