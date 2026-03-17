import { LegacyPay } from "./LegacyPay";
import { NewPaymentProcessor } from "./new-payment-processor.interface";

// Adapter
export class LegacyPayAdapter implements NewPaymentProcessor {
    private legacePay: LegacyPay;

    constructor(legacePay: LegacyPay) {
        this.legacePay = legacePay;
    }

    processPayment(amount: number): void {
        // Traducao 1: Converter Reais (float) para centavos (int)
        const cents = Math.round(amount * 100);
        // Traducao 2: Chamar o metodo com nome diferente
        this.legacePay.executeTrade(cents);
    }

    getPaymentStatus(): string {
        // Traducao 3: Converter o booleano para a string esperada pelo sistema novo
        const isActive = this.legacePay.checkStatus();
        return isActive ? 'CONCLUIDO_COM_SUCESSO' : 'ERRO_NA_TRANSACAO';
    }
}