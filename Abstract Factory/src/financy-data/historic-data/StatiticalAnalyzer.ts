import { DataAnalyser } from "../interfaces/data-analyser.interface";

// concrete class
export class StatisticalAnalyzer implements DataAnalyser {
    analyse(data: string): string {
        return `The data ${data}, provides a statical analyze report.`;
    }
}