"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestManager = void 0;
// client
var TestManager = /** @class */ (function () {
    function TestManager(factory) {
        this.authService = factory.authenticate();
        this.databaseConnection = factory.databaseConnection();
    }
    TestManager.prototype.run = function () {
        console.log(this.authService.authenticate());
        console.log(this.databaseConnection.connect());
    };
    return TestManager;
}());
exports.TestManager = TestManager;
