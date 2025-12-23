import { LogFormater } from "../interfaces/log-formater.interface";

// concrete class
export class XMLFormatter implements LogFormater {
    format(log: string): string {
        return `${log} parsed to XML.`;
    }
}