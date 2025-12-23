import { Logger } from "../interfaces/logger.interface";

// concrete class
export class MemoryLogger implements Logger {
    getLog(): string {
        return 'Test logger.';
    }
}