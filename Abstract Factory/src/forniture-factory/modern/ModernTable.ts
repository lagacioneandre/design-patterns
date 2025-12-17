import { ITable } from "../interfaces/table.interface";

// classe concreta
export class ModernTable implements ITable {
    length(): number {
        return 2;
    }

    width(): number {
        return 0.9;
    }
}