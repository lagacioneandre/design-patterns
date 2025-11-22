import { FaturaSimples } from "../cliente-padrao/FaturaSimples";
import { PagamentoPorCartao } from "../cliente-padrao/PagamentoPorCartao";
import { IFatura } from "../interfaces/fatura.interface";
import { IMetodoPagamento } from "../interfaces/metodo-pagamento.interface";
import { IFaturaFactory } from "./interface/FaturaFactory";

// concrete factory
export class FaturaClientePadraoFactory implements IFaturaFactory {
    criarFatura(): IFatura {
        return new FaturaSimples();
    }

    criarMetodoPagament(): IMetodoPagamento {
        return new PagamentoPorCartao();
    }
}