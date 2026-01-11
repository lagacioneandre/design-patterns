import { IEletricCarBuilder } from "./eletric-car-builder.interface";
import { EletricCar } from "./EletricCar";

export class SportsModelBuilder extends EletricCar implements IEletricCarBuilder {
    constructor() {
        super();
    }

    defineEngine(): this {
        super.setEngine('Motor duplo de alta performance');
        return this;
    }

    defineColor(): this {
        super.setColor('Roxo');
        return this;
    }

    defineBattery(): this {
        super.setBattery('Bateria de longo alcance');
        return this;
    }

    defineWheels(): this {
        super.setWheels('Rodas de liga leve de 20 polegadas');
        return this;
    }

    getCarConfiguration(): EletricCar {
        return this;
    }
}