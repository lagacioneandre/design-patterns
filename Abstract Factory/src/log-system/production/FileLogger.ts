import { Logger } from "../interfaces/logger.interface";

// concrete class
export class FileLogger implements Logger {
    getLog(): string {
        return 'Production log';
    }
}