## Desafio: O Guardião de Temas (ThemeManager)

### Contexto

Sua aplicação suporta diferentes temas (Claro, Escuro, Alto Contraste). O `ThemeManager` deve ser um Singleton carregado imediatamente, pois todas as partes da interface dependem dele para renderizar as cores corretas desde o primeiro frame.

### Requisitos do Desafio

1. **Classe `ThemeManager`:**
* Deve utilizar **Eager Initialization** (a instância deve ser criada na própria declaração da variável estática).
* O **Construtor** deve ser privado e deve carregar um tema padrão (ex: "Light").
* A instância deve ser protegida com `readonly` (se possível no TypeScript) para garantir que não seja sobrescrita.


2. **Funcionalidades de Negócio:**
* Atributo privado `currentTheme` (string).
* Método `getTheme()`: Retorna o tema atual.
* Método `setTheme(newTheme: string)`: Altera o tema atual.
* Método `isDarkMode()`: Retorna um booleano (`true` se o tema for "Dark").


3. **Diferencial Teórico:**
* No construtor, adicione um `console.log("ThemeManager instanciado via Eager Initialization.")`.
* Observe no seu teste que essa mensagem aparecerá **antes** mesmo de você interagir com a classe, se o arquivo for importado.

---

### Cenário de Teste (Para validação)

No seu código cliente:

1. Acesse o tema padrão via `ThemeManager.getInstance()` e imprima no console.
2. Altere o tema para "Dark".
3. Crie uma nova variável, pegue a instância novamente e verifique se o método `isDarkMode()` retorna `true`.
4. **Validação de Unicidade:** Verifique se as duas variáveis apontam para a mesma instância.
