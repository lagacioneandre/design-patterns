import { Prototype } from "./prototype.interface";

export class Enemy implements Prototype {
    constructor (
        public name: string,
        public health: number,
        public weapon: string,
        public texture: string, // Imagine que carregar isso 'e pesado
    ) {}

    // Implementacao da clonagem (copia rasa nesse caso)
    clone(): this {
        const clone = Object.assign(Object.create(Object.getPrototypeOf(this)), this);
        return clone;
    }

    displayStatus() {
        console.log(`Inimigo: ${this.name} | Vida: ${this.health} | Arma: ${this.weapon}`);
    }
}