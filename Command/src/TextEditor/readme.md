##📝 Exercício de Prática: Controle de Edição de Texto (Padrão Command)

###Descrição do Problema: Editor de Texto com Histórico
Você deve desenvolver o núcleo de um processador de textos simplificado. O sistema permite que o usuário escreva blocos de texto, apague conteúdo e, o mais importante, navegue pelo histórico de alterações através da funcionalidade **Desfazer (Undo)**.

**Seu desafio é aplicar o Padrão Command para:**

1. **Encapsular as ações** de edição (inserir texto e deletar texto) como objetos.
2. **Gerenciar o estado** do documento para que cada comando saiba exatamente o que foi alterado, permitindo a reversão precisa.

####Estrutura Sugerida:* **Receiver (Receptor):** Crie a classe `Document`. Ela deve conter uma string `content` e métodos como `insert(text, position)` e `delete(length, position)`.
* **Command (Interface):** Defina a interface com os métodos `execute()` e `undo()`.
* **Concrete Commands (Comandos Concretos):** * `InsertTextCommand`: Ao desfazer, deve remover exatamente o texto que foi inserido.
* `DeleteTextCommand`: **Atenção aqui!** Para o `undo()` funcionar, este comando deve salvar o texto que foi deletado antes de removê-lo do documento, para poder restaurá-lo na posição correta.


* **Invoker (Invocador):** Crie a classe `EditorHistory`. Ela deve gerenciar a pilha de comandos e fornecer o método `undo()`.

**Objetivo principal:** Lidar com o gerenciamento de estado interno do comando (como armazenar o texto deletado) para garantir que o receptor volte ao estado anterior sem perdas de dados.