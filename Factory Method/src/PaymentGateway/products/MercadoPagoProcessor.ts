import { IPaymentProcessor } from "../payment-processor.interface";

export class MercadoPagoProcessor implements IPaymentProcessor {
    private readonly token: string;

    constructor (token: string) {
        this.token = token;
    }

    authenticate(): boolean {
        return !!this.token.length;
    }

    executePayment(amount: number): boolean {
        console.log(`Mercado Pago: Paying ${amount}.`);
        return true;
    }
}