// 2. Produto concreto

import { iTransport } from "../transport.interface";

export class Truck implements iTransport {
    deliver(): void {
        console.log('Entrega via estrada em caixa.');
    }
}