Como um arquiteto, quando optamos pela **Eager Initialization** (Inicialização Antecipada), estamos priorizando a **disponibilidade imediata** e a **segurança em ambientes multithread**. Diferente da inicialização *Lazy* (preguiçosa), aqui o objeto é criado assim que a classe é carregada pela primeira vez na memória.

Aqui está um exemplo clássico de um gerenciador de configurações do sistema:

---

### Exemplo: `ConfigurationManager` (Eager Singleton)

```typescript
/**
 * O Singleton Eager é carregado assim que o módulo é importado.
 * Em linguagens como Java ou C#, isso ocorre no carregamento da classe.
 * No TypeScript/JavaScript, ocorre na execução do módulo.
 */
export class ConfigurationManager {
    // 1. A instância é criada IMEDIATAMENTE na declaração.
    // É 'private' para ninguém acessar o campo diretamente.
    // É 'static' para pertencer à classe, não às instâncias.
    // É 'readonly' para garantir que, uma vez criada, a referência nunca mude.
    private static readonly INSTANCE: ConfigurationManager = new ConfigurationManager();

    private settings: Record<string, string> = {};

    // 2. O construtor é PRIVADO.
    // Isso impede terminantemente o uso de 'new ConfigurationManager()'.
    private constructor() {
        console.log("Instância de ConfigurationManager criada antecipadamente (Eager).");
        this.loadSettings();
    }

    // 3. Método de acesso global.
    // Como a instância já foi criada lá em cima, este método apenas a retorna.
    // Não há necessidade de 'if (instance == null)', o que o torna muito rápido.
    public static getInstance(): ConfigurationManager {
        return ConfigurationManager.INSTANCE;
    }

    private loadSettings(): void {
        // Simulação de carregamento de um arquivo .env ou config.json
        this.settings["appName"] = "Sistema Galáctico";
        this.settings["version"] = "2.5.0";
    }

    public getSetting(key: string): string {
        return this.settings[key];
    }
}

// --- Código Cliente ---

// Note que aqui não chamamos 'new'. 
// A instância já existe na memória antes mesmo desta linha ser executada.
const config = ConfigurationManager.getInstance();
console.log(config.getSetting("appName")); // Saída: Sistema Galáctico

```

---

### Explicação Detalhada da Implementação

#### A Variável Estática `INSTANCE`

Ao declarar `private static readonly INSTANCE = new ConfigurationManager()`, estamos aproveitando o mecanismo de carregamento de classes do ambiente de execução. No momento em que o script é interpretado e a classe definida, o motor do JavaScript executa a expressão de inicialização.

#### Por que usar `readonly`?

No TypeScript, o `readonly` em um campo estático Singleton é uma camada extra de segurança. Ele garante que nem mesmo outros métodos dentro da própria classe possam acidentalmente reatribuir a instância (ex: `ConfigurationManager.INSTANCE = null`).

#### O Construtor Privado

O `private constructor()` é a "tranca" da porta. Se você tentar digitar `const c = new ConfigurationManager()`, o compilador do TypeScript emitirá um erro imediatamente, forçando o desenvolvedor a usar o `getInstance()`.

---

### Vantagens e Desvantagens da Abordagem Eager

| Vantagem | Desvantagem |
| --- | --- |
| **Thread Safety Nativo:** Não há risco de duas threads criarem instâncias diferentes, pois a criação ocorre no carregamento. | **Desperdício de Recursos:** Se a classe for pesada e nunca for usada durante a execução, você ocupou memória à toa. |
| **Performance de Acesso:** O `getInstance()` é extremamente rápido, pois apenas retorna uma referência pronta. | **Impacto no Startup:** Se você tiver muitos Singletons Eager, o tempo de inicialização da sua aplicação (o "boot") será mais lento. |
| **Simplicidade:** O código é mais limpo, sem condicionais de verificação de nulidade. | **Dificuldade de Configuração:** Se a criação depender de dados que só estarão disponíveis mais tarde, a inicialização Eager falhará. |

---

### Quando usar Eager em vez de Lazy?

Use **Eager** quando você tem certeza absoluta de que o Singleton será utilizado em quase todos os fluxos da aplicação (como um Logger ou Configurações Base) e quando você quer evitar a complexidade de gerenciar concorrência em sistemas multithread.

**Conseguiu perceber a diferença de "timing" na criação do objeto? Gostaria que eu explicasse agora como transformar esse exemplo em um Lazy Singleton para compararmos as estruturas?**