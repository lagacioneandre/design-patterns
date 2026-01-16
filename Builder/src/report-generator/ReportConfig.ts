import { ExportFormat } from "./types/export-format.type";
import { Footer } from "./types/footer.type";
import { Header } from "./types/header.type";
import { ReportConfigType } from "./types/report-config.type";

export class ReportConfig {
    private readonly title: string;
    private readonly author: string;
    private readonly creationDate: Date;
    private readonly header: Header;
    private readonly footer: Footer;
    private readonly exportFormat: ExportFormat;
    private readonly compressionLevel: number | undefined;

    constructor ({
        title,
        author,
        creationDate,
        header,
        footer,
        exportFormat,
        compressionLevel,
    }: ReportConfigType) {
        this.title = title;
        this.author = author;
        this.creationDate = creationDate;
        this.header = header;
        this.footer = footer;
        this.exportFormat = exportFormat;
        this.compressionLevel = compressionLevel;
    }

    printReport() {
        console.log("==========================================");
        console.log(`Relatório: ${this.title} (por ${this.author})`);
        console.log(`Data de Criação: ${this.creationDate.toLocaleDateString()}`);
        console.log("------------------------------------------");
        console.log(`Header Ativo: ${this.header.showHeader ? 'Sim' : 'Não'}`);
        if (this.header.showHeader) {
            console.log(`  - Logo URL: ${this.header.logoUrl}`);
            console.log(`  - Texto: ${this.header.headerText}`);
        }
        console.log(`Footer Ativo: ${this.footer.showFooter ? 'Sim' : 'Não'}`);
        if (this.footer.showFooter) {
            console.log(`  - Template: ${this.footer.footerTemplate}`);
        }
        console.log("------------------------------------------");
        console.log(`Formato de Exportação: ${this.exportFormat}`);
        if (this.exportFormat === 'PDF') {
            console.log(`  - Nível de Compressão: ${this.compressionLevel}`);
        }
        console.log("==========================================");
    }
}