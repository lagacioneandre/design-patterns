## 📝 Exercício de Prática: Padrão Command (Nível Intermediário)

### Descrição do Problema: Sistema de Transações Bancárias com Opção Desfazer (Undo)

Você está desenvolvendo um módulo de processamento de transações para um sistema bancário simples. O sistema precisa registrar e executar operações de depósito e saque em uma conta. Além disso, é crucial que o sistema permita **desfazer (undo)** a última transação executada, revertendo o estado da conta.

**Seu desafio é aplicar o Padrão Command para:**

1.  **Encapsular as operações** de depósito e saque como comandos.
2.  Permitir que o Invocador mantenha um **histórico de comandos** para suportar a funcionalidade de desfazer.

#### Estrutura Requerida:

  * **Receiver (Receptor):** Crie a classe `BankAccount` (Conta Bancária). Ela deve ter um saldo (`balance`) e os métodos de negócios `deposit(amount: number)` e `withdraw(amount: number)` que alteram o saldo.
  * **Command (Interface):** A interface `Command` deve ser expandida para incluir o método `undo()`, além do `execute()`.
    ```typescript
    export interface Command {
        execute(): void;
        undo(): void; // Novo método para reverter a operação
    }
    ```
  * **Concrete Commands (Comandos Concretos):** Crie as classes `DepositCommand` e `WithdrawCommand`.
      * O método `execute()` deve realizar a transação.
      * O método `undo()` deve reverter a transação (ex: o `undo()` de um depósito faz um saque, e vice-versa).
  * **Invoker (Invocador):** Crie a classe `TransactionManager` (Gerenciador de Transações).
      * Ela deve ter uma coleção (`history`) para armazenar os comandos executados.
      * Um método `executeTransaction(command: Command)` que chama `execute()` e adiciona o comando à história.
      * Um método `undoLastTransaction()` que remove o último comando da história e chama seu método `undo()`.

**Objetivo principal:** Demonstrar como o padrão Command é essencial para a implementação de operações reversíveis (undo/redo), pois o comando armazena todas as informações necessárias para executar e reverter a ação no Receptor.