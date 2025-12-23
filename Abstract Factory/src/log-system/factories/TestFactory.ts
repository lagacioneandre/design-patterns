import { LogFormater } from "../interfaces/log-formater.interface";
import { LogVisualization } from "../interfaces/log-visualization.interface";
import { Logger } from "../interfaces/logger.interface";
import { DataValidator } from "../test/DataValidator";
import { MemoryLogger } from "../test/MemoryLogger";
import { XMLFormatter } from "../test/XMLFormatter";
import { LogFactory } from "./interface/log-factory.interface";

// concrete factory
export class TestFactory implements LogFactory {
    createFormatter(): LogFormater {
        return new XMLFormatter();
    }

    createConnection(): Logger {
        return new MemoryLogger();
    }

    createVisualization(): LogVisualization {
        return new DataValidator();
    }
}