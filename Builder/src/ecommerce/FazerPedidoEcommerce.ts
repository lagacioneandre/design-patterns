import { GerenciadorDePedidos } from "./GerenciadorDePedidos";
import { PedidoDeCompraBuilder } from "./PedidoDeCompraBuilder";

// cliente
export class FazerPedidoEcommerce {
    private gerenciador = new GerenciadorDePedidos();
    
    public criarPedidoManual() {
         console.log('--- 1. Pedido CUSTOMIZADO (Craido pelo Cliente ---');
         const builderCustom = new PedidoDeCompraBuilder('Ana Silva');
         builderCustom
            .adicionarItens(['Camera', 'Tripe'])
            .configurarEnvio(true);

        const pedidoCustom = builderCustom.obterPedido();
        pedidoCustom.mostrarResultado();
    }

    public criarPedidoBasicoDiretor() {
        console.log("--- 2. Pedido BÁSICO (Criado pelo Diretor) ---");
        const builderBasico = new PedidoDeCompraBuilder('Bruno Costa');
        const pedidoBasico = this.gerenciador.criarPedidoBasico(builderBasico);
        pedidoBasico.mostrarResultado();
    }

    public criarPedidoPremiumDiretor() {
        console.log("--- 3. Pedido PREMIUM (Criado pelo Diretor) ---");
        const builderPremium = new PedidoDeCompraBuilder('Carlos Oliveira');
        const pedidoPremium = this.gerenciador.criarPedidoPremium(builderPremium);
        pedidoPremium.mostrarResultado();
    }
}