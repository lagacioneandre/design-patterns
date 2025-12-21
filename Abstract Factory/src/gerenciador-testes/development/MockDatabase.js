"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MockDatabase = void 0;
// concrete product
var MockDatabase = /** @class */ (function () {
    function MockDatabase() {
    }
    MockDatabase.prototype.connect = function () {
        return 'Connected to mock database.';
    };
    return MockDatabase;
}());
exports.MockDatabase = MockDatabase;
