import { IPaymentProcessor } from "../payment-processor.interface";

export class StripeProcessor implements IPaymentProcessor {
    private readonly apiKey: string;

    constructor(apiKey: string) {
        this.apiKey = apiKey;
    }

    authenticate(): boolean {
        return !!this.apiKey.length;
    }

    executePayment(amount: number): boolean {
        console.log(`Stripe: Paying ${amount}.`);
        return true;
    }
}