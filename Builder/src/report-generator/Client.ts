import { ReportConfigBuilder } from "./builders/ReportConfigBuilder";
import { ReportDirector } from "./ReportDirector";

export class Client {
    createAuditReport() {
        const builder = new ReportConfigBuilder();
        const director = new ReportDirector();
        const report = director.createAuditReport(builder);
        report.printReport();
    }

    createFinancialReport() {
        const builder = new ReportConfigBuilder();
        const director = new ReportDirector();
        const report = director.createFinancialReport(builder);
        report.printReport();
    }

    createWebReport() {
        const builder = new ReportConfigBuilder();
        const director = new ReportDirector();
        const report = director.createWebReport(builder);
        report.printReport();
    }

    createReportWithoutTitle() {
        try {
            const builder = new ReportConfigBuilder();
            const director = new ReportDirector();
            const report = director.createReportWithoutTitle(builder);
        report.printReport();
        } catch (error) {
            console.error((error as Error).message);
        }
    }

    createReportWithoutAuthor() {
        try {
            const builder = new ReportConfigBuilder();
            const director = new ReportDirector();
            const report = director.createReportWithoutAuthor(builder);
        report.printReport();
        } catch (error) {
            console.error((error as Error).message);
        }
    }

    createReportWithoutExportFormat() {
        try {
            const builder = new ReportConfigBuilder();
            const director = new ReportDirector();
            const report = director.createReportWithoutExportFormat(builder);
        report.printReport();
        } catch (error) {
            console.error((error as Error).message);
        }
    }

    createReportWithHeaderAndWithoutLogoUrl() {
        try {
            const builder = new ReportConfigBuilder();
            const director = new ReportDirector();
            const report = director.createReportWithHeaderAndWithoutLogoUrl(builder);
        report.printReport();
        } catch (error) {
            console.error((error as Error).message);
        }
    }

    createReportWithHeaderAndWithoutHeaderText() {
        try {
            const builder = new ReportConfigBuilder();
            const director = new ReportDirector();
            const report = director.createReportWithHeaderAndWithoutHeaderText(builder);
        report.printReport();
        } catch (error) {
            console.error((error as Error).message);
        }
    }

    createReportWithFooterAndWithoutFooterTemplate() {
        try {
            const builder = new ReportConfigBuilder();
            const director = new ReportDirector();
            const report = director.createReportWithFooterAndWithoutFooterTemplate(builder);
        report.printReport();
        } catch (error) {
            console.error((error as Error).message);
        }
    }

    createPDFReportWithCompressionLevelLessThanOne() {
        try {
            const builder = new ReportConfigBuilder();
            const director = new ReportDirector();
            const report = director.createPDFReportWithCompressionLevelLessThanOne(builder);
        report.printReport();
        } catch (error) {
            console.error((error as Error).message);
        }
    }

    createPDFReportWithCompressionLevelMoreThanNine() {
        try {
            const builder = new ReportConfigBuilder();
            const director = new ReportDirector();
            const report = director.createPDFReportWithCompressionLevelMoreThanNine(builder);
        report.printReport();
        } catch (error) {
            console.error((error as Error).message);
        }
    }
}

(function() {
    const client = new Client();
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