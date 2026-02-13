"use strict";
// 2. produto concreto
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ship = void 0;
var Ship = /** @class */ (function () {
    function Ship() {
    }
    Ship.prototype.deliver = function () {
        console.log('Entrega via mar em container.');
    };
    return Ship;
}());
exports.Ship = Ship;
