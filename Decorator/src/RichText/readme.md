## Desafio: O Renderizador de Documentos "Rich Text"

### Contexto
Você tem um sistema que gera relatórios em texto simples. O cliente agora quer que esses relatórios possam ser exportados com diferentes formatações: **Negrito**, **Itálico** e até **Tag de Código**. O detalhe é que um mesmo texto pode ter todas essas formatações ao mesmo tempo.

### Requisitos do Desafio

#### 1. O Componente (`TextElement`)
* Interface com o método `render(): string`.

#### 2. O Componente Concreto (`PlainText`)
* Recebe uma string no construtor e o `render()` apenas a retorna.

#### 3. O Decorador Base (`TextDecorator`)
* Classe abstrata que implementa `TextElement`.
* Recebe um `TextElement` no construtor.
* **Importante:** O método `render()` deve chamar o `render()` do objeto interno (`super.render()`).

#### 4. Decoradores Concretos
* **BoldDecorator:** Envolve o texto renderizado com as tags `<b>` e `</b>`.
* **ItalicDecorator:** Envolve o texto renderizado com as tags `<i>` e `</i>`.
* **CodeDecorator:** Envolve o texto renderizado com as tags `<code>` e `</code>`.

---

### Cenário de Teste (O Desafio da "Cebola" de Tags)

1.  Crie um texto base: `"Olá Mundo"`.
2.  Aplique os decoradores para que o resultado final seja:
    `<code><i><b>Olá Mundo</b></i></code>`
3.  **Reflexão:** Se você mudar a ordem dos decoradores na criação (ex: colocar o `Code` primeiro e o `Bold` por último), o resultado final das tags muda de ordem? 
    * Exemplo: `<b><i><code>Olá Mundo</code></i></b>`

---

### O que este desafio foca?
* **A Chamada Recursiva:** Garante que você não esqueça de chamar o `this.component.render()` (ou `super.render()`).
* **A "Embalagem" (Wrapping):** Mostra como o Decorator adiciona algo *em volta* do conteúdo existente, preservando o que já foi feito pelas camadas internas.

---

### Dica de Ouro:
Desta vez, certifique-se de que cada `process` ou `render` dos decoradores faça algo como:
`return "<b>" + super.render() + "</b>";`

Isso garante que a "bola" seja passada para frente e o resultado volte sendo "embrulhado" pelas tags.

**Quando terminar essa estrutura de tags, mande o código para vermos se a hierarquia de renderização ficou correta!**