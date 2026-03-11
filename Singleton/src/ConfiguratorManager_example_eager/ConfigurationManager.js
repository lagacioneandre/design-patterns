"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigurationManager = void 0;
/**
 * O Singleton Eager 'e carregado assim que o modulo 'e importado.
 * Em linguagens como Java ou C#, isso ocorre no carregamento da classe.
 * No Typescript/JavaScript, ocorre na execucao do modulo.
 */
var ConfigurationManager = /** @class */ (function () {
    // 2. O construtor 'e PRIVADO.
    // Isso impede terminantemente o uso de new ConfigurationManager().
    function ConfigurationManager() {
        this.settings = {};
        console.log('Instancia de ConfigurationManager criada antecipadamente (Eager).');
        this.loadSettings();
    }
    /**
     * 3. Metodo de acesso global
     * Como a instancia ja foi criada la em cima, este metodo apenas a retorna.
     * Nao ha necessidade de 'if (instance == null)', o que o torna muito rapido.
     */
    ConfigurationManager.getInstance = function () {
        return ConfigurationManager.INSTANCE;
    };
    ConfigurationManager.prototype.loadSettings = function () {
        // Simulacao de carregamento de uma arquivo .env ou config.json
        this.settings['appName'] = 'Sistema Galactico';
        this.settings['version'] = '2.5.0';
    };
    ConfigurationManager.prototype.getSetting = function (key) {
        return this.settings[key];
    };
    /**
     * 1. A instancia 'e craida IMEDIATAMENTE na declaracao.
     * 'E private para ninguem acessar o campo diretamente.
     * 'E static para pertencer a classe, nas as instancias.
     * 'E readonly para garantir que, uma vez criada, a referncia nunca mude.
     */
    ConfigurationManager.INSTANCE = new ConfigurationManager();
    return ConfigurationManager;
}());
exports.ConfigurationManager = ConfigurationManager;
