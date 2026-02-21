## Desafio: O Editor de Código com Histórico de Linhas

### Contexto

Você está desenvolvendo o núcleo de um editor de texto (estilo VS Code ou Notepad). Em vez de salvar o arquivo inteiro a cada letra digitada, o que seria desastroso para a memória em arquivos grandes, você deve salvar apenas as **mudanças por linha**.

### O Problema

O usuário possui um documento com várias linhas. Ele pode adicionar uma linha, remover uma linha ou editar o conteúdo de uma linha específica. O seu Memento Incremental deve ser capaz de reverter apenas a operação realizada.

### Requisitos do Desafio

1. **O Originator (`TextDocument`):**
* Mantém uma lista de strings (`string[]`), onde cada posição do array é uma linha do documento.
* Deve ter métodos para: `addLine(content)`, `editLine(index, newContent)` e `removeLine(index)`.

2. **O Memento Incremental (`TextDelta`):**
* Deve armazenar o **tipo da operação** (ex: 'INSERT', 'UPDATE', 'DELETE').
* Deve armazenar o **índice** da linha afetada.
* Deve armazenar o **valor anterior** (o que foi perdido ou alterado) para permitir o rollback.

3. **O Caretaker (`EditorHistory`):**
* Gerencia uma pilha de `TextDelta`.
* Ao chamar `undo()`, ele deve aplicar a lógica inversa:
* Se a operação foi `INSERT`, o undo deve **remover** a linha naquele índice.
* Se foi `UPDATE`, o undo deve **recolocar o texto antigo** naquele índice.
* Se foi `DELETE`, o undo deve **inserir novamente** a linha que foi apagada no índice correto.

### Cenário de Teste

1. **Estado Inicial:** Documento vazio `[]`.
2. **Ação 1:** Adicionar "Linha 1". (Histórico salva: Inserção no índice 0).
3. **Ação 2:** Adicionar "Linha 2". (Histórico salva: Inserção no índice 1).
4. **Ação 3:** Editar a "Linha 1" para "Linha 1 Modificada". (Histórico salva: Update no índice 0, valor antigo: "Linha 1").
5. **Undo 1:** O documento deve voltar a ter "Linha 1" e "Linha 2".
6. **Undo 2:** O documento deve ter apenas "Linha 1".
