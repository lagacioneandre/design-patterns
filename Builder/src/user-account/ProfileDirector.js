"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileDirector = void 0;
var ProfileDirector = /** @class */ (function () {
    function ProfileDirector() {
    }
    ProfileDirector.prototype.createBasicUser = function (builder, _a) {
        var id = _a.id, name = _a.name, email = _a.email;
        return builder
            .setUserId(id)
            .setUserName(name)
            .setUserEmail(email)
            .build();
    };
    ProfileDirector.prototype.createCompleteUser = function (builder, _a) {
        var id = _a.id, name = _a.name, email = _a.email;
        return builder
            .setUserId(id)
            .setUserName(name)
            .setUserEmail(email)
            .setProfilePictureUrl('url-profile-picture')
            .isUserVerified(true)
            .setRoles(['ADMIN', 'CTO'])
            .build();
    };
    return ProfileDirector;
}());
exports.ProfileDirector = ProfileDirector;
