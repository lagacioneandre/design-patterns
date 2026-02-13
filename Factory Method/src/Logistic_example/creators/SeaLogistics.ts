// 4. Criadores concretos (A decisao de criacao fica aqui)

import { Logistics } from "../Logistics";
import { Ship } from "../products/Ship";
import { iTransport } from "../transport.interface";

export class SeaLogistics extends Logistics {
    // A filha "conversa" com o pai fornecendo o objeto correto
    createTransport(): iTransport {
        return new Ship();
    }
}