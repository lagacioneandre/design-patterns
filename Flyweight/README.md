O padrão **Flyweight** (ou "Peso-Mosca") é um padrão de projeto estrutural focado quase exclusivamente em um único objetivo: **otimização de memória**.

Ele é utilizado quando um sistema precisa criar uma quantidade enorme de objetos semelhantes (milhares ou milhões), o que acabaria esgotando a memória RAM disponível. A estratégia do Flyweight é **compartilhar** o que é comum entre esses objetos, em vez de manter dados repetidos em cada instância.

---

## 1. O Conceito Central: Estado Intrínseco vs. Extrínseco

Para entender o Flyweight, você precisa dividir os dados de um objeto em duas categorias:

### A. Estado Intrínseco (O que é fixo/compartilhável)
São as informações que não mudam e são idênticas para vários objetos. 
* **Exemplo:** Em um jogo de floresta com 1 milhão de árvores, o modelo 3D e a textura das folhas são os mesmos para todas as "Macieiras". Esses dados pesados são o estado **intrínseco**.

### B. Estado Extrínseco (O que é único/contextual)
São as informações que variam de objeto para objeto e dependem do contexto.
* **Exemplo:** A posição $(x, y, z)$ de cada árvore no mapa ou o seu nível de crescimento atual. Esses dados são o estado **extrínseco**.

> **A Mágica do Padrão:** Você remove o estado *intrínseco* de dentro do objeto individual e o coloca em um objeto compartilhado (o Flyweight). O estado *extrínseco* é passado para esse objeto apenas no momento da execução (via parâmetros de método).



---

## 2. A Estrutura do Padrão

O Flyweight geralmente é composto por quatro partes:

1.  **Flyweight (Interface/Classe Abstrata):** Define os métodos que os objetos compartilhados devem ter. Geralmente, esses métodos aceitam o estado extrínseco como argumento.
2.  **Concrete Flyweight:** É a classe que armazena o estado intrínseco. Ela deve ser **imutável** (uma vez criada, seu estado interno não muda, pois ela é compartilhada por muitos).
3.  **Flyweight Factory (Fábrica):** É o coração do padrão. Ela gerencia os objetos Flyweight. Quando o cliente pede um objeto, a fábrica verifica se ele já existe. Se sim, retorna a instância existente; se não, cria uma nova e a guarda para uso futuro.
4.  **Client (Contexto):** O cliente é responsável por armazenar ou calcular o estado extrínseco (como as coordenadas de uma árvore) e passá-lo para o Flyweight quando necessário.

---

## 3. Exemplo Teórico: Editor de Texto

Imagine um editor de texto como o Word. Se você escrever um documento com 1 milhão de caracteres:
* **Sem Flyweight:** Cada letra seria um objeto contendo: caractere ('A'), fonte (Arial), tamanho (12pt), cor (Preto) e posição na página. Isso consumiria gigabytes de RAM.
* **Com Flyweight:** * O caractere, fonte, tamanho e cor tornam-se o **Flyweight**. Você terá apenas um objeto para a letra 'A' em Arial 12.
    * A posição na página é o **Estado Extrínseco**, armazenado pelo editor apenas como uma lista de coordenadas.
    * O sistema desenha 1 milhão de vezes usando apenas as ~26 instâncias de letras existentes.



---

## 4. Quando usar o Flyweight?

Você deve considerar este padrão **apenas** se todos os itens abaixo forem verdadeiros:
1.  A aplicação utiliza uma quantidade massiva de objetos.
2.  Os custos de armazenamento de memória são proibitivos.
3.  A maioria dos estados dos objetos pode ser tornada extrínseca.
4.  A identidade dos objetos não é importante (você não se importa se está usando a "Instância A" ou a "Instância B", desde que elas representem o mesmo dado intrínseco).

---

## 5. Prós e Contras

**Vantagens:**
* **Redução drástica de RAM:** Pode permitir que sistemas rodem em hardwares limitados ou lidem com volumes de dados gigantescos.

**Desvantagens:**
* **Complexidade de Código:** O código fica mais difícil de ler, pois você separa os dados do objeto em dois lugares.
* **CPU vs RAM:** Pode haver um pequeno custo extra de processamento (CPU), pois o estado extrínseco precisa ser recalculado ou passado toda vez que um método do Flyweight é chamado.

---

### Resumo do Arquiteto
O Flyweight é sobre **compartilhamento inteligente**. Em vez de 1.000 objetos pesados, você tem 1 objeto compartilhado e 1.000 pequenos registros de onde e como usá-lo.