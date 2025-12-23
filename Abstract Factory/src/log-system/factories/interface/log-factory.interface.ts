import { LogFormater } from "../../interfaces/log-formater.interface";
import { LogVisualization } from "../../interfaces/log-visualization.interface";
import { Logger } from "../../interfaces/logger.interface";

// abstract factory
export interface LogFactory {
    createConnection(): Logger;
    createVisualization(): LogVisualization;
    createFormatter(): LogFormater;
}