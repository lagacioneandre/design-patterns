import { IMetodoPagamento } from "../interfaces/metodo-pagamento.interface";

// concrete class
export class PagamentoPorPix implements IMetodoPagamento {
    processar(valor: number): string {
        return `Processando o pagamento de R$${valor} com PIX. Transferencia instantanea.`;
    }
}