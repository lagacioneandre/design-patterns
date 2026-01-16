"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportDirector = void 0;
var ReportDirector = /** @class */ (function () {
    function ReportDirector() {
    }
    ReportDirector.prototype.createAuditReport = function (builder) {
        return builder
            .setTitle('Audit report')
            .setAuthor('Audit system')
            .setExportFormat("CSV")
            .build();
    };
    ReportDirector.prototype.createFinancialReport = function (builder) {
        builder
            .setTitle('Financial report')
            .setAuthor('Financial system')
            .setExportFormat('PDF')
            .setCompressionLevel(9);
        builder
            .withHeader()
            .setHeadertext('Confidential - Internal only')
            .setLogoUrl('https://www.logourl.com');
        builder
            .withFooter()
            .setFooterTemplate("Page X of XX");
        return builder.build();
    };
    ReportDirector.prototype.createWebReport = function (builder) {
        return builder
            .setTitle('Web report')
            .setAuthor('Web system')
            .setExportFormat('JSON')
            .build();
    };
    ReportDirector.prototype.createReportWithoutTitle = function (builder) {
        return builder
            .setAuthor('Broken system')
            .setExportFormat('CSV')
            .build();
    };
    ReportDirector.prototype.createReportWithoutAuthor = function (builder) {
        return builder
            .setTitle('Report without author')
            .setExportFormat('CSV')
            .build();
    };
    ReportDirector.prototype.createReportWithoutExportFormat = function (builder) {
        return builder
            .setTitle('Report without export format')
            .setAuthor('Report system')
            .build();
    };
    ReportDirector.prototype.createReportWithHeaderAndWithoutLogoUrl = function (builder) {
        builder
            .setTitle('Report with header and without logo URL')
            .setAuthor('Report system')
            .setExportFormat('JSON');
        builder
            .withHeader()
            .setHeadertext('Header report text');
        return builder.build();
    };
    ReportDirector.prototype.createReportWithHeaderAndWithoutHeaderText = function (builder) {
        builder
            .setTitle('Report with header and without header text')
            .setAuthor('Report system')
            .setExportFormat('CSV');
        builder
            .withHeader()
            .setLogoUrl('https://logourl.com');
        return builder.build();
    };
    ReportDirector.prototype.createReportWithFooterAndWithoutFooterTemplate = function (builder) {
        builder
            .setTitle('Report with footer and without footer template')
            .setAuthor('Report system')
            .setExportFormat('CSV');
        builder
            .withFooter();
        return builder.build();
    };
    ReportDirector.prototype.createPDFReportWithCompressionLevelLessThanOne = function (builder) {
        return builder
            .setTitle('PDF report with compression level less than one')
            .setAuthor('Report system')
            .setExportFormat('PDF')
            .setCompressionLevel(0)
            .build();
    };
    ReportDirector.prototype.createPDFReportWithCompressionLevelMoreThanNine = function (builder) {
        return builder
            .setTitle('PDF report with compression level more than nine')
            .setAuthor('Report system')
            .setExportFormat('PDF')
            .setCompressionLevel(10)
            .build();
    };
    return ReportDirector;
}());
exports.ReportDirector = ReportDirector;
