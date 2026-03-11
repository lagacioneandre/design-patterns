/**
 * O Singleton Eager 'e carregado assim que o modulo 'e importado.
 * Em linguagens como Java ou C#, isso ocorre no carregamento da classe.
 * No Typescript/JavaScript, ocorre na execucao do modulo.
 */
export class ConfigurationManager {
    /**
     * 1. A instancia 'e craida IMEDIATAMENTE na declaracao.
     * 'E private para ninguem acessar o campo diretamente.
     * 'E static para pertencer a classe, nas as instancias.
     * 'E readonly para garantir que, uma vez criada, a referncia nunca mude.
     */
    private static readonly INSTANCE = new ConfigurationManager();
    private settings: Record<string, string> = {};

    // 2. O construtor 'e PRIVADO.
    // Isso impede terminantemente o uso de new ConfigurationManager().
    private constructor() {
        console.log('Instancia de ConfigurationManager criada antecipadamente (Eager).');
        this.loadSettings();
    }

    /**
     * 3. Metodo de acesso global
     * Como a instancia ja foi criada la em cima, este metodo apenas a retorna.
     * Nao ha necessidade de 'if (instance == null)', o que o torna muito rapido.
     */
    static getInstance() {
        return ConfigurationManager.INSTANCE;
    }

    private loadSettings() {
        // Simulacao de carregamento de uma arquivo .env ou config.json
        this.settings['appName'] = 'Sistema Galactico';
        this.settings['version'] = '2.5.0';
    }

    getSetting(key: string) {
        return this.settings[key];
    }
}