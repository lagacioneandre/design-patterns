import { Enemy } from "./Enemy";
import { EnemyRegistry } from "./EnemyRegistry";

class Client {
    execute() {
        // 1. Configuracao inicial (Setup do "Catalogo")
        const registry = new EnemyRegistry();

        // Criamos os modelos base apenas UMA vez
        const basciGoblin = new Enemy('Goblin comum', 50, 'Adaga', 'goblin_v1.png');
        const eliteOrc = new Enemy('Orc de Elite', 200, 'Machado gigante', 'orc_heavy_v2.png');

        registry.addItem('goblin', basciGoblin);
        registry.addItem('orc', eliteOrc);

        // 2. Uso no jogo (Spawning)
        console.log('--- Spawning Inimigos ---');

        // Criamos instancias clonadas
        const goblin1 = registry.getById('goblin');
        const goblin2 = registry.getById('goblin');

        // Podemos customizer o clone sem afetar o resgitro ou outros clones
        goblin2.health = 30; // Este goblin especifico nasceu ferido

        const orc1 = registry.getById('orc');

        goblin1.displayStatus(); // Inimigo: Goblin Comum | Vida: 50 | Arma: Adaga
        goblin2.displayStatus(); // Inimigo: Goblin Comum | Vida: 30 | Arma: Adaga
        orc1.displayStatus(); // Inimigo: Orc de Elite | Vida: 200 | Arma: Machado Gigante
    }
}

(() => {
    new Client().execute();
})();