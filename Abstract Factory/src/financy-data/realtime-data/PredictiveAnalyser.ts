import { DataAnalyser } from "../interfaces/data-analyser.interface";

// concrete product
export class PredictiveAnalyzer implements DataAnalyser {
    analyse(data: string): string {
        return `The data ${data}, provides a predictive analyze report.`;
    }
}