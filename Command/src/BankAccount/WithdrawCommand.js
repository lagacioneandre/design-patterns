"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WithdrawCommand = void 0;
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
var WithdrawCommand = /** @class */ (function () {
    function WithdrawCommand(receiver, amount) {
        this.receiver = receiver;
        this.amount = amount;
    }
    WithdrawCommand.prototype.execute = function () {
        this.receiver.withdraw(this.amount);
    };
    WithdrawCommand.prototype.undo = function () {
        this.receiver.deposit(this.amount);
    };
    return WithdrawCommand;
}());
exports.WithdrawCommand = WithdrawCommand;
