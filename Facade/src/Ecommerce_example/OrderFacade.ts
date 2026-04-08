import { InventorySystem } from "./InventorySystem";
import { LogisticService } from "./LogisticService";
import { PaymentProcessor } from "./PaymentProcessor";

export class OrderFacade {
    private invetory = new InventorySystem();
    private payment = new PaymentProcessor();
    private logistics = new LogisticService();

    /**
     * A metodo magico: O cliente so chama isso aqui
     */
    finalizeOrder(prodcutId: string, amount: number, zipCode: string) {
        console.log('--- Iniciando processamento de pedido ---');

        // 1. Validar estoque
        if (!this.invetory.checkStock(prodcutId)) {
            console.error('Erro: Produto fora de estoque.');
            return false;
        }

        // 2. Processar pagamento
        if (!this.payment.authorize(amount)) {
            console.error('Erro: Pagamento recusado.');
            return false;
        }

        // 3. Reservar e agendar logistica
        this.invetory.reserveProduct(prodcutId);
        const shippingCost = this.logistics.calculateShipping(zipCode);
        this.logistics.scheduleDelivery(prodcutId, zipCode);

        console.log(`--- Pedido finalizado! Total com frete: R$ ${amount + shippingCost} ---`);
        return true;
    }
}