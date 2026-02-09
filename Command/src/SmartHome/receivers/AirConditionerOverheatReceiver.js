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
exports.AirConditionerOverheatReceiver = void 0;
var AirConditionerReceiver_1 = require("./AirConditionerReceiver");
var AirConditionerOverheatReceiver = /** @class */ (function (_super) {
    __extends(AirConditionerOverheatReceiver, _super);
    function AirConditionerOverheatReceiver() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AirConditionerOverheatReceiver.prototype.powerOff = function () {
        console.log('ERROR: Hardware Overheat!');
        return false;
    };
    return AirConditionerOverheatReceiver;
}(AirConditionerReceiver_1.AirConditionerReceiver));
exports.AirConditionerOverheatReceiver = AirConditionerOverheatReceiver;
