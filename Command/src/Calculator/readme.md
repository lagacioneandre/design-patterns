### Exercício: Calculadora com Função Desfazer (Undo)

**Cenário:**
Você deve desenvolver o motor lógico de uma calculadora simples que realiza apenas operações de **Soma** e **Subtração**. Para tornar a ferramenta mais útil, ela deve permitir que o usuário desfaça as operações realizadas, uma a uma, restaurando o valor total anterior.

**Objetivo:**
Implementar o padrão **Command** para encapsular cada operação matemática e gerenciar o histórico de cálculos.

**Requisitos:**

1. **O Receiver (Calculadora):** Deve conter o estado atual do valor total (iniciando em 0) e métodos para adicionar e subtrair valores desse total.
2. **A Interface (Command):** Deve definir os métodos `execute()` e `undo()`.
3. **Comandos Concretos:**
* Crie um comando para a **Soma** e outro para a **Subtração**.
* Cada comando deve armazenar o valor que foi utilizado na operação para que possa revertê-la corretamente no método `undo()`.


4. **O Invoker (Aparelho/Calculadora):** Deve possuir um método para executar um comando e uma pilha (histórico) para armazenar esses comandos, permitindo a funcionalidade de desfazer.
5. **O Client:** Deve realizar uma sequência de operações (ex: +10, +5, -3), exibir o resultado final e, em seguida, disparar o comando de desfazer para verificar se o valor total retorna aos estados anteriores corretamente.