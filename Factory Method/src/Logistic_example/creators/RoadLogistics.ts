// 4. Criadores concretos (A decisao de criacao fica aqui)

import { Logistics } from "../Logistics";
import { Truck } from "../products/Truck";
import { iTransport } from "../transport.interface";

export class RoadLogistics extends Logistics {
    // A filha "conversa" com o pai fornecendo o objeto correto
    createTransport(): iTransport {
        return new Truck();
    }
}