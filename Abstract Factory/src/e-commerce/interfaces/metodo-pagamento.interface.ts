// abstract product
export interface IMetodoPagamento {
    processar(valor: number): string;
}