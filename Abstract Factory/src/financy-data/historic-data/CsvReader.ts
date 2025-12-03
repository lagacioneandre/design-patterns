import { DataConverter } from "../interfaces/data-converter.interface";

// concrete class
export class CsvReader implements DataConverter {
    convert(data: string): string {
        return `The data ${data}, was charged from one CSV file.`;
    }
}