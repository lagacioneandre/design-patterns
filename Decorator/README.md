O padrão **Decorator** (também conhecido como *Wrapper* ou "Embalador") é um padrão de projeto estrutural que permite adicionar novos comportamentos a um objeto de forma dinâmica, colocando-os dentro de "invólucros" (objetos de decoração).

Imagine o Decorator como as **camadas de uma cebola** ou como alguém se vestindo para o frio: você é o objeto base, e cada peça de roupa que você coloca (camiseta, blusa, casaco) adiciona uma "funcionalidade" (calor), mas você continua sendo a mesma pessoa.

---

## 1. O Problema: Rigidez da Herança
Imagine que você tem uma classe `Notificador`.
* Você quer enviar e-mail. OK, cria uma subclasse `EmailNotifier`.
* Você quer enviar SMS. Cria `SMSNotifier`.
* **O Problema:** E se você quiser enviar **E-mail + SMS**? Ou **E-mail + WhatsApp + SMS**?

Se usar herança, você terá uma explosão de subclasses: `EmailAndSMSNotifier`, `EmailAndWhatsAppNotifier`, etc. Isso é insustentável. A herança é **estática** (acontece em tempo de compilação); você não pode mudar o comportamento de um objeto depois que ele foi criado.

---

## 2. A Solução: Composição e "Embalagem"
O Decorator propõe o uso de **Composição** em vez de Herança. Você cria um objeto decorador que:
1.  Implementa a **mesma interface** que o objeto que ele decora.
2.  Contém uma referência para o objeto original.
3.  Executa sua própria lógica **antes ou depois** de delegar a chamada para o objeto interno.

---

## 3. Os Quatro Pilares do Decorator

Para implementar o padrão, seguimos esta estrutura:

1.  **Componente (Interface):** Define a interface comum para o objeto real e para os decoradores (ex: `interface Notificador`).
2.  **Componente Concreto:** O objeto básico que será decorado (ex: a classe `EmailNotifier`).
3.  **Decorador Base:** Uma classe que contém um campo para armazenar o componente e implementa a interface do componente, delegando todas as chamadas para o objeto guardado.
4.  **Decoradores Concretos:** Classes que herdam do Decorador Base e adicionam o comportamento extra (ex: `SMSDecorator`, `WhatsAppDecorator`).

---

## 4. Como funciona a "Pilha" de Execução
A magia acontece quando você empilha os objetos:
```typescript
const meuApp = new WhatsAppDecorator(new SMSDecorator(new EmailNotifier()));
meuApp.enviar("Olá!");
```
Quando você chama `enviar()`:
1.  O **WhatsAppDecorator** faz sua parte (envia o zap) e chama o `enviar()` do próximo.
2.  O **SMSDecorator** faz sua parte (envia o SMS) e chama o `enviar()` do próximo.
3.  O **EmailNotifier** (objeto base) faz sua parte final.

O cliente nem percebe que está falando com uma "pilha" de objetos, pois todos parecem um simples `Notificador`.

---

## 5. Vantagens e Cuidados

**Vantagens:**
* **Flexibilidade:** Você pode adicionar ou remover responsabilidades em tempo de execução.
* **Princípio de Responsabilidade Única (SRP):** Em vez de uma classe gigante que faz tudo, você tem várias classes pequenas que fazem uma única coisa muito bem.
* **Combinação Infinita:** Você pode combinar os decoradores em qualquer ordem.

**Desvantagens:**
* **Código "Cebola":** Se houver muitos decoradores, pode ser difícil debugar quem está alterando o quê na pilha.
* **Configuração Inicial:** O código que monta a pilha (o cliente) pode ficar um pouco feio se você tiver muitos níveis de decoração.

---

## 6. Analogia do Mundo Real: Café
É o exemplo mais didático:
* **Componente:** `Cafe` (R$ 5,00).
* **Decorator Leite:** Adiciona R$ 2,00 ao preço e "Leite" à descrição.
* **Decorator Chantilly:** Adiciona R$ 3,00 ao preço e "Chantilly" à descrição.

Se você quiser um **Café com Leite e Chantilly**, você envolve o Café no Leite e depois no Chantilly. O preço final será a soma recursiva de todos eles.

---

### Resumo do Arquiteto
O **Composite** (que vimos antes) organiza objetos em **Árvores** (Hierarquia). O **Decorator** organiza objetos em **Pilhas** (Funcionalidade Aditiva).

No Composite, o pai tem **vários** filhos. No Decorator, o decorador tem **apenas um** filho (o objeto decorado).