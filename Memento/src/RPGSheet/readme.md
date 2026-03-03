## Desafio: O Editor de Personagem (RPG Sheet)

### Contexto

Você está criando um sistema de criação de personagens para um jogo de RPG. O personagem possui vários atributos: **Força, Agilidade, Inteligência, Vida** e uma **Bio** (texto). O jogador pode gastar pontos para aumentar esses atributos ou editar a história do personagem.

### O Problema

O jogador costuma mudar de ideia constantemente ("Vou tirar 2 de Força e colocar em Agilidade"). Salvar a ficha inteira a cada pequeno ajuste de ponto é ineficiente. O objetivo é salvar apenas o "desvio" de cada alteração.

### Requisitos do Desafio

1. **O Originator (CharacterSheet):** Mantém o estado atual dos atributos (ex: Força: 15, Agilidade: 10) e a biografia.
2. **O Memento Incremental (AttributeDelta):** * Em vez de salvar "Força: 13", o memento deve salvar o valor da mudança, por exemplo: `{"attr": "Força", "delta": -2}`.
* Para o campo de **Bio**, o memento deve salvar apenas a versão anterior do texto (ou a diferença, se você quiser arriscar) para que possa ser restaurada.


3. **O Caretaker (UndoManager):** Deve permitir que o usuário desfaça as alterações uma a uma. Ao desfazer, o sistema pega o "delta" e aplica a operação inversa no `CharacterSheet`.

### Cenário de Teste

* **Estado Inicial:** Força 10, Agilidade 10.
* **Ação 1:** Jogador aumenta Força para 12. (Memento deve guardar: `+2 em Força`).
* **Ação 2:** Jogador aumenta Agilidade para 11. (Memento deve guardar: `+1 em Agilidade`).
* **Ação 3:** Jogador edita a Bio de "" para "Um guerreiro". (Memento guarda a string vazia `""`).
* **Undo:** O sistema deve primeiro restaurar a Bio para vazio, depois reduzir a Agilidade para 10, e por fim reduzir a Força para 10.
