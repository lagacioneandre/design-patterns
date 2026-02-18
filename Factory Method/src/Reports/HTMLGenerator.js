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
exports.HTMLGenerator = void 0;
var DocumentGenerator_1 = require("./DocumentGenerator");
var HTMLDocument_1 = require("./HTMLDocument");
var HTMLGenerator = /** @class */ (function (_super) {
    __extends(HTMLGenerator, _super);
    function HTMLGenerator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HTMLGenerator.prototype.createDocument = function () {
        return new HTMLDocument_1.HTMLDocument();
    };
    return HTMLGenerator;
}(DocumentGenerator_1.DocumentGenerator));
exports.HTMLGenerator = HTMLGenerator;
