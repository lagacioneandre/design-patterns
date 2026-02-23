O **Factory Method** (ou Método Fábrica) é um padrão de criação que resolve o problema de criar objetos sem ter que especificar a classe exata do objeto que será criado.

É o padrão que utiliza a **herança para delegar a responsabilidade de instanciação**. Se o Abstract Factory é uma "fábrica de fábricas", o Factory Method é um único "método de fabricação" que as subclasses podem sobrescrever.

---

## 1. O Problema: Acoplamento ao "New"

O maior inimigo da extensibilidade é o operador `new` espalhado pelo código de negócio. Se você instancia uma classe concreta diretamente (ex: `new PedidoCorreios()`), o seu código fica acoplado a essa implementação. Se amanhã você precisar de um `PedidoTransportadora`, terá que alterar todo o código que usa o `new`.

O Factory Method sugere que você substitua chamadas diretas de construção de objetos por chamadas a um método "fábrica" especial.

---

## 2. Os Componentes do Padrão

Para implementar este padrão, dividimos a lógica em quatro elementos:

* **Product (Interface):** Define a interface de todos os objetos que o método fábrica pode criar.
* **Concrete Product:** As implementações reais da interface do produto.
* **Creator (Classe Abstrata ou Interface):** Declara o **Factory Method**. O ponto crucial é que a lógica principal do Creator trabalha apenas com a interface `Product`, sem saber qual objeto concreto será retornado.
* **Concrete Creator:** Sobrescreve o Factory Method para retornar uma instância de um `Concrete Product` específico.

---

## 3. A Dinâmica: "Inversão de Decisão"

Diferente de uma fábrica simples (um método estático com um `switch/case`), no **Factory Method**, a decisão de *qual* objeto criar é empurrada para as subclasses.

1. A classe base `Logistica` tem um método `planejarEntrega()`.
2. Dentro de `planejarEntrega()`, ela chama `criarTransporte()`.
3. A classe `LogisticaMaritima` sobrescreve `criarTransporte()` para retornar um `Navio`.
4. A classe `LogisticaTerrestre` sobrescreve para retornar um `Caminhao`.

O código de `planejarEntrega()` permanece idêntico e intocado, independentemente de estarmos falando de mar ou terra.

---

## 4. Vantagens Arquiteturais

* **Single Responsibility Principle (SRP):** Você move o código de criação do produto para um único lugar, facilitando a manutenção.
* **Open/Closed Principle (OCP):** Você pode introduzir novos tipos de produtos no sistema sem quebrar o código cliente existente. Basta criar uma nova subclasse do Creator.
* **Desacoplamento:** O código de alto nível não depende de classes de baixo nível. Ambos dependem da abstração do `Product`.
* **Flexibilidade de Hook:** O Factory Method pode fornecer uma implementação padrão que pode ser estendida ou modificada pelas subclasses, servindo como um "gancho" para customização.

---

## 5. Diferenças Cruciais: Factory Method vs. Abstract Factory

Esta é a distinção teórica que separa os juniores dos especialistas:

* **Factory Method:** Baseia-se em **herança**. A criação de objetos é feita sobrescrevendo um método em uma subclasse. Ele cria **um** produto por vez.
* **Abstract Factory:** Baseia-se em **composição**. Uma fábrica é um objeto que é passado para o cliente. Ele cria **famílias** de produtos relacionados.

---

## 6. Quando usar na Vida Real?

O Factory Method é ideal quando:

* Você não sabe de antemão os tipos exatos e dependências dos objetos com os quais seu código deve trabalhar.
* Você quer economizar recursos do sistema reutilizando objetos existentes em vez de recriá-los (como em um pool de conexões).
* Você deseja fornecer aos usuários da sua biblioteca ou framework uma maneira de estender seus componentes internos.

---

### Conclusão Teórica

O Factory Method é sobre **adiar a instanciação**. Em vez de decidir no código principal qual objeto usar, você define uma interface de criação e permite que o futuro decida, através de subclasses, qual será o objeto real.