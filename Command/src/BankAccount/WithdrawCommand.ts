import { BankAccount } from "./BankAccount";
import { Command } from "./command.interface";

// export class  WithdrawCommad implements Command {
//     private lastTransactionValue = 0;
//     private receiver: BankAccount;

//     constructor (receiver: BankAccount) {
//         this.receiver = receiver;
//     }

//     execute(amount: number): void {
//         this.lastTransactionValue = amount;
//         this.receiver.withdraw(amount);
//     }

//     undo(): void {
//         this.receiver.deposit(this.lastTransactionValue);
//         this.lastTransactionValue = 0;
//     }
// }

export class WithdrawCommand implements Command {
    constructor(
        private receiver: BankAccount, 
        private amount: number
    ) {}

    execute(): void {
        this.receiver.withdraw(this.amount);
    }

    undo(): void {
        this.receiver.deposit(this.amount);
    }
}