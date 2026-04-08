// Subsistema 1: Gerenciamento de estoque

export class InventorySystem {
    checkStock(productId: string) {
        console.log(`[Estoque] Verificando a disponibilidade do produto ${productId}`);
        return true; // Simulacao: sempre tem estoque
    }

    reserveProduct(productId: string) {
        console.log(`[Estoque] Produto ${productId} reservado com sucesso.`);
    }
}