// Target interface
export interface NewPaymentProcessor {
    processPayment(amount: number): void;
    getPaymentStatus(): string;
}