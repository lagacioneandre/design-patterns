"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserProfile = void 0;
var UserProfile = /** @class */ (function () {
    function UserProfile(name, email) {
        this.name = name;
        this.email = email;
    }
    UserProfile.createProfile = function (name, email) {
        return new UserProfile(name, email);
    };
    UserProfile.prototype.getProfileData = function () {
        console.log('--- User profile ---');
        console.log("Name: ".concat(this.name));
        console.log("Email: ".concat(this.email));
        console.log("Photo URL: ".concat(this.photoUrl || 'Not defined'));
        console.log("Password: ".concat(this.hashPass || 'Not defined'));
    };
    return UserProfile;
}());
exports.UserProfile = UserProfile;
