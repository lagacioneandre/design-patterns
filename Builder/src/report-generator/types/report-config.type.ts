import { ExportFormat } from "./export-format.type";
import { Footer } from "./footer.type";
import { Header } from "./header.type";

export type ReportConfigType = {
    title: string;
    author: string;
    creationDate: Date;
    header: Header;
    footer: Footer;
    exportFormat: ExportFormat;
    compressionLevel: number | undefined;
}