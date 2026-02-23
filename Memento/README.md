O padrão **Memento** é um padrão comportamental que permite capturar e externalizar o estado interno de um objeto para que ele possa ser restaurado posteriormente, **sem violar o princípio do encapsulamento**.

---

## 1. O Dilema do Encapsulamento

Em uma arquitetura bem desenhada, os campos de um objeto devem ser privados. Se você quiser salvar o estado de um objeto "por fora", a solução ingênua seria tornar todos os campos públicos ou criar *getters* para tudo. Isso exporia os detalhes internos do objeto (quebra de encapsulamento).

O Memento resolve isso criando um objeto "cofre" que só o seu criador tem permissão para ler, mas que qualquer um pode guardar.

---

## 2. Os Três Pilares da Arquitetura Memento

O padrão é definido pela interação estrita entre três papéis:

* **Originator (Originador):** É o objeto que possui o estado que queremos salvar. Ele é o único que pode criar o Memento e, mais tarde, o único que pode ler os dados dele para restaurar seu próprio estado.
* **Memento (Lembrança):** Um objeto passivo que armazena o estado do Originator. A regra de ouro aqui é que o Memento deve ser **imutável**. Ele não possui lógica de negócio, apenas dados.
* **Caretaker (Zelador):** É o responsável por guardar o Memento. Ele nunca mexe no conteúdo do Memento; ele apenas o armazena (geralmente em uma pilha) e o devolve ao Originator quando solicitado.

---

## 3. O Conceito de Interface Estreita vs. Larga

Este é o detalhe que separa uma implementação amadora de uma profissional:

* **Interface Larga (Wide Interface):** É a visão que o **Originator** tem do Memento. Ele consegue ver todos os campos e métodos para recuperar o estado.
* **Interface Estreita (Narrow Interface):** É a visão que o **Caretaker** tem. Para ele, o Memento é uma "caixa preta" opaca. Ele não consegue ver nem alterar o que está dentro.

Em linguagens como C++, isso é feito com classes `friend`. Em linguagens modernas como TypeScript ou Java, costumamos usar interfaces vazias ou classes aninhadas privadas.

---

## 4. Vantagens Arquiteturais

* **Preservação do Encapsulamento:** Os detalhes complexos do estado interno do originador não são expostos a outros objetos.
* **Simplificação do Originator:** O originador não precisa gerenciar seu próprio histórico de versões; ele apenas entrega um "instantâneo" e o zelador cuida do resto.
* **Rastreabilidade:** Permite criar sistemas de *Undo/Redo* confiáveis e pontos de restauração (*checkpoints*) em processos longos.

---

## 5. Custos e Considerações Técnicas

Como arquiteto, você deve estar ciente dos "trade-offs":

* **Consumo de Memória:** Se o estado do Originator for muito grande e as mudanças forem frequentes, salvar Mementos completos pode exaurir a memória rapidamente.
* **Custo de Cópia:** O processo de copiar todo o estado para um novo objeto Memento pode ter impacto na performance se não for bem otimizado.
* **Ciclo de Vida:** O Caretaker deve ser capaz de destruir Mementos antigos para liberar recursos, o que exige uma estratégia de limpeza de cache ou histórico limitado.

---

## 6. Memento Incremental (Variação Avançada)

Como vimos nos seus desafios, quando o custo de memória é alto, evoluímos o padrão para o **Memento Incremental**. Em vez de salvar o estado completo (), salvamos apenas a diferença () entre  e . Isso economiza espaço, mas aumenta a complexidade computacional da restauração, pois o sistema precisa "reprocessar" a cadeia de deltas para chegar ao estado desejado.

---

### Conclusão Teórica

O Memento é o padrão da "máquina do tempo". Ele é essencial para qualquer aplicação que exija resiliência de dados e a capacidade de reverter erros do usuário ou falhas de sistema sem comprometer a integridade da estrutura de objetos.