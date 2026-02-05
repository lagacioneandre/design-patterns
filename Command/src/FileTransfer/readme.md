Com prazer! Vamos subir o nível. Este desafio vai exigir que você lide com **múltiplos estados**, **validações de erro** e a garantia de que o histórico só armazene o que realmente funcionou.

---

### Desafio Intermediário: Sistema de Transações de Arquivos

**Cenário:**
Você está criando um gerenciador de arquivos simplificado (apenas em memória). O sistema permite criar, deletar e, o mais importante, **mover** arquivos entre pastas. O desafio é que operações de arquivo podem falhar (ex: tentar mover um arquivo que não existe ou mover para um lugar onde já existe um arquivo com o mesmo nome).

**Objetivo:**
Implementar o padrão **Command** garantindo a integridade do sistema: se um comando falhar, ele não deve ir para o histórico. Se ele for desfeito, o sistema deve retornar ao estado anterior exato.

**Requisitos:**

1. **O Receiver (`FileSystem`):**
* Deve manter uma representação de arquivos e seus caminhos (ex: um `Map<string, string[]>` onde a chave é a pasta e o valor é a lista de nomes de arquivos).
* Deve ter métodos para: `addFile(path, name)`, `removeFile(path, name)`.


2. **A Interface (`ICommand`):**
* O método `execute()` agora deve **retornar um booleano** (`true` se teve sucesso, `false` se falhou).
* O método `undo()` permanece igual.


3. **Comandos Concretos (Passando dados pelo construtor):**
* `CreateFileCommand`: Recebe o caminho e o nome do arquivo. Falha se o arquivo já existir.
* `MoveFileCommand`: Recebe o `sourcePath`, `destPath` e o `fileName`.
* **Regra de Ouro:** Para mover, você precisa remover de um lugar e adicionar em outro. Se a pasta de destino não existir ou o arquivo de origem não for encontrado, o comando deve falhar e **não alterar nada** (rollback).


4. **O Invoker (`FileInvoker`):**
* Seu método `run(command)` deve chamar o `execute()`.
* **Apenas se o retorno for `true**`, o comando deve ser salvo na pilha de histórico.
* Deve ter o método `undo()`.


5. **O Cliente:**
* Tente realizar uma operação válida (Criar arquivo 'foto.png' na 'Home').
* Tente realizar uma operação **inválida** (Mover 'documento.pdf' que não existe).
* Verifique se, ao chamar o `undo()`, o sistema apenas desfaz a operação de 'foto.png' e ignora o erro da segunda tentativa.


---

**Dica de Ouro:** No `MoveFileCommand`, para o `undo()` ser seguro, o comando precisa ter armazenado internamente de onde o arquivo veio e para onde ele foi exatamente.

Prepare o seu café, pois o gerenciamento de erros dentro do `execute()` é o que separa um código iniciante de um código robusto! Quando estiver pronto, envie sua solução para analisarmos.