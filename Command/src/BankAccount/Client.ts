import { BankAccount } from "./BankAccount";
import { DepositCommand } from "./DepositCommand";
import { TransactionManager } from "./TransactionManager";
import { WithdrawCommand } from "./WithdrawCommand";

export class Client {
    private transactionManager = new TransactionManager();
    private banckAccount = new BankAccount();

    deposit() {
        const command = new DepositCommand(this.banckAccount, 10);
        this.transactionManager.executeTransaction(command);
    }

    withdraw() {
        const command = new WithdrawCommand(this.banckAccount, 10);
        this.transactionManager.executeTransaction(command);
    }

    withdrawException() {
        try {
            const depositCommand = new DepositCommand(this.banckAccount, 10);
            this.transactionManager.executeTransaction(depositCommand);
            const withdrawCommand = new WithdrawCommand(this.banckAccount, 15);
            this.transactionManager.executeTransaction(withdrawCommand);
        } catch (error) {
            console.error((error as Error).message);
        }
    }

    revertDeposit() {
        const command = new DepositCommand(this.banckAccount, 10);
        this.transactionManager.executeTransaction(command);
        this.transactionManager.undoLastTransaction();
    }

    revertWithdraw() {
        const command = new WithdrawCommand(this.banckAccount, 10);
        this.transactionManager.executeTransaction(command);
        this.transactionManager.undoLastTransaction();
    }
}

(function() {
    const client = new Client();
    client.deposit();
    client.withdraw();
    client.withdrawException();
    client.revertDeposit();
    client.revertWithdraw();
})();