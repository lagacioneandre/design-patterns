// Subsitema 2: Processamento de pagamento

export class PaymentProcessor {
    authorize(amount: number) {
        console.log(`[Pagamento] Autorizando cobranca de R$ ${amount}...`);
        return true;
    }
}