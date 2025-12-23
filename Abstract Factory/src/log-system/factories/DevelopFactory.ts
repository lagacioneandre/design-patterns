import { ConsoleLogger } from "../develop/ConsoleLogger";
import { ScreenDebugger } from "../develop/ScreenDebugger";
import { TextFormatter } from "../develop/TextFormatter";
import { LogFormater } from "../interfaces/log-formater.interface";
import { LogVisualization } from "../interfaces/log-visualization.interface";
import { Logger } from "../interfaces/logger.interface";
import { LogFactory } from "./interface/log-factory.interface";

// concrete factory
export class DevelopFactory implements LogFactory {
    createFormatter(): LogFormater {
        return new TextFormatter();
    }

    createConnection(): Logger {
        return new ConsoleLogger();
    }

    createVisualization(): LogVisualization {
        return new ScreenDebugger();
    }
}