import { LogVisualization } from "../interfaces/log-visualization.interface";

// concrete class
export class DataValidator implements LogVisualization {
    print(log: string): string {
        return `${log}, export to txt file.`;
    }
}