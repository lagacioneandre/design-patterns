import { RelatorioFactory } from "./factories/interface/relatorio-factory.interface";

// client
export class GerarRelatorio {
    private factory: RelatorioFactory;

    constructor (factory: RelatorioFactory) {
        this.factory = factory;
    }

    renderHeader(title: string) {
        const header = this.factory.createHeader(title);
        header.render();
    }

    renderTable(data: string[]) {
        const table = this.factory.createTable(data);
        table.render();
    }

    renderFooter(description: string) {
        const footer = this.factory.createFooter(description);
        footer.render();
    }
}