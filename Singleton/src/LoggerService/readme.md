## Desafio: O Sentinela de Logs (Logger Service)

### Contexto

Em uma aplicação de grande escala, múltiplos serviços (Autenticação, Banco de Dados, Processamento de Vendas) precisam registrar eventos simultaneamente. Se cada serviço criasse seu próprio gravador de arquivos, teríamos conflitos de escrita e consumo excessivo de memória.

Sua tarefa é criar um **Logger Service** centralizado usando o padrão Singleton.

### Requisitos do Desafio

1. **Classe `Logger`:**
* Deve utilizar **Lazy Initialization**.
* O **Construtor** deve ser estritamente privado.
* Deve possuir um atributo privado `logs` que é um array de strings (o histórico de logs).


2. **Método `getInstance()`:**
* Deve garantir que apenas uma instância de `Logger` exista.
* Deve exibir uma mensagem no console apenas na **primeira vez** que for criado (ex: "Log Service iniciado pela primeira vez").


3. **Funcionalidades de Negócio:**
* Método `addLog(message: string)`: Adiciona uma mensagem ao array de logs, prefixada com o timestamp atual (ex: `[2026-02-24 19:15] Usuário logado`).
* Método `showLogs()`: Exibe todos os logs registrados no console.
* Método `clearLogs()`: Limpa o histórico de logs.

---

### Cenário de Teste (Para validação)

No seu código cliente (método `execute` ou similar):

1. Tente obter a instância do Logger e adicione um log: `"Iniciando sistema..."`.
2. Em outra parte do código (simulando outro arquivo), obtenha a instância novamente e adicione: `"Conexão com banco de dados estabelecida"`.
3. Obtenha uma terceira "instância" e chame `showLogs()`.
4. **Validação Final:**
* O console deve mostrar as duas mensagens no mesmo histórico.
* Verifique se `logger1 === logger2` retorna `true`.
* Tente instanciar com `new Logger()` e confirme que o TypeScript gera um erro de compilação.
