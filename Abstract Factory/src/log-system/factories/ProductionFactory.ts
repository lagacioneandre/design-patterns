import { LogFormater } from "../interfaces/log-formater.interface";
import { LogVisualization } from "../interfaces/log-visualization.interface";
import { Logger } from "../interfaces/logger.interface";
import { EmailAlert } from "../production/EmailAlert";
import { FileLogger } from "../production/FileLogger";
import { JSONFormatter } from "../production/JSONFormatter";
import { LogFactory } from "./interface/log-factory.interface";

// concrete factory
export class ProductionFactory implements LogFactory {
    createFormatter(): LogFormater {
        return new JSONFormatter();
    }

    createConnection(): Logger {
        return new FileLogger();
    }

    createVisualization(): LogVisualization {
        return new EmailAlert();
    }
}