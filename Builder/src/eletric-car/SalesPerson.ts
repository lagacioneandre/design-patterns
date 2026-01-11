import { IEletricCarBuilder } from "./eletric-car-builder.interface";

export class SalesPerson {
    private builder: IEletricCarBuilder;

    constructor (builder: IEletricCarBuilder) {
        this.builder = builder;
    }

    buildDefaultModel() {
        return this.builder
            .defineEngine()
            .defineColor()
            .defineBattery()
            .defineWheels()
            .getCarConfiguration();
    }
}