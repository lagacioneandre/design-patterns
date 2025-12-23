import { LogVisualization } from "../interfaces/log-visualization.interface";

// concrete class
export class ScreenDebugger implements LogVisualization {
    print(log: string): string {
        return `${log}, printed on screen.`;
    }
}