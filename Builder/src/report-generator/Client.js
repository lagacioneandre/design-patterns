"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
var ReportConfigBuilder_1 = require("./builders/ReportConfigBuilder");
var ReportDirector_1 = require("./ReportDirector");
var Client = /** @class */ (function () {
    function Client() {
    }
    Client.prototype.createAuditReport = function () {
        var builder = new ReportConfigBuilder_1.ReportConfigBuilder();
        var director = new ReportDirector_1.ReportDirector();
        var report = director.createAuditReport(builder);
        report.printReport();
    };
    Client.prototype.createFinancialReport = function () {
        var builder = new ReportConfigBuilder_1.ReportConfigBuilder();
        var director = new ReportDirector_1.ReportDirector();
        var report = director.createFinancialReport(builder);
        report.printReport();
    };
    Client.prototype.createWebReport = function () {
        var builder = new ReportConfigBuilder_1.ReportConfigBuilder();
        var director = new ReportDirector_1.ReportDirector();
        var report = director.createWebReport(builder);
        report.printReport();
    };
    Client.prototype.createReportWithoutTitle = function () {
        try {
            var builder = new ReportConfigBuilder_1.ReportConfigBuilder();
            var director = new ReportDirector_1.ReportDirector();
            var report = director.createReportWithoutTitle(builder);
            report.printReport();
        }
        catch (error) {
            console.error(error.message);
        }
    };
    Client.prototype.createReportWithoutAuthor = function () {
        try {
            var builder = new ReportConfigBuilder_1.ReportConfigBuilder();
            var director = new ReportDirector_1.ReportDirector();
            var report = director.createReportWithoutAuthor(builder);
            report.printReport();
        }
        catch (error) {
            console.error(error.message);
        }
    };
    Client.prototype.createReportWithoutExportFormat = function () {
        try {
            var builder = new ReportConfigBuilder_1.ReportConfigBuilder();
            var director = new ReportDirector_1.ReportDirector();
            var report = director.createReportWithoutExportFormat(builder);
            report.printReport();
        }
        catch (error) {
            console.error(error.message);
        }
    };
    Client.prototype.createReportWithHeaderAndWithoutLogoUrl = function () {
        try {
            var builder = new ReportConfigBuilder_1.ReportConfigBuilder();
            var director = new ReportDirector_1.ReportDirector();
            var report = director.createReportWithHeaderAndWithoutLogoUrl(builder);
            report.printReport();
        }
        catch (error) {
            console.error(error.message);
        }
    };
    Client.prototype.createReportWithHeaderAndWithoutHeaderText = function () {
        try {
            var builder = new ReportConfigBuilder_1.ReportConfigBuilder();
            var director = new ReportDirector_1.ReportDirector();
            var report = director.createReportWithHeaderAndWithoutHeaderText(builder);
            report.printReport();
        }
        catch (error) {
            console.error(error.message);
        }
    };
    Client.prototype.createReportWithFooterAndWithoutFooterTemplate = function () {
        try {
            var builder = new ReportConfigBuilder_1.ReportConfigBuilder();
            var director = new ReportDirector_1.ReportDirector();
            var report = director.createReportWithFooterAndWithoutFooterTemplate(builder);
            report.printReport();
        }
        catch (error) {
            console.error(error.message);
        }
    };
    Client.prototype.createPDFReportWithCompressionLevelLessThanOne = function () {
        try {
            var builder = new ReportConfigBuilder_1.ReportConfigBuilder();
            var director = new ReportDirector_1.ReportDirector();
            var report = director.createPDFReportWithCompressionLevelLessThanOne(builder);
            report.printReport();
        }
        catch (error) {
            console.error(error.message);
        }
    };
    Client.prototype.createPDFReportWithCompressionLevelMoreThanNine = function () {
        try {
            var builder = new ReportConfigBuilder_1.ReportConfigBuilder();
            var director = new ReportDirector_1.ReportDirector();
            var report = director.createPDFReportWithCompressionLevelMoreThanNine(builder);
            report.printReport();
        }
        catch (error) {
            console.error(error.message);
        }
    };
    return Client;
}());
exports.Client = Client;
(function () {
    var client = new Client();
    client.createAuditReport();
    client.createFinancialReport();
    client.createWebReport();
    client.createReportWithoutTitle();
    client.createReportWithoutAuthor();
    client.createReportWithoutExportFormat();
    client.createReportWithHeaderAndWithoutLogoUrl();
    client.createReportWithHeaderAndWithoutHeaderText();
    client.createReportWithFooterAndWithoutFooterTemplate();
    client.createPDFReportWithCompressionLevelLessThanOne();
    client.createPDFReportWithCompressionLevelMoreThanNine();
})();
