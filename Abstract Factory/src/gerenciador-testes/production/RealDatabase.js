"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RealDatabase = void 0;
// concrete class
var RealDatabase = /** @class */ (function () {
    function RealDatabase() {
    }
    RealDatabase.prototype.connect = function () {
        return 'Conncected to real database.';
    };
    return RealDatabase;
}());
exports.RealDatabase = RealDatabase;
