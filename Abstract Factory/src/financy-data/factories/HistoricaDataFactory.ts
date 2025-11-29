import { CsvReader } from "../historic-data/CsvReader";
import { DataBaseConnector } from "../historic-data/DataBaseConnector";
import { StatisticalAnalyzer } from "../historic-data/StatiticalAnalyzer";
import { DataAnalyser } from "../interfaces/data-analyser.interface";
import { DataConector } from "../interfaces/data-conector.interface";
import { DataConverter } from "../interfaces/data-converter.interface";
import { FinancyData } from "./interface/financy-data.interface";

// concrete factory
export class HistoricDataFactory implements FinancyData {
    createConnection(): DataConector {
        return new DataBaseConnector();
    }

    analyzeData(): DataAnalyser {
        return new StatisticalAnalyzer();
    }

    convertData(): DataConverter {
        return new CsvReader();
    }
}