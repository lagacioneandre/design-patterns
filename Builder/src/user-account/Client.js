"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
var ProfileDirector_1 = require("./ProfileDirector");
var UserAccountBuilder_1 = require("./UserAccountBuilder");
var Client = /** @class */ (function () {
    function Client() {
    }
    Client.prototype.createUser = function () {
        var buider = new UserAccountBuilder_1.UserAccountBuilder();
        var director = new ProfileDirector_1.ProfileDirector();
        var user = {
            name: 'Andre',
            id: '12345678',
            email: 'mail@mail.com'
        };
        var profile = director.createBasicUser(buider, user);
        profile.getUser();
    };
    Client.prototype.createCompleteUser = function () {
        var buider = new UserAccountBuilder_1.UserAccountBuilder();
        var director = new ProfileDirector_1.ProfileDirector();
        var user = {
            name: 'Teste',
            id: '12345678',
            email: 'mail@mail.com'
        };
        var profile = director.createCompleteUser(buider, user);
        profile.getUser();
    };
    Client.prototype.createUserWithWrongName = function () {
        try {
            var buider = new UserAccountBuilder_1.UserAccountBuilder();
            var director = new ProfileDirector_1.ProfileDirector();
            var user = {
                name: 'TesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTeste',
                id: '12345678',
                email: 'mail@mail.com'
            };
            var profile = director.createCompleteUser(buider, user);
            profile.getUser();
        }
        catch (error) {
            console.error(error);
        }
    };
    Client.prototype.createUserWithWrongId = function () {
        try {
            var buider = new UserAccountBuilder_1.UserAccountBuilder();
            var director = new ProfileDirector_1.ProfileDirector();
            var user = {
                name: 'Teste 2',
                id: '123456',
                email: 'mail@mail.com'
            };
            var profile = director.createCompleteUser(buider, user);
            profile.getUser();
        }
        catch (error) {
            console.error(error);
        }
    };
    Client.prototype.createUserWithWrongEmail = function () {
        try {
            var buider = new UserAccountBuilder_1.UserAccountBuilder();
            var director = new ProfileDirector_1.ProfileDirector();
            var user = {
                name: 'Teste 3',
                id: '123456',
                email: 'mail'
            };
            var profile = director.createCompleteUser(buider, user);
            profile.getUser();
        }
        catch (error) {
            console.error(error);
        }
    };
    return Client;
}());
exports.Client = Client;
(function () {
    var client = new Client();
    client.createUser();
    client.createCompleteUser();
    client.createUserWithWrongName();
    client.createUserWithWrongId();
    client.createUserWithWrongEmail();
})();
