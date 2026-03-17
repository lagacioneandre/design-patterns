import { LegacyPay } from "./LegacyPay";
import { LegacyPayAdapter } from "./LegacyPayAdapter";
import { NewPaymentProcessor } from "./new-payment-processor.interface";

class Client {
    // O cliente depende apenas da interface (Abstracao)
    constructor(
        private paymentProcessor: NewPaymentProcessor
    ) {}

    checout(total: number) {
        console.log('Iniciando checkout...');
        this.paymentProcessor.processPayment(total);
        console.log(`Status final: ${this.paymentProcessor.getPaymentStatus()}`);
    }
}

(() => {
    // --- Execucao ---

    // 1. Temos o sistema legado
    const oldSystem = new LegacyPay();

    // 2. Criamos o adaptador para o sistema legado
    const adapter = new LegacyPayAdapter(oldSystem);

    // 3. Passamos o adaptador para o cliente
    // O StoreFront aceita o 'adapter' porque ele implementa 'NewPaymentProcessor'
    const app = new Client(adapter);
    app.checout(150.75);
})();