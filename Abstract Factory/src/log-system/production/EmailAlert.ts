import { LogVisualization } from "../interfaces/log-visualization.interface";

// concrete class
export class EmailAlert implements LogVisualization {
    print(log: string): string {
        return `${log}, email sent.`;
    }
}