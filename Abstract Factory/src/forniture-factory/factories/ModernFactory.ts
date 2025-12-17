import { IChair } from "../interfaces/chair.interface";
import { ISofa } from "../interfaces/sofa.interface";
import { ITable } from "../interfaces/table.interface";
import { ModernChair } from "../modern/ModernChair";
import { ModernSofa } from "../modern/ModernSofa";
import { ModernTable } from "../modern/ModernTable";
import { IFornitureFactory } from "./interface/forniture-factory.interface";

// concrete factory
export class ModernFactory implements IFornitureFactory {
    createChair(): IChair {
        return new ModernChair();
    }

    createSofa(): ISofa {
        return new ModernSofa();
    }

    createTable(): ITable {
        return new ModernTable();
    }
}