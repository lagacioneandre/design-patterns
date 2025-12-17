import { ITable } from "../interfaces/table.interface";

// classe concreta
export class VictorianTable implements ITable {
    length(): number {
        return 0.99;
    }

    width(): number {
        return 0.7;
    }
}