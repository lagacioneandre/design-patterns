import { DataConector } from "../interfaces/data-conector.interface";

// concrete product
export class StreamConnector implements DataConector {
    createConection(conectionType: string): string {
        return `Stream connected: ${conectionType}.`;
    }
}