"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileBuilder = void 0;
var UserProfile_1 = require("./UserProfile");
var ProfileBuilder = /** @class */ (function () {
    function ProfileBuilder(name, email) {
        this.userProfile = UserProfile_1.UserProfile.createProfile(name, email);
    }
    ProfileBuilder.prototype.setCredentials = function (pass) {
        this.userProfile.hashPass = pass;
        return this;
    };
    ProfileBuilder.prototype.setPhotoUrl = function (url) {
        this.userProfile.photoUrl = url;
        return this;
    };
    ProfileBuilder.prototype.build = function () {
        return this.userProfile;
    };
    return ProfileBuilder;
}());
exports.ProfileBuilder = ProfileBuilder;
