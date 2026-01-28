"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionManager = void 0;
// export class TransactionManager {
//     private transactions: Command[] = [];
//     executeTransaction(command: Command, amount: number) {
//         this.transactions.push(command);
//         console.log('Transaction success!!');
//         command.execute(amount);
//     }
//     undoLastTransaction() {
//         const lastTransaction = this.transactions[0];
//         if (lastTransaction) {
//             console.log('Transaction cancelation success!!');
//             lastTransaction.undo();
//             return;
//         }
//         console.log('There is not transaction to cancel!!');
//     }
// }
var TransactionManager = /** @class */ (function () {
    function TransactionManager() {
        this.history = [];
    }
    TransactionManager.prototype.executeTransaction = function (command) {
        try {
            command.execute();
            this.history.push(command); // Só entra no histórico se tiver sucesso
        }
        catch (error) {
            console.error("Falha na transação:", error.message);
        }
    };
    TransactionManager.prototype.undoLastTransaction = function () {
        var command = this.history.pop(); // Pega o ÚLTIMO inserido
        if (command) {
            console.log("Desfazendo última operação...");
            command.undo();
        }
        else {
            console.log("Nenhuma transação para desfazer.");
        }
    };
    return TransactionManager;
}());
exports.TransactionManager = TransactionManager;
