O padrão **Composite** é um padrão de projeto **estrutural** que permite que você componha objetos em estruturas de árvore para representar hierarquias "parte-todo".

A grande magia do Composite é que ele permite que os clientes tratem objetos individuais e composições de objetos de maneira **uniforme**.

---

## 1. O Problema: Hierarquias Complexas
Imagine que você está desenvolvendo um sistema de PDV (Ponto de Venda). Você tem produtos simples (um martelo) e caixas que contêm vários produtos (um kit de ferramentas). 

Se você quiser calcular o preço total de um pedido, você teria que verificar manualmente: "Isso é um produto simples ou é uma caixa?". Se for uma caixa, você teria que abrir a caixa e ver o que tem dentro. Se dentro da caixa houver outra caixa menor, o problema se repete. 

Isso gera um código cheio de condicionais (`if/else`) e loops aninhados que são difíceis de manter.

---

## 2. A Solução: A Estrutura de Árvore
O padrão Composite sugere que você trabalhe com uma interface comum para produtos simples e complexos. Para o sistema, não importa se ele está lidando com um "átomo" (objeto simples) ou com uma "molécula" (composição); ele apenas chama um método (ex: `getPreco()`) e o objeto se resolve.

---

## 3. Os Três Pilares do Composite

Para implementar essa estrutura, dividimos os participantes em três funções:

1.  **Componente (Component):** É a interface ou classe abstrata que descreve as operações comuns tanto para os elementos simples quanto para os complexos. É aqui que definimos o método `executar()` ou `calcular()`.
2.  **Folha (Leaf):** É o elemento básico da árvore que não tem "filhos". Ele implementa o comportamento real da operação. No nosso exemplo, seria o "Martelo".
3.  **Composto (Composite):** É o elemento que possui "filhos" (podem ser Folhas ou outros Compostos). Ele não sabe exatamente o que está dentro dele, ele apenas delega o trabalho para seus filhos e resume os resultados.

---

## 4. Como funciona na prática (Fluxo)
Quando o cliente solicita uma operação ao objeto **Composto** do topo da árvore (a raiz):
1.  O Composto recebe a chamada.
2.  Ele percorre todos os seus elementos filhos (lista de Componentes).
3.  Ele passa a mesma chamada para cada filho.
4.  Se o filho for uma **Folha**, ele retorna seu valor. 
5.  Se o filho for outro **Composto**, ele repete o processo internamente até chegar nas folhas.
6.  O Composto original soma/acumula todos os resultados e devolve ao cliente.

---

## 5. Vantagens e Desvantagens

**Vantagens:**
*   **Polimorfismo em Árvore:** Você pode usar recursão de forma simplificada.
*   **Facilidade de expansão:** Você pode adicionar novos tipos de Folhas ou Compostos sem quebrar o código do cliente.
*   **Limpeza de código:** Elimina a necessidade de verificar o tipo do objeto antes de operar sobre ele.

**Desvantagens:**
*   **Design Genérico Demais:** Às vezes é difícil restringir os componentes de um composto. Por exemplo, se você quisesse que uma "Caixa de Ferramentas" só aceitasse "Ferramentas" e não "Alimentos", o Composite dificulta essa validação em tempo de compilação, pois tudo é tratado como `Component`.

---

## 6. Analogia do Sistema de Arquivos
O exemplo mais clássico do mundo real é o sistema de arquivos do seu computador:
*   **Componente:** `Node` (tem um nome e um tamanho).
*   **Folha:** `Arquivo` (retorna seu próprio tamanho).
*   **Composto:** `Pasta` (retorna a soma do tamanho de todos os arquivos e subpastas dentro dela).

---

### Resumo do Arquiteto
O padrão Composite é sobre **uniformidade**. Se você tem uma estrutura hierárquica e quer que o cliente ignore a diferença entre uma coleção de objetos e um objeto individual, o Composite é a sua ferramenta.