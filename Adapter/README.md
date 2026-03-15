O padrão **Adapter** (também conhecido como **Wrapper**) é um padrão de design **estrutural** que permite que objetos com interfaces incompatíveis colaborem entre si. Em termos simples, ele atua como um tradutor ou um conversor de tomada.

Imagine que você tem um dispositivo que funciona com uma tomada de 3 pinos (padrão brasileiro), mas está em um hotel na Europa que oferece apenas tomadas de 2 pinos redondos. Você não vai quebrar a parede do hotel nem trocar o cabo do seu aparelho; você usa um **adaptador**.

---

## 1. O Problema: Incompatibilidade de Interfaces

No desenvolvimento de software, é comum enfrentarmos situações onde:

* Você tem um sistema legado que funciona perfeitamente.
* Você precisa usar uma biblioteca de terceiros ou um novo serviço.
* **O conflito:** A biblioteca nova espera que os dados sejam enviados em um formato (ex: XML), mas seu sistema trabalha com outro (ex: JSON). Ou a biblioteca espera que um método se chame `enviar()`, mas seu código chama `processar()`.

Se você alterar seu código original para se adaptar à biblioteca, você corre o risco de quebrar outras partes do sistema e violar o **Princípio do Aberto/Fechado** (OCP).

---

## 2. A Estrutura do Adapter

O padrão Adapter é composto por quatro elementos principais:

1. **Client (Cliente):** É a classe que contém a lógica de negócio atual e quer utilizar a funcionalidade da biblioteca externa. Ela conhece apenas a "Target Interface".
2. **Target Interface (Interface Alvo):** É o contrato/protocolo que o Cliente entende. Define quais métodos o Cliente pode chamar.
3. **Adaptee (Adaptado):** É a classe estrangeira, o serviço de terceiros ou o código legado que possui a funcionalidade que desejamos, mas cuja interface é incompatível com o Cliente.
4. **Adapter (Adaptador):** É a classe que "veste" o objeto Adaptado. Ela implementa a Target Interface e traduz as chamadas feitas pelo Cliente para o formato que o Adaptado entende.

---

## 3. Tipos de Implementação

Existem duas formas clássicas de implementar o Adapter, dependendo do que a sua linguagem de programação permite:

### A. Object Adapter (Composição)

Nesta abordagem, o Adaptador contém uma **instância** do objeto que ele está tentando adaptar.

* **Como funciona:** O Adaptador implementa a interface que o cliente espera e, dentro de seus métodos, ele chama os métodos do objeto adaptado.
* **Vantagem:** É o mais flexível (segue o princípio de "composição sobre herança"). O mesmo adaptador pode funcionar com o Adaptado e qualquer uma de suas subclasses.

### B. Class Adapter (Herança)

Nesta abordagem, o Adaptador herda de ambas as classes ao mesmo tempo (herança múltipla).

* **Como funciona:** Ele herda a interface do Cliente e a implementação do Adaptado simultaneamente.
* **Desvantagem:** Requer herança múltipla, que não existe em linguagens como Java, C# ou TypeScript/JavaScript. Além disso, ele acopla fortemente o adaptador à classe específica que está sendo adaptada.

---

## 4. O Fluxo de Execução

1. O **Cliente** chama um método no **Adaptador** seguindo a interface padrão.
2. O **Adaptador** recebe essa chamada.
3. O **Adaptador** converte os dados ou traduz a lógica para o formato do **Adaptado**.
4. O **Adaptador** repassa a chamada para o método específico do **Adaptado**.
5. O Cliente recebe o resultado sem nunca ter sabido que houve uma conversão no meio do caminho.

---

## 5. Quando usar o Adapter?

* **Integração com terceiros:** Quando você usa uma biblioteca externa que tem uma API que não bate com o seu código.
* **Refatoração de Legado:** Quando você quer que novas partes do sistema usem componentes antigos sem herdar a complexidade ou a interface ruim do código antigo.
* **Padronização:** Quando você tem várias classes com funcionalidades similares mas nomes de métodos diferentes, e você quer criar uma interface única para lidar com todas elas de forma polimórfica.

---

## 6. Vantagens e Desvantagens

**Vantagens:**

* **Separação de Preocupações:** O código de conversão de dados é separado da lógica de negócio.
* **Princípio do Aberto/Fechado:** Você pode introduzir novos adaptadores no sistema sem quebrar o código cliente existente.
* **Reuso:** Permite que você use classes que, de outra forma, seriam inúteis por causa da interface incompatível.

**Desvantagens:**

* **Complexidade:** O código fica ligeiramente mais complexo com a introdução de novas interfaces e classes (o famoso "over-engineering").
* **Custo de Performance:** Em sistemas extremamente sensíveis, a camada extra de tradução pode introduzir um overhead mínimo (geralmente desprezível).