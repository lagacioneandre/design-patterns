import { SharedResources } from "./SharedResources";
import { Starship } from "./Starship";

class Client {
    execute() {
        const sharedResources = new SharedResources('Manual completo', 123);
        const prototype = new Starship('Prototipo cargueiro', 100, sharedResources);
        prototype.display(); //Identificador: Prototipo cargueiro, Combustivel: 100, Manual: Manual completo, Codigo de seguranca: 123
        const nave1 = prototype.clone();
        const nave2 = prototype.clone();
        nave1.identificador = 'Nave-01';
        nave1.display(); //Identificador: Nave-01, Combustivel: 100, Manual: Manual completo, Codigo de seguranca: 123
        nave2.identificador = 'Nave-02';
        nave2.display(); //Identificador: Nave-02, Combustivel: 100, Manual: Manual completo, Codigo de seguranca: 123
        nave1.recursos.codigoSegranca = 456;
        prototype.display(); //Identificador: Prototipo cargueiro, Combustivel: 100, Manual: Manual completo, Codigo de seguranca: 456
        nave1.display(); //Identificador: Nave-01, Combustivel: 100, Manual: Manual completo, Codigo de seguranca: 456
        nave2.display(); //Identificador: Nave-02 cargueiro, Combustivel: 100, Manual: Manual completo, Codigo de seguranca: 456
    }
}

(() => {
    new Client().execute();
})();