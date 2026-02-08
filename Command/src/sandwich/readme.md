## 🧱 Exercício Padrão Builder (Nível Iniciante)

### Descrição do Problema

Você está desenvolvendo um sistema simples para a criação de **Sanduíches Personalizados** (como *hamburguers* ou *sanduíches de frango*).

O objeto final (`Sanduiche`) é composto por vários elementos opcionais e obrigatórios que devem ser montados em uma ordem específica:

1.  **Pão** (Obrigatório: Integral, Francês ou Brioche).
2.  **Carne** (Obrigatório: Bovina, Frango ou Vegetal).
3.  **Queijo** (Opcional: Mussarela, Cheddar ou Provolone).
4.  **Molho** (Opcional: Maionese, Ketchup ou Mostarda).
5.  **Adicionais** (Opcional, pode ter múltiplos: Bacon, Ovo, Salada).

**Seu objetivo é:**

Implementar o **Padrão Builder** para permitir que o cliente crie instâncias do objeto `Sanduiche` de forma flexível. O Builder deve garantir que todos os componentes obrigatórios sejam incluídos e permitir que os componentes opcionais sejam adicionados por meio de métodos encadeáveis, sem que o código de construção precise saber exatamente como o sanduíche final é montado.

Você deve criar:

* A classe `Sanduiche` (o produto final).
* A interface `SanduicheBuilder`.
* Uma ou mais classes que implementam o Builder (por exemplo, `SanduicheTradicionalBuilder`).
* Uma classe `Diretor` (opcional, mas recomendado) para definir receitas de sanduíches pré-configuradas.

O foco é na **separação da representação da construção** para que a mesma lógica de construção possa criar diferentes tipos de sanduíches (por exemplo, um sanduíche vegetariano vs. um sanduíche com bacon).








## 🏗️ Exercício Padrão Command (Nível Iniciante/Intermediário)

### 🍔 Descrição do Problema: Sistema de Pedidos de Sanduíche com Histórico

Você deve projetar um sistema de software para uma lanchonete que permita aos clientes fazer e modificar seus pedidos de sanduíche de forma flexível. O objetivo principal é isolar a solicitação de uma ação (adicionar/remover ingrediente) do objeto que a executa.

#### 1. O Receptor (Receiver)

Crie a classe `Sanduiche`. Esta classe representa o produto final e deve conter o estado atual do sanduíche (por exemplo, listas de ingredientes como Pães, Carnes, Queijos, Molhos e Adicionais).

* Implemente métodos públicos na classe `Sanduiche` para **adicionar** e **remover** cada tipo de ingrediente (ex: `adicionarQueijo(tipo)`, `removerBacon()`).

#### 2. O Invocador (Invoker)

Crie a classe `BalcaoDePedidos` (o Invocador). Esta classe não deve saber como as ações são executadas, apenas que elas podem ser executadas e desfeitas.

* O `BalcaoDePedidos` deve ser capaz de receber e enfileirar comandos.
* Deve manter um **histórico** (uma lista ou pilha) dos comandos executados.
* Deve ter um método `executarComando(comando)` que chama a lógica do comando e armazena-o no histórico.
* Deve ter um método `desfazerUltimoComando()` que reverte a última ação executada.

#### 3. A Interface do Comando (Command Interface)

Crie a interface `ComandoPedido`.

* Deve declarar os métodos `executar()` e `desfazer()`.

#### 4. Comandos Concretos (Concrete Commands)

Crie pelo menos três classes que implementem `ComandoPedido`. Cada uma deve encapsular uma ação e ter uma referência ao objeto `Sanduiche` (Receiver).

* **Exemplo:** `ComandoAdicionarQueijo`, `ComandoAdicionarBacon`, `ComandoRemoverMolho`.

O método `executar()` em cada comando deve chamar o método apropriado no objeto `Sanduiche`. O método `desfazer()` deve reverter exatamente o que o `executar()` fez.

**Seu desafio é:** garantir que o `BalcaoDePedidos` consiga montar um sanduíche chamando diferentes comandos em sequência e, em seguida, permitir que o cliente desfaça o último ingrediente adicionado com uma única chamada, sem que o `BalcaoDePedidos` precise saber qual ingrediente foi adicionado.

---

Gostaria de um exemplo de implementação em uma linguagem específica, como Python ou JavaScript, para começar a trabalhar?