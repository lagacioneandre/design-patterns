import { ITable } from "../interfaces/table.interface";

// classe concreta
export class ArtdecoTable implements ITable {
    length(): number {
        return 2.5;
    }

    width(): number {
        return 1.2;
    }
}