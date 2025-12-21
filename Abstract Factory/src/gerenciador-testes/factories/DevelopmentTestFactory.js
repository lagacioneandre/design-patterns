"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DevelopmentTestFactory = void 0;
var MockAuthService_1 = require("../development/MockAuthService");
var MockDatabase_1 = require("../development/MockDatabase");
// concrete factory
var DevelopmentTestFactory = /** @class */ (function () {
    function DevelopmentTestFactory() {
    }
    DevelopmentTestFactory.prototype.authenticate = function () {
        return new MockAuthService_1.MockAuthService();
    };
    DevelopmentTestFactory.prototype.databaseConnection = function () {
        return new MockDatabase_1.MockDatabase();
    };
    return DevelopmentTestFactory;
}());
exports.DevelopmentTestFactory = DevelopmentTestFactory;
