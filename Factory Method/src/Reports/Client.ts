import { CSVGenerator } from "./CSVGenerator";
import { DocumentGenerator } from "./DocumentGenerator";
import { HTMLGenerator } from "./HTMLGenerator";
import { PDFGenerator } from "./PDFGenerator";

class Client {
    generateReport(factory: DocumentGenerator) {
        factory.export('Geracao de relatorio iniciada!!');
    }
}

(() => {
    const client = new Client();
    console.log('Deve gerar o relatorio em PDF!');
    client.generateReport(new PDFGenerator());
    console.log('\nDeve gerar o relatorio em HTML!');
    client.generateReport(new HTMLGenerator());
    console.log('\nDeve gerar o relatorio em CSV!');
    client.generateReport(new CSVGenerator());
})();