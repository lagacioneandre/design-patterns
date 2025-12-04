import { DataConector } from "../interfaces/data-conector.interface";

// concrete class
export class DataBaseConnector implements DataConector {
    createConection(conectionType: string): string {
        return `Data base connected: ${conectionType}.`;
    }
}