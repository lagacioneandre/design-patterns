import { Pedido } from "./Pedido";
import { IPedidoBuilder } from "./pedido-builder.interface";

// diretor
export class GerenciadorDePedidos {
    public criarPedidoBasico(builder: IPedidoBuilder): Pedido {
        return builder.
            adicionarItens(['Mouse', 'Teclado'])
            .configurarEnvio(false)
            .obterPedido();
    }

    public criarPedidoPremium(builder: IPedidoBuilder): Pedido {
        return builder.
            adicionarItens(['Laptop Pro', 'Monitor 4K'])
            .configurarEnvio(true)
            .adicionarServicosOpcionais('VIP20', true)
            .obterPedido();
    }
}