import { DataAnalyser } from "../interfaces/data-analyser.interface";
import { DataConector } from "../interfaces/data-conector.interface";
import { DataConverter } from "../interfaces/data-converter.interface";
import { JSONParser } from "../realtime-data/JSONParser";
import { PredictiveAnalyzer } from "../realtime-data/PredictiveAnalyser";
import { StreamConnector } from "../realtime-data/StreamConnector";
import { FinancyData } from "./interface/financy-data.interface";

// concrete factory
export class RealimeFactory implements FinancyData {
    createConnection(): DataConector {
        return new StreamConnector();
    }

    analyzeData(): DataAnalyser {
        return new PredictiveAnalyzer();
    }

    convertData(): DataConverter {
        return new JSONParser();
    }
}