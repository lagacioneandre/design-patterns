// 2. produto concreto

import { iTransport } from "../transport.interface";

export class Ship implements iTransport {
    deliver(): void {
        console.log('Entrega via mar em container.');
    }
}