import { IPaymentProcessor } from "../payment-processor.interface";

export class PayPalProcessor implements IPaymentProcessor {
    private readonly user: string;
    private readonly password: string;

    constructor (user: string, password: string) {
        this.user = user;
        this.password = password;
    }

    authenticate(): boolean {
        return !!this.user.length && !!this.password.length;
    }

    executePayment(amount: number): boolean {
        console.log(`Paypal: Paying ${amount}.`);
        return true;
    }
}