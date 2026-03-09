import { GalacticRegistry } from "./GalcticRegistry";
import { Planet } from "./Planet";

class Client {
    execute() {
        const earthBase = new Planet('Terra base', 50, ['Florestas', 'Montanhas'], 'Oxigen: 21%', 30);
        const galaticRegisty = new GalacticRegistry();
        galaticRegisty.registry('Terra base', earthBase);

        const earthExperiment = earthBase.clone();
        earthExperiment.biome.push('Pantano');
        earthExperiment.atmosphere.density = 40;
        galaticRegisty.registry('Terra experimento', earthExperiment);

        galaticRegisty.display('Terra base'); // Name: Terra base, Radio: 50, Biome: Florestas, Montanhas, Composition: Oxigen: 21%, Density: 30
        galaticRegisty.display('Terra experimento'); // Name: Terra experimento, Radio: 50, Biome: Florestas, Montanhas, Pantano, Composition: Oxigen: 21%, Density: 40
    }
}

(() => {
    new Client().execute();
})();