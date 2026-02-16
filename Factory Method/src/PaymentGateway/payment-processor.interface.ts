export interface IPaymentProcessor {
    authenticate(): boolean;
    executePayment(amount: number): boolean;
}