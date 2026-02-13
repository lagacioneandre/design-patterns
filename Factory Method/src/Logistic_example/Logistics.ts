// 3. O criador (a logica de negocio fica aqui)

import { iTransport } from "./transport.interface";

export abstract class Logistics {
    // O factory method: A classe pai NAO implementa isso
    // Ela deixa para as filhas decidirem
    abstract createTransport(): iTransport;

    // A comunicaco principal
    planDelivery() {
        // A classe pai chama o metodo que ela mesmo nao sabe como funciona
        const transport = this.createTransport();
        console.log('Logistics: O plano foi feito. Iniciando transporte...');
        transport.deliver();
    }
}