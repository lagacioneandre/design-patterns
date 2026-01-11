import { IEletricCarBuilder } from "./eletric-car-builder.interface";
import { EletricCar } from "./EletricCar";

export class FamiliarModelBuilder extends EletricCar implements IEletricCarBuilder {
    constructor() {
        super();
    }

    defineEngine(): this {
        super.setEngine('Motor simple otimizado para eficiencia (200cv)');
        return this;
    }

    defineColor(): this {
        super.setColor('Prata');
        return this;
    }

    defineBattery(): this {
        super.setBattery('Bateria Padrão (60kWh)');
        return this;
    }

    defineWheels(): this {
        super.setWheels('Rodas de Aço 18 polegadas com Calota');
        return this;
    }

    getCarConfiguration(): EletricCar {
        return this;
    }
}