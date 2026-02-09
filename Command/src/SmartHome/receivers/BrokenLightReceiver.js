"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrokenLightReceiver = void 0;
var LightReceiver_1 = require("./LightReceiver");
var BrokenLightReceiver = /** @class */ (function (_super) {
    __extends(BrokenLightReceiver, _super);
    function BrokenLightReceiver() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BrokenLightReceiver.prototype.turnOff = function () {
        console.log('ERROR: Light bulb is burnt out! Cannot turn off.');
        return false;
    };
    return BrokenLightReceiver;
}(LightReceiver_1.LightReceiver));
exports.BrokenLightReceiver = BrokenLightReceiver;
