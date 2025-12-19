import { Footer } from "../interfaces/footer.interface";
import { Header } from "../interfaces/header.interface";
import { Table } from "../interfaces/table.interface";
import { FooterHtml } from "../relatorio-html/FooterHtml";
import { HeaderHtml } from "../relatorio-html/headerHtml";
import { TableHtml } from "../relatorio-html/TableHtml";
import { RelatorioFactory } from "./interface/relatorio-factory.interface";

// concrete factory
export class RelatorioHtmlFactory implements RelatorioFactory {
    createHeader(title: string): Header {
        return new HeaderHtml(title);
    }

    createTable(data: string[]): Table {
        return new TableHtml(data);
    }

    createFooter(description: string): Footer {
        return new FooterHtml(description);
    }
}