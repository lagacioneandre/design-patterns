import { Pedido } from "./Pedido";

// builder abstrato
export interface IPedidoBuilder {
    definiCliente(nome: string): this;
    adicionarItens(itens: string[]): this;
    configurarEnvio(expresso: boolean): this;
    adicionarServicosOpcionais(cupom: string, presente: boolean): this;
    obterPedido(): Pedido;
}