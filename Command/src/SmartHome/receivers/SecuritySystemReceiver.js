"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecuritySystemReceiver = void 0;
var SecuritySystemReceiver = /** @class */ (function () {
    function SecuritySystemReceiver() {
        this.isLocked = false;
    }
    SecuritySystemReceiver.prototype.lockAll = function () {
        console.log('Locking all dors!');
        this.isLocked = true;
        return true;
    };
    SecuritySystemReceiver.prototype.unlockAll = function () {
        console.log('Unlocking all dors!');
        this.isLocked = false;
        return true;
    };
    Object.defineProperty(SecuritySystemReceiver.prototype, "currentState", {
        get: function () {
            return this.isLocked;
        },
        enumerable: false,
        configurable: true
    });
    return SecuritySystemReceiver;
}());
exports.SecuritySystemReceiver = SecuritySystemReceiver;
