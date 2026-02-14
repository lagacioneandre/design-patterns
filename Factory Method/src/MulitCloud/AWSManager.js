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
exports.AWSManager = void 0;
var AmazonEC2_1 = require("./AmazonEC2");
var CloudManager_1 = require("./CloudManager");
var AWSManager = /** @class */ (function (_super) {
    __extends(AWSManager, _super);
    function AWSManager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AWSManager.prototype.createServer = function () {
        return new AmazonEC2_1.AmazonEC2();
    };
    return AWSManager;
}(CloudManager_1.CloudManager));
exports.AWSManager = AWSManager;
