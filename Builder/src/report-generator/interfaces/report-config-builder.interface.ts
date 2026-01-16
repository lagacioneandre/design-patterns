import { FooterBuilder } from "../builders/FooterBuilder";
import { HeaderBuilder } from "../builders/HeaderBuilder";
import { ReportConfig } from "../ReportConfig";
import { ExportFormat } from "../types/export-format.type";

export interface IReportConfig {
    setTitle(title: string): this;
    setAuthor(author: string): this;
    setExportFormat(exportFormat: ExportFormat): this;
    setCompressionLevel(compressionLevel: number): this;
    withHeader(): HeaderBuilder;
    withFooter(): FooterBuilder;
    build(): ReportConfig;
}