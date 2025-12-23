import { Logger } from "../interfaces/logger.interface";

// concrete class
export class ConsoleLogger implements Logger {
    getLog(): string {
        return 'Console logger.';
    }
}