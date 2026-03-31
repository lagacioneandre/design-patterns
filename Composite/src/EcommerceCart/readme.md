## Desafio: O Carrinho de Compras Inteligente

### Contexto
Você está desenvolvendo o sistema de checkout de uma loja. A loja vende **Produtos Simples** (como um Livro ou um Teclado), mas também oferece **Kits de Presente** e **Caixas de Assinatura**. 

Uma **Caixa** pode conter vários produtos, mas o mais importante: uma **Caixa** pode conter **outras Caixas** (ex: uma caixa de "Dia dos Namorados" que contém uma "Caixa de Chocolates" e um "Urso de Pelúcia").

O cliente (o carrinho de compras) quer saber o **preço total** e o **peso total** do que está levando, sem se preocupar se o item é um produto solto ou uma embalagem complexa.

---

### Requisitos do Desafio

#### 1. O Componente (`CartItem`)
*   Crie uma interface ou classe abstrata chamada `CartItem`.
*   Ela deve definir dois métodos: `getPrice(): number` e `getWeight(): number`.

#### 2. A Folha (`Product`)
*   Crie uma classe `Product` que implementa `CartItem`.
*   Ela deve receber no construtor: `name`, `price` e `weight`.
*   Os métodos devem apenas retornar os valores das propriedades.

#### 3. O Composto (`Box`)
*   Crie uma classe `Box` que implementa `CartItem`.
*   Ela deve ter um array privado de `CartItem[]`.
*   Deve ter métodos para `add(item: CartItem)` e `remove(item: CartItem)`.
*   **Regra de Negócio do Preço:** O preço da caixa é a soma dos preços de todos os itens dentro dela.
*   **Regra de Negócio do Peso:** O peso da caixa é a soma dos pesos de todos os itens dentro dela **MAIS** o peso da própria embalagem (adicione um valor fixo de, por exemplo, 0.2kg para cada caixa).

---

### Cenário de Teste (Para validação)

1.  Crie 3 produtos simples:
    *   `iPhone` (R$ 5000, 0.5kg)
    *   `Capa de Celular` (R$ 100, 0.1kg)
    *   `Carregador` (R$ 200, 0.1kg)
2.  Crie uma caixa chamada `Combo Smartphone`.
3.  Adicione o `iPhone`, a `Capa` e o `Carregador` dentro desta caixa.
4.  Crie um produto avulso: `Notebook` (R$ 8000, 2.0kg).
5.  Crie o `Carrinho Principal`.
6.  Adicione o `Notebook` e a caixa `Combo Smartphone` no `Carrinho Principal`.
7.  Imprima o preço total e o peso total do `Carrinho Principal`.

---



### O que observar na sua resolução?
*   A classe `Box` não deve verificar se o que ela está recebendo no `add` é um `Product` ou outra `Box`. Ela deve aceitar `CartItem`.
*   A recursão deve acontecer naturalmente: quando o Carrinho Principal pedir o peso, a caixa interna deve calcular o peso dela (somando os itens + embalagem) e devolver para o pai.

**Dica de Arquiteto:** Lembre-se que, no padrão Composite, o objeto Composto delega o trabalho para os filhos. O uso de `reduce()` ou um `for...of` dentro da classe `Box` é o caminho ideal.

**Mãos à obra! Quando terminar, mande o código para avaliarmos se a árvore de objetos ficou bem estruturada.**