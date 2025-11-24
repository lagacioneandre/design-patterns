import { IFatura } from "../../interfaces/fatura.interface";
import { IMetodoPagamento } from "../../interfaces/metodo-pagamento.interface";

// abstract factory
export interface IFaturaFactory {
    criarFatura(): IFatura;
    criarMetodoPagament(): IMetodoPagamento;
}