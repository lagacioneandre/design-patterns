import { IReportConfig } from "../interfaces/report-config-builder.interface";
import { ReportConfig } from "../ReportConfig";
import { ExportFormat } from "../types/export-format.type";
import { ReportConfigType } from "../types/report-config.type";
import { FooterBuilder } from "./FooterBuilder";
import { HeaderBuilder } from "./HeaderBuilder";

export class ReportConfigBuilder implements IReportConfig {
    private title!: string;
    private author!: string;
    private creationDate = new Date();
    private exportFormat!: ExportFormat;
    private compressionLevel!: number | undefined;
    private headerBuilder = new HeaderBuilder();
    private footerBuilder = new FooterBuilder();

    setAuthor(author: string): this {
        this.author = author;
        return this;
    }

    setTitle(title: string): this {
        this.title = title;
        return this;
    }

    setCompressionLevel(compressionLevel: number): this {
        this.compressionLevel = compressionLevel;
        return this;
    }

    setExportFormat(exportFormat: ExportFormat): this {
        this.exportFormat = exportFormat;
        if (this.exportFormat !== 'PDF') {
            this.compressionLevel = undefined;
        }
        return this;
    }

    withFooter(): FooterBuilder {
        this.footerBuilder.setShowFooter(true);
        return this.footerBuilder;
        
    }

    withHeader(): HeaderBuilder {
        this.headerBuilder.setShowHeader(true);
        return this.headerBuilder;
    }

    build(): ReportConfig {
        this.validateRequiredData();
        this.validateCompressionLevel();
        const headerData = this.headerBuilder.build();
        const footerData = this.footerBuilder.build();
        const reporConfigData: ReportConfigType = {
            title: this.title,
            author: this.author, 
            creationDate: this.creationDate,
            header: headerData,
            footer: footerData,
            exportFormat: this.exportFormat,
            compressionLevel: this.compressionLevel,
        }
        return new ReportConfig(reporConfigData);
    }

    private validateRequiredData() {
        const hasTitle = !!this.title?.trim().length;
        if (!hasTitle) {
            throw new Error('The title is required!');
        }
        
        const hasAuthor = !!this.author?.trim().length;
        if (!hasAuthor) {
            throw new Error('The author is required!');
        }

        const hasExportFormat = !!this.exportFormat?.trim().length;
        if (!hasExportFormat) {
            throw new Error('Export format is required!');
        }
    }

    private validateCompressionLevel() {
        if (this.exportFormat !== 'PDF') {
            return;
        }

        if (!this.compressionLevel) {
            throw new Error('Compression level is required for PDF format!');
        }

        if (this.compressionLevel < 1 || this.compressionLevel > 9) {
            throw new Error('Compression level needs to be between 1 and 9!');
        }
    }
}