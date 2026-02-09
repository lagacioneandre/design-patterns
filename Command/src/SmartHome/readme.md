Com certeza! É uma excelente forma de validar se o conhecimento está "blindado" contra o contexto. Vamos mudar totalmente o cenário: saímos da logística e entramos na **Automação Residencial (Smart Home)**.

---

### Desafio: O Botão "Sair de Casa" (MacroCommand)

**Cenário:**
Você está desenvolvendo o software para um controle remoto inteligente. O usuário quer criar "Rotinas". A rotina mais importante é a **"Sair de Casa"**, que deve, com um único clique:

1. Apagar todas as luzes.
2. Desligar o Ar-Condicionado.
3. Trancar a porta principal.

Se o usuário perceber que esqueceu a chave dentro de casa logo após apertar o botão, ele deve poder clicar em **"Desfazer"**, e o sistema deve restaurar o estado anterior de todos os aparelhos (abrir a porta, ligar as luzes e o ar novamente).

**Objetivo:**
Implementar o padrão Command do zero, culminando em um `MacroCommand` que gerencia essa rotina.

---

### Requisitos Técnicos

#### 1. Os Receivers (Aparelhos)

Crie classes diferentes para cada tipo de aparelho, pois cada um tem seu comportamento:

* **`Light`**: Métodos `turnOn()` e `turnOff()`.
* **`AirConditioner`**: Métodos `powerOn()` e `powerOff()`.
* **`SecuritySystem`**: Métodos `lockAll()` e `unlockAll()`.

> *Dica: Cada classe deve ter uma propriedade privada `isOn` ou `isLocked` para você saber o estado atual.*

#### 2. A Interface (`ICommand`)

* `execute(): boolean`
* `undo(): void`

#### 3. Comandos Concretos (Pelo menos 3)

* `LightCommand`, `ACCommand`, `SecurityCommand`.
* Cada comando deve receber seu respectivo aparelho no construtor.
* **Importante:** Eles devem salvar o estado anterior do aparelho no `execute()` para que o `undo()` funcione perfeitamente.

#### 4. O MacroCommand (`HomeRoutine`)

* Deve conter uma lista de comandos (`ICommand[]`).
* O `execute()` deve rodar todos os comandos da lista. Se um falhar, a rotina para.
* O `undo()` deve reverter todos os comandos **na ordem inversa**.

#### 5. O Invoker (`SmartRemote`)

* Deve ter um método `pressButton(command: ICommand)`.
* Deve gerenciar a pilha de histórico.
* Deve ter o método `pressUndo()`.

#### 6. O Cliente

* Instancie os aparelhos.
* Crie os comandos individuais.
* Crie a "Rotina de Saída" (MacroCommand) e adicione os comandos nela.
* Execute a rotina pelo controle remoto e depois desfaça a operação.

---

### O que este desafio testa:

1. **Polimorfismo:** Sua lista de comandos no MacroCommand tratará objetos diferentes (Luz, AC, Tranca) como o mesmo tipo (`ICommand`).
2. **Encapsulamento:** O controle remoto não sabe quais aparelhos existem, ele só conhece o objeto "Comando".
3. **Composição:** O conceito de um objeto que contém outros objetos do mesmo tipo.

**Dica Extra:** Tente fazer com que os aparelhos imprimam no console o que está acontecendo (ex: *"Luzes apagadas!"* ou *"Portas trancadas!"*). Isso ajuda a visualizar a ordem inversa no `undo`.

**Quando terminar essa estrutura completa, poste o código aqui. Estou curioso para ver como você vai organizar esses Receivers diferentes!**