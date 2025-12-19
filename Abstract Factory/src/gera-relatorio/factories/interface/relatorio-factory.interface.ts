import { Footer } from "../../interfaces/footer.interface";
import { Header } from "../../interfaces/header.interface";
import { Table } from "../../interfaces/table.interface";

// abstract factory
export interface RelatorioFactory {
    createHeader(title: string): Header;
    createTable(data: string[]): Table;
    createFooter(description: string): Footer;
}