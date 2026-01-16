"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FooterBuilder = void 0;
var FooterBuilder = /** @class */ (function () {
    function FooterBuilder() {
        this.showFooter = false;
    }
    FooterBuilder.prototype.setFooterTemplate = function (footerTemplate) {
        this.footerTemplate = footerTemplate;
        return this;
    };
    FooterBuilder.prototype.setShowFooter = function (showFooter) {
        this.showFooter = showFooter;
        return this;
    };
    FooterBuilder.prototype.build = function () {
        this.validateFooterData();
        return {
            showFooter: this.showFooter,
            footerTemplate: this.footerTemplate
        };
    };
    FooterBuilder.prototype.validateFooterData = function () {
        var _a;
        if (!this.showFooter) {
            return;
        }
        if (!this.footerTemplate || !((_a = this.footerTemplate) === null || _a === void 0 ? void 0 : _a.trim().length)) {
            throw new Error('Footer template is required!');
        }
    };
    return FooterBuilder;
}());
exports.FooterBuilder = FooterBuilder;
