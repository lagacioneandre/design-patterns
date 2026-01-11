import { Pedido } from "./Pedido";
import { IPedidoBuilder } from "./pedido-builder.interface";

// builder concreto
export class PedidoDeCompraBuilder implements IPedidoBuilder {
    private pedido: Pedido;

    constructor(private cliente: string) {
        this.pedido = Pedido.criarNovo();
        this.pedido.adicionarParte(`Cliente: ${cliente}`);
    }

    public definiCliente(nome: string): this {
        return this;
    }

    public adicionarItens(itens: string[]): this {
        this.pedido.adicionarParte(`Itens: ${itens.join(', ')}`);
        return this;
    }

    public configurarEnvio(expresso: boolean): this {
        const tipoEnvio = expresso ? 'Envio Expresso (Rapido)' : 'Envio Padrao';
        this.pedido.adicionarParte(`Envio: ${tipoEnvio}`);
        return this;
    }

    public adicionarServicosOpcionais(cupom: string, presente: boolean): this {
        if (cupom) {
            this.pedido.adicionarParte(`Cupom aplicado: ${cupom}`);
        }
        if (presente) {
            this.pedido.adicionarParte(`Embalagem de presente: SIM`);
        }
        return this;
    }

    public obterPedido(): Pedido {
        return this.pedido;
    }
}