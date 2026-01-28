// export class BankAccount {
//     private balance = 0;

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

export class BankAccount {
    constructor(private balance: number = 0) {}

    deposit(amount: number) {
        this.balance += amount;
        console.log(`Depositado: ${amount}. Saldo atual: ${this.balance}`);
    }

    withdraw(amount: number) {
        if (amount > this.balance) {
            throw new Error("Saldo insuficiente!");
        }
        this.balance -= amount;
        console.log(`Sacado: ${amount}. Saldo atual: ${this.balance}`);
    }
}