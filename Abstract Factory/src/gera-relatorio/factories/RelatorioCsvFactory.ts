import { Footer } from "../interfaces/footer.interface";
import { Header } from "../interfaces/header.interface";
import { Table } from "../interfaces/table.interface";
import { FooterCsv } from "../relatorio-csv/FooterCsv";
import { HeaderCsv } from "../relatorio-csv/HeaderCsv";
import { TableCsv } from "../relatorio-csv/TableCsv";
import { RelatorioFactory } from "./interface/relatorio-factory.interface";

// concrete factory
export class RelatorioCsvFactory implements RelatorioFactory {
    createHeader(title: string): Header {
        return new HeaderCsv(title);
    }

    createTable(data: string[]): Table {
        return new TableCsv(data);
    }

    createFooter(description: string): Footer {
        return new FooterCsv(description);
    }
}