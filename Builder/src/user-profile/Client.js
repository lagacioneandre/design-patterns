"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ProfileBuilder_1 = require("./ProfileBuilder");
var Client = /** @class */ (function () {
    function Client() {
    }
    Client.prototype.buildCompleteProfile = function () {
        var profile = new ProfileBuilder_1.ProfileBuilder('Andre', 'email@mail.com')
            .setCredentials('password')
            .setPhotoUrl('photo-url')
            .build();
        profile.getProfileData();
    };
    Client.prototype.buildSimpleProfile = function () {
        var profile = new ProfileBuilder_1.ProfileBuilder('Dani', 'dani@email.com')
            .build();
        profile.getProfileData();
    };
    return Client;
}());
(function () {
    var client = new Client();
    client.buildCompleteProfile();
    client.buildSimpleProfile();
})();
