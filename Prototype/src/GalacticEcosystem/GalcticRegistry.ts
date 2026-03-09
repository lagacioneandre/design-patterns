import { Planet } from "./Planet";

export class GalacticRegistry {
    private planets = new Map<string, Planet>();

    registry(name: string, planet: Planet) {
        this.planets.set(name, planet.clone());
    }

    display(name: string) {
        const planet = this.planets.get(name);
        if (planet) {
            console.log(`
                Name: ${planet.name},
                Radio: ${planet.radio},
                Biome: ${JSON.stringify(planet.biome)},
                Composition: ${planet.atmosphere.composition},
                Density: ${planet.atmosphere.density}
            `);
        }
    }
}