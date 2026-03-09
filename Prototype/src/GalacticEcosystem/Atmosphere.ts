export class Atmosphere {
    constructor (
        public composition: string,
        public density: number,
    ) {}

    clone(): Atmosphere {
        return new Atmosphere(this.composition, this.density);
    }
}