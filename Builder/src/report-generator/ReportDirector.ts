import { ReportConfigBuilder } from "./builders/ReportConfigBuilder";

export class ReportDirector {
    createAuditReport(builder: ReportConfigBuilder) {
        return builder
            .setTitle('Audit report')
            .setAuthor('Audit system')
            .setExportFormat("CSV")
            .build();
    }

    createFinancialReport(builder: ReportConfigBuilder) {
        builder
            .setTitle('Financial report')
            .setAuthor('Financial system')
            .setExportFormat('PDF')
            .setCompressionLevel(9);
        builder
            .withHeader()
            .setHeadertext('Confidential - Internal only')
            .setLogoUrl('https://www.logourl.com')
        builder
            .withFooter()
            .setFooterTemplate(`Page X of XX`)
        return builder.build();
    }

    createWebReport(builder: ReportConfigBuilder) {
        return builder
            .setTitle('Web report')
            .setAuthor('Web system')
            .setExportFormat('JSON')
            .build();
    }

    createReportWithoutTitle(builder: ReportConfigBuilder) {
        return builder
            .setAuthor('Broken system')
            .setExportFormat('CSV')
            .build();
    }

    createReportWithoutAuthor(builder: ReportConfigBuilder) {
        return builder
            .setTitle('Report without author')
            .setExportFormat('CSV')
            .build();
    }

    createReportWithoutExportFormat(builder: ReportConfigBuilder) {
        return builder
            .setTitle('Report without export format')
            .setAuthor('Report system')
            .build();
    }

    createReportWithHeaderAndWithoutLogoUrl(builder: ReportConfigBuilder) {
        builder
            .setTitle('Report with header and without logo URL')
            .setAuthor('Report system')
            .setExportFormat('JSON');
        builder
            .withHeader()
            .setHeadertext('Header report text');
        return builder.build();
    }

    createReportWithHeaderAndWithoutHeaderText(builder: ReportConfigBuilder) {
        builder
            .setTitle('Report with header and without header text')
            .setAuthor('Report system')
            .setExportFormat('CSV');
        builder
            .withHeader()
            .setLogoUrl('https://logourl.com');
        return builder.build();
    }

    createReportWithFooterAndWithoutFooterTemplate(builder: ReportConfigBuilder) {
        builder
            .setTitle('Report with footer and without footer template')
            .setAuthor('Report system')
            .setExportFormat('CSV');
        builder
            .withFooter();
        return builder.build();
    }

    createPDFReportWithCompressionLevelLessThanOne(builder: ReportConfigBuilder) {
        return builder
            .setTitle('PDF report with compression level less than one')
            .setAuthor('Report system')
            .setExportFormat('PDF')
            .setCompressionLevel(0)
            .build();
    }

    createPDFReportWithCompressionLevelMoreThanNine(builder: ReportConfigBuilder) {
        return builder
            .setTitle('PDF report with compression level more than nine')
            .setAuthor('Report system')
            .setExportFormat('PDF')
            .setCompressionLevel(10)
            .build();
    }
}