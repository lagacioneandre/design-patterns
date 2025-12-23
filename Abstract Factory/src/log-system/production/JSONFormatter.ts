import { LogFormater } from "../interfaces/log-formater.interface";

// concrete class
export class JSONFormatter implements LogFormater {
    format(log: string): string {
        return `${log} parsed to JSON.`;
    }
}