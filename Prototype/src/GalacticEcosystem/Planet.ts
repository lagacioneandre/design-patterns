import { Atmosphere } from "./Atmosphere";
import { Prototype } from "./prototype.interface";

export class Planet implements Prototype {
    atmosphere: Atmosphere;

    constructor (
        public name: string,
        public radio: number,
        public biome: string[],
        composition: string,
        density: number,
    ) {
        this.atmosphere = new Atmosphere(composition, density);
    }

    clone(): this {
        const clone = new Planet(
            this.name,
            this.radio,
            [...this.biome],
            this.atmosphere.composition,
            this.atmosphere.density,
        );

        clone.atmosphere = this.atmosphere.clone();
        return clone as this;
    }
}