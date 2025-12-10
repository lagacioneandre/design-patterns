import { DataConverter } from "../interfaces/data-converter.interface";

// concrete product
export class JSONParser implements DataConverter {
    convert(data: string): string {
        return `The data ${data}, was converted to JSON.`;
    }
}