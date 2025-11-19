import { IMetodoPagamento } from "../interfaces/metodo-pagamento.interface";

// concrete class
export class PagamentoPorCartao implements IMetodoPagamento {
    processar(valor: number): string {
        return `Processando o valor de R$${valor} com cartao de credito.`;
    }
}