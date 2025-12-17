import { IChair } from "../interfaces/chair.interface";
import { ISofa } from "../interfaces/sofa.interface";
import { ITable } from "../interfaces/table.interface";
import { VictorianChair } from "../victorian/VictorianChair";
import { VictorianSofa } from "../victorian/VictorianSofa";
import { VictorianTable } from "../victorian/VictorianTable";
import { IFornitureFactory } from "./interface/forniture-factory.interface";

// concrete factory
export class VictorianFactory implements IFornitureFactory {
    createChair(): IChair {
        return new VictorianChair();
    }

    createSofa(): ISofa {
        return new VictorianSofa();
    }

    createTable(): ITable {
        return new VictorianTable();
    }
}