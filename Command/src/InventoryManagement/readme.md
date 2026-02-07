Aqui está um desafio que foca em **gestão de estado e restauração de valores**.

---

### Desafio Intermediário: Sistema de Gestão de Estoque

**Cenário:**
Você está desenvolvendo o módulo de estoque para uma loja de eletrônicos. O sistema deve permitir adicionar produtos, realizar vendas e alterar preços. O grande diferencial é que o gerente pode cometer erros ao digitar preços ou quantidades, então o sistema deve permitir desfazer qualquer uma dessas ações.

**Objetivo:**
Implementar o padrão **Command** para gerenciar as operações de estoque, garantindo que o `undo` restaure exatamente o estado anterior (especialmente em mudanças de preço).

**Requisitos:**

1. **O Receiver (`Inventory`):**
* Deve gerenciar um `Map<string, { price: number, quantity: number }>`, onde a chave é o nome do produto.
* Deve ter métodos para:
* `updateQuantity(productName, delta)`: soma ou subtrai da quantidade atual.
* `updatePrice(productName, newPrice)`: altera o preço do produto.
* `getProduct(productName)`: retorna os dados atuais do produto.

2. **A Interface (`ICommand`):**
* Método `execute()` retornando `boolean` (sucesso/falha).
* Método `undo()` retornando `void`.

3. **Comandos Concretos (Dados via Construtor):**
* **`SellCommand`**: Diminui a quantidade de um produto.
* *Falha se:* O produto não existir ou a quantidade em estoque for insuficiente.

* **`AddStockCommand`**: Aumenta a quantidade de um produto.
* *Dica:* Se o produto não existir, ele deve ser criado com quantidade inicial e preço padrão.

* **`UpdatePriceCommand`**: Altera o preço de um produto.
* **O Desafio:** O `undo()` deste comando deve restaurar o preço que o produto tinha **antes** da alteração. Para isso, o comando precisará "perguntar" o preço atual ao Receiver e guardá-lo no momento em que o `execute()` for chamado.

4. **O Invoker (`StoreManager`):**
* Método `process(command)` que executa e armazena no histórico apenas se houver sucesso.
* Método `undo()` que reverte a última ação bem-sucedida.

5. **O Cliente:**
* Adicione 10 unidades de "Smartphone".
* Altere o preço do "Smartphone" para R$ 2000,00.
* Venda 3 unidades.
* Altere o preço para R$ 1800,00.
* **Teste o Undo:** Desfaça a alteração de preço (deve voltar para 2000) e desfaça a venda (a quantidade deve voltar para 10).

---

**Ponto de atenção para este exercício:**
No `UpdatePriceCommand`, perceba que você não sabe o "preço antigo" no momento em que cria o objeto no `Client`. Você só saberá o preço antigo quando o comando for realmente executado dentro do `StoreManager`. Isso vai te ajudar a entender como o comando pode "preparar o terreno" antes de alterar os dados.
