import { IChair } from "../../interfaces/chair.interface";
import { ISofa } from "../../interfaces/sofa.interface";
import { ITable } from "../../interfaces/table.interface";

// abstract factory
export interface IFornitureFactory {
    createChair(): IChair;
    createSofa(): ISofa;
    createTable(): ITable;
}