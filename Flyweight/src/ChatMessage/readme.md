Imagine que você está construindo o sucessor do WhatsApp ou Slack. Milhões de usuários trocam mensagens a cada segundo. Cada mensagem tem um texto, mas também tem metadados visuais: o **Avatar** do usuário, a **Cor do Nome** e a **Fonte** preferida.

### O Problema (Sem Flyweight)
Se cada mensagem enviada carregar dentro dela um objeto completo com a imagem do avatar (Buffer de 50KB) e as configurações de estilo, o servidor vai travar assim que o chat ficar movimentado.

---

## Desafio: O Otimizador de Mensagens de Chat

### 1. O Flyweight (Estado Intrínseco)
Crie uma classe `UserStyle` (ou `UserIntrinsicData`).
* **Dados fixos:** `username`, `avatar` (uma string longa simulando um Base64), e `headerColor`.
* **Método:** `display(messageText: string, timestamp: string)`. Este método recebe o estado extrínseco para montar a visualização da mensagem.

### 2. A Flyweight Factory (`UserStyleFactory`)
* Deve gerenciar um mapa/dicionário de `UserStyle`.
* Se o usuário "Alice" já tiver um estilo criado, a fábrica deve retornar a mesma instância para todas as mensagens que a "Alice" enviar.

### 3. O Contexto (Estado Extrínseco)
Crie a classe `ChatMessage`.
* **Dados únicos:** `text` e `timestamp`.
* **Referência:** Um link para o objeto `UserStyle` compartilhado.

---

### Requisitos Técnicos do Desafio

1.  **Imutabilidade:** Garanta que o `UserStyle` não possa ser alterado depois de criado.
2.  **Verificação de Memória:** No seu `Client`, crie um loop ou uma sequência que gere 5 mensagens para o usuário "Bob" e 5 para a "Alice".
3.  **Prova Real:** Adicione um `console.log` dentro da Factory para mostrar toda vez que um **novo** objeto de estilo for criado. Se o padrão estiver certo, você deve ver apenas **2 logs de criação**, mesmo enviando **10 mensagens**.

---

### O que você deve observar:
* As instâncias `m1` e `m2` devem apontar para exatamente o **mesmo endereço de memória** do objeto de estilo da Alice.
* O estado extrínseco (`"Oi pessoal!"` e `"10:00"`) só deve se encontrar com o estilo no momento do `render()`.