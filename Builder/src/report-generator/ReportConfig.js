"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportConfig = void 0;
var ReportConfig = /** @class */ (function () {
    function ReportConfig(_a) {
        var title = _a.title, author = _a.author, creationDate = _a.creationDate, header = _a.header, footer = _a.footer, exportFormat = _a.exportFormat, compressionLevel = _a.compressionLevel;
        this.title = title;
        this.author = author;
        this.creationDate = creationDate;
        this.header = header;
        this.footer = footer;
        this.exportFormat = exportFormat;
        this.compressionLevel = compressionLevel;
    }
    ReportConfig.prototype.printReport = function () {
        console.log("==========================================");
        console.log("Relat\u00F3rio: ".concat(this.title, " (por ").concat(this.author, ")"));
        console.log("Data de Cria\u00E7\u00E3o: ".concat(this.creationDate.toLocaleDateString()));
        console.log("------------------------------------------");
        console.log("Header Ativo: ".concat(this.header.showHeader ? 'Sim' : 'Não'));
        if (this.header.showHeader) {
            console.log("  - Logo URL: ".concat(this.header.logoUrl));
            console.log("  - Texto: ".concat(this.header.headerText));
        }
        console.log("Footer Ativo: ".concat(this.footer.showFooter ? 'Sim' : 'Não'));
        if (this.footer.showFooter) {
            console.log("  - Template: ".concat(this.footer.footerTemplate));
        }
        console.log("------------------------------------------");
        console.log("Formato de Exporta\u00E7\u00E3o: ".concat(this.exportFormat));
        if (this.exportFormat === 'PDF') {
            console.log("  - N\u00EDvel de Compress\u00E3o: ".concat(this.compressionLevel));
        }
        console.log("==========================================");
    };
    return ReportConfig;
}());
exports.ReportConfig = ReportConfig;
