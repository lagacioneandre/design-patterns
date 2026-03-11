import { ConfigurationManager } from "./ConfigurationManager";

class Client {
    execute() {
        // Note que aqui nao chamamos 'new'
        // A instancia ja existe na memoria antes mesmo desta linha ser executada
        const config = ConfigurationManager.getInstance();
        console.log(config.getSetting('appName')); // Saida: Sistema Galactico
    }
}

(() => {
    new Client().execute();
})();