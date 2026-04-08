"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderFacade = void 0;
var InventorySystem_1 = require("./InventorySystem");
var LogisticService_1 = require("./LogisticService");
var PaymentProcessor_1 = require("./PaymentProcessor");
var OrderFacade = /** @class */ (function () {
    function OrderFacade() {
        this.invetory = new InventorySystem_1.InventorySystem();
        this.payment = new PaymentProcessor_1.PaymentProcessor();
        this.logistics = new LogisticService_1.LogisticService();
    }
    /**
     * A metodo magico: O cliente so chama isso aqui
     */
    OrderFacade.prototype.finalizeOrder = function (prodcutId, amount, zipCode) {
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
        var shippingCost = this.logistics.calculateShipping(zipCode);
        this.logistics.scheduleDelivery(prodcutId, zipCode);
        console.log("--- Pedido finalizado! Total com frete: R$ ".concat(amount + shippingCost, " ---"));
        return true;
    };
    return OrderFacade;
}());
exports.OrderFacade = OrderFacade;
