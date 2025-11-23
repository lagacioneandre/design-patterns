import { FaturaDetalhada } from "../cliente-vip/FaturaDetalhada";
import { PagamentoPorPix } from "../cliente-vip/PagamentoPorPix";
import { IFatura } from "../interfaces/fatura.interface";
import { IMetodoPagamento } from "../interfaces/metodo-pagamento.interface";
import { IFaturaFactory } from "./interface/FaturaFactory";

// concrete factory
export class FaturaClienteVipFactory implements IFaturaFactory {
    criarFatura(): IFatura {
        return new FaturaDetalhada();
    }

    criarMetodoPagament(): IMetodoPagamento {
        return new PagamentoPorPix();
    }
}