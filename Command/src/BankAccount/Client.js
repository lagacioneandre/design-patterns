"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
var BankAccount_1 = require("./BankAccount");
var DepositCommand_1 = require("./DepositCommand");
var TransactionManager_1 = require("./TransactionManager");
var WithdrawCommand_1 = require("./WithdrawCommand");
var Client = /** @class */ (function () {
    function Client() {
        this.transactionManager = new TransactionManager_1.TransactionManager();
        this.banckAccount = new BankAccount_1.BankAccount();
    }
    Client.prototype.deposit = function () {
        var command = new DepositCommand_1.DepositCommand(this.banckAccount, 10);
        this.transactionManager.executeTransaction(command);
    };
    Client.prototype.withdraw = function () {
        var command = new WithdrawCommand_1.WithdrawCommand(this.banckAccount, 10);
        this.transactionManager.executeTransaction(command);
    };
    Client.prototype.withdrawException = function () {
        try {
            var depositCommand = new DepositCommand_1.DepositCommand(this.banckAccount, 10);
            this.transactionManager.executeTransaction(depositCommand);
            var withdrawCommand = new WithdrawCommand_1.WithdrawCommand(this.banckAccount, 15);
            this.transactionManager.executeTransaction(withdrawCommand);
        }
        catch (error) {
            console.error(error.message);
        }
    };
    Client.prototype.revertDeposit = function () {
        var command = new DepositCommand_1.DepositCommand(this.banckAccount, 10);
        this.transactionManager.executeTransaction(command);
        this.transactionManager.undoLastTransaction();
    };
    Client.prototype.revertWithdraw = function () {
        var command = new WithdrawCommand_1.WithdrawCommand(this.banckAccount, 10);
        this.transactionManager.executeTransaction(command);
        this.transactionManager.undoLastTransaction();
    };
    return Client;
}());
exports.Client = Client;
(function () {
    var client = new Client();
    client.deposit();
    client.withdraw();
    client.withdrawException();
    client.revertDeposit();
    client.revertWithdraw();
})();
