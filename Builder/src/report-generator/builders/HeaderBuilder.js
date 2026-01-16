"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeaderBuilder = void 0;
var HeaderBuilder = /** @class */ (function () {
    function HeaderBuilder() {
        this.showHeader = false;
    }
    HeaderBuilder.prototype.setHeadertext = function (headerText) {
        this.headertext = headerText;
        return this;
    };
    HeaderBuilder.prototype.setLogoUrl = function (url) {
        this.logoUrl = url;
        return this;
    };
    HeaderBuilder.prototype.setShowHeader = function (show) {
        this.showHeader = show;
        return this;
    };
    HeaderBuilder.prototype.build = function () {
        this.validateHeaderData();
        return {
            showHeader: this.showHeader,
            headerText: this.headertext,
            logoUrl: this.logoUrl,
        };
    };
    HeaderBuilder.prototype.validateHeaderData = function () {
        var _a, _b;
        if (!this.showHeader) {
            return;
        }
        if (!this.logoUrl || !((_a = this.logoUrl) === null || _a === void 0 ? void 0 : _a.trim().length)) {
            throw new Error('Logo URL is required!');
        }
        if (!this.headertext || !((_b = this.headertext) === null || _b === void 0 ? void 0 : _b.trim().length)) {
            throw new Error('Header text is required!');
        }
    };
    return HeaderBuilder;
}());
exports.HeaderBuilder = HeaderBuilder;
