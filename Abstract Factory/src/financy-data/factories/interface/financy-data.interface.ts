import { DataAnalyser } from "../../interfaces/data-analyser.interface";
import { DataConector } from "../../interfaces/data-conector.interface";
import { DataConverter } from "../../interfaces/data-converter.interface";

// abstract factory
export interface FinancyData {
    createConnection(): DataConector;
    convertData(): DataConverter;
    analyzeData(): DataAnalyser;
}