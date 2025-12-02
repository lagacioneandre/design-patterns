import { FinancyData } from "./factories/interface/financy-data.interface";

// client
export class FinancyReport {
    private factory: FinancyData;

    constructor(factory: FinancyData) {
        this.factory = factory;
    }

    generate(conector: string, data: string) {
        const connection = this.factory.createConnection();
        const converter = this.factory.convertData();
        const analyzer = this.factory.analyzeData();
        const convertedData = converter.convert(data);
        console.log(connection.createConection(conector));
        console.log(convertedData);
        console.log(analyzer.analyse(convertedData));
    }
}