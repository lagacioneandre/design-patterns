import { OrderFacade } from "./OrderFacade";

class Client {
    execute() {
        // O cliente so conhece a Fachada
        const storeFacade = new OrderFacade();

        // O processo complexo vira uma unica linha de codigo
        const success = storeFacade.finalizeOrder('PS5-CONSOLE-01', 4500, '01001-000');

        if (success) {
            console.log('Interface: Parabens pela compra');
        } else {
            console.log('Interface: Ops, algo deu errado com seu pedido.');
        }
    }
}

(() => {
    new Client().execute();
})();