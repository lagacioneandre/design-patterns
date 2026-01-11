import { EletricCar } from "./EletricCar";

export interface IEletricCarBuilder {
    defineEngine(): this;
    defineColor(): this;
    defineBattery(): this;
    defineWheels(): this;
    getCarConfiguration(): EletricCar;
}