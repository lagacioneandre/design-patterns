import { IPaymentProcessor } from "./payment-processor.interface";

export abstract class PaymentGateway {

    abstract getProcessor(): IPaymentProcessor;

    private validateAmount(amount: number) {
        if (amount < 1) {
            throw new Error('Amount needs to be higher than zero.');
        }
    }

    executePayment(amount: number) {
        this.validateAmount(amount);
        const processor = this.getProcessor();
        const authentication = processor.authenticate();
        if (!authentication) throw new Error('Authentication failed.');
        processor.executePayment(amount);
        console.log(`Payment of ${amount} executed.`);
    }
}