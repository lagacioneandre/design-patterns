"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttributeDelta = void 0;
var AttributeDelta = /** @class */ (function () {
    function AttributeDelta(attribute, 
    // readonly delta: number | string,
    prevValue) {
        this.attribute = attribute;
        this.prevValue = prevValue;
    }
    return AttributeDelta;
}());
exports.AttributeDelta = AttributeDelta;
