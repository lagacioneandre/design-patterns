import { Footer } from "../interfaces/footer.interface";
import { Header } from "../interfaces/header.interface";
import { Table } from "../interfaces/table.interface";
import { FooterPdf } from "../relatorio-pdf/FooterPdf";
import { HeaderPdf } from "../relatorio-pdf/HeaderPdf";
import { TablePdf } from "../relatorio-pdf/TablePdf";
import { RelatorioFactory } from "./interface/relatorio-factory.interface";

// concrete factory
export class RelatorioPdfFactory implements RelatorioFactory {
    createHeader(title: string): Header {
        return new HeaderPdf(title);
    }

    createTable(data: string[]): Table {
        return new TablePdf(data);
    }

    createFooter(description: string): Footer {
        return new FooterPdf(description);
    }
}