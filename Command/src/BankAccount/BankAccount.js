"use strict";
// export class BankAccount {
//     private balance = 0;
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankAccount = void 0;
//     deposit(amount: number) {
//         this.balance += amount;
//         console.log(`Your balance is: ${this.balance}.`);
//     }
//     withdraw(amount: number) {
//         if (amount > this.balance) {
//             throw new Error(`Is not possible to complete this withdraw. Your balance is ${this.balance} and it is not enougth!`);
//         }
//         this.balance -= amount;
//         console.log(`Your balance is: ${this.balance}.`);
//     }
// }
var BankAccount = /** @class */ (function () {
    function BankAccount(balance) {
        if (balance === void 0) { balance = 0; }
        this.balance = balance;
    }
    BankAccount.prototype.deposit = function (amount) {
        this.balance += amount;
        console.log("Depositado: ".concat(amount, ". Saldo atual: ").concat(this.balance));
    };
    BankAccount.prototype.withdraw = function (amount) {
        if (amount > this.balance) {
            throw new Error("Saldo insuficiente!");
        }
        this.balance -= amount;
        console.log("Sacado: ".concat(amount, ". Saldo atual: ").concat(this.balance));
    };
    return BankAccount;
}());
exports.BankAccount = BankAccount;
