"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Enemy_1 = require("./Enemy");
var EnemyRegistry_1 = require("./EnemyRegistry");
var Client = /** @class */ (function () {
    function Client() {
    }
    Client.prototype.execute = function () {
        // 1. Configuracao inicial (Setup do "Catalogo")
        var registry = new EnemyRegistry_1.EnemyRegistry();
        // Criamos os modelos base apenas UMA vez
        var basciGoblin = new Enemy_1.Enemy('Goblin comum', 50, 'Adaga', 'goblin_v1.png');
        var eliteOrc = new Enemy_1.Enemy('Orc de Elite', 200, 'Machado gigante', 'orc_heavy_v2.png');
        registry.addItem('goblin', basciGoblin);
        registry.addItem('orc', eliteOrc);
        // 2. Uso no jogo (Spawning)
        console.log('--- Spawning Inimigos ---');
        // Criamos instancias clonadas
        var goblin1 = registry.getById('goblin');
        var goblin2 = registry.getById('goblin');
        // Podemos customizer o clone sem afetar o resgitro ou outros clones
        goblin2.health = 30; // Este goblin especifico nasceu ferido
        var orc1 = registry.getById('orc');
        goblin1.displayStatus(); // Inimigo: Goblin Comum | Vida: 50 | Arma: Adaga
        goblin2.displayStatus(); // Inimigo: Goblin Comum | Vida: 30 | Arma: Adaga
        orc1.displayStatus(); // Inimigo: Orc de Elite | Vida: 200 | Arma: Machado Gigante
    };
    return Client;
}());
(function () {
    new Client().execute();
})();
