"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MockAuthService = void 0;
var MockAuthService = /** @class */ (function () {
    function MockAuthService() {
    }
    MockAuthService.prototype.authenticate = function () {
        return 'Development authenticate service.';
    };
    return MockAuthService;
}());
exports.MockAuthService = MockAuthService;
