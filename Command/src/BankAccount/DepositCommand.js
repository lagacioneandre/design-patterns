"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DepositCommand = void 0;
// export class DepositCommand implements Command {
//     private lastTransactionValue = 0;
//     private receiver: BankAccount;
//     constructor (receiver: BankAccount) {
//         this.receiver = receiver;
//     }
//     execute(amount: number): void {
//         this.lastTransactionValue = amount;
//         this.receiver.deposit(amount);
//     }
//     undo(): void {
//         this.receiver.withdraw(this.lastTransactionValue);
//         this.lastTransactionValue = 0;
//     }
// }
var DepositCommand = /** @class */ (function () {
    function DepositCommand(receiver, amount) {
        this.receiver = receiver;
        this.amount = amount;
    }
    DepositCommand.prototype.execute = function () {
        this.receiver.deposit(this.amount);
    };
    DepositCommand.prototype.undo = function () {
        this.receiver.withdraw(this.amount);
    };
    return DepositCommand;
}());
exports.DepositCommand = DepositCommand;
