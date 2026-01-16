"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportConfigBuilder = void 0;
var ReportConfig_1 = require("../ReportConfig");
var FooterBuilder_1 = require("./FooterBuilder");
var HeaderBuilder_1 = require("./HeaderBuilder");
var ReportConfigBuilder = /** @class */ (function () {
    function ReportConfigBuilder() {
        this.creationDate = new Date();
        this.headerBuilder = new HeaderBuilder_1.HeaderBuilder();
        this.footerBuilder = new FooterBuilder_1.FooterBuilder();
    }
    ReportConfigBuilder.prototype.setAuthor = function (author) {
        this.author = author;
        return this;
    };
    ReportConfigBuilder.prototype.setTitle = function (title) {
        this.title = title;
        return this;
    };
    ReportConfigBuilder.prototype.setCompressionLevel = function (compressionLevel) {
        this.compressionLevel = compressionLevel;
        return this;
    };
    ReportConfigBuilder.prototype.setExportFormat = function (exportFormat) {
        this.exportFormat = exportFormat;
        if (this.exportFormat !== 'PDF') {
            this.compressionLevel = undefined;
        }
        return this;
    };
    ReportConfigBuilder.prototype.withFooter = function () {
        this.footerBuilder.setShowFooter(true);
        return this.footerBuilder;
    };
    ReportConfigBuilder.prototype.withHeader = function () {
        this.headerBuilder.setShowHeader(true);
        return this.headerBuilder;
    };
    ReportConfigBuilder.prototype.build = function () {
        this.validateRequiredData();
        this.validateCompressionLevel();
        var headerData = this.headerBuilder.build();
        var footerData = this.footerBuilder.build();
        var reporConfigData = {
            title: this.title,
            author: this.author,
            creationDate: this.creationDate,
            header: headerData,
            footer: footerData,
            exportFormat: this.exportFormat,
            compressionLevel: this.compressionLevel,
        };
        return new ReportConfig_1.ReportConfig(reporConfigData);
    };
    ReportConfigBuilder.prototype.validateRequiredData = function () {
        var _a, _b, _c;
        var hasTitle = !!((_a = this.title) === null || _a === void 0 ? void 0 : _a.trim().length);
        if (!hasTitle) {
            throw new Error('The title is required!');
        }
        var hasAuthor = (_b = this.author) === null || _b === void 0 ? void 0 : _b.trim().length;
        if (!hasAuthor) {
            throw new Error('The author is required!');
        }
        var hasExportFormat = !!((_c = this.exportFormat) === null || _c === void 0 ? void 0 : _c.trim().length);
        if (!hasExportFormat) {
            throw new Error('Export format is required!');
        }
    };
    ReportConfigBuilder.prototype.validateCompressionLevel = function () {
        if (this.exportFormat !== 'PDF') {
            return;
        }
        if (!this.compressionLevel) {
            throw new Error('Compression level is required for PDF format!');
        }
        if (this.compressionLevel < 1 || this.compressionLevel > 9) {
            throw new Error('Compression level needs to be between 1 and 9!');
        }
    };
    return ReportConfigBuilder;
}());
exports.ReportConfigBuilder = ReportConfigBuilder;
