"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HtmlFactory = void 0;
var BodyHtml_1 = require("../HTML/BodyHtml");
var FooterHtml_1 = require("../HTML/FooterHtml");
var HeaderHtml_1 = require("../HTML/HeaderHtml");
// concrete factory
var HtmlFactory = /** @class */ (function () {
    function HtmlFactory() {
    }
    HtmlFactory.prototype.header = function () {
        return new HeaderHtml_1.HeaderHtml();
    };
    HtmlFactory.prototype.body = function () {
        return new BodyHtml_1.BodyHtml();
    };
    HtmlFactory.prototype.footer = function () {
        return new FooterHtml_1.FooterHtml();
    };
    return HtmlFactory;
}());
exports.HtmlFactory = HtmlFactory;
