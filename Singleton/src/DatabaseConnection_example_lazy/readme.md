A **Lazy Initialization** (Inicialização Preguiçosa) é a abordagem mais comum quando queremos otimizar o uso de recursos. Em vez de criar o objeto assim que o sistema inicia, nós adiamos a criação até o **exato momento em que alguém solicita a instância** pela primeira vez.

Como arquiteto, eu recomendaria esta abordagem para serviços "pesados", como um gerenciador de conexões de banco de dados ou um cache em memória.

---

### Exemplo: `DatabaseConnection` (Lazy Singleton)

```typescript
/**
 * O Singleton Lazy economiza recursos, criando a instância
 * apenas quando o método getInstance() é invocado.
 */
export class DatabaseConnection {
    // 1. Iniciamos a variável estática como 'null'.
    // Ela não é criada imediatamente, ocupando quase zero de memória inicial.
    private static instance: DatabaseConnection | null = null;

    private connectionString: string;
    private isConnected: boolean = false;

    // 2. Construtor PRIVADO continua sendo a regra de ouro.
    private constructor() {
        this.connectionString = "postgresql://admin:password@localhost:5432/main_db";
        console.log("Iniciando conexão pesada com o Banco de Dados...");
        // Imagine aqui uma lógica de abertura de socket que leva 2 segundos
        this.isConnected = true;
    }

    // 3. O método de acesso contém a LÓGICA DE CRIAÇÃO.
    public static getInstance(): DatabaseConnection {
        // Se a instância ainda não existir, nós a criamos agora.
        if (!DatabaseConnection.instance) {
            DatabaseConnection.instance = new DatabaseConnection();
        } else {
            console.log("Reutilizando conexão existente.");
        }

        return DatabaseConnection.instance;
    }

    public query(sql: string): void {
        console.log(`Executando: ${sql} na conexão [${this.connectionString}]`);
    }
}

// --- Código Cliente ---

console.log("Aplicação iniciada...");

// A conexão NÃO existe aqui ainda.
// ... passamos muito tempo fazendo outras coisas ...

console.log("Precisamos salvar um log no banco...");
const db1 = DatabaseConnection.getInstance(); // A instância é criada AQUI.
db1.query("SELECT * FROM users");

const db2 = DatabaseConnection.getInstance(); // Apenas retorna a instância pronta.
db2.query("DELETE FROM sessions");

console.log("As instâncias são iguais?", db1 === db2); // true

```

---

### Detalhes Críticos da Implementação Lazy

#### 1. A Verificação de Nulidade

O coração do Lazy Singleton é o bloco `if (!instance)`. Ele garante que o custo computacional do construtor seja pago apenas uma vez. Em linguagens como Java ou C#, esse é o ponto onde arquitetos precisam ter cuidado com a "Segurança de Threads" (Thread Safety), usando travas (*locks*) para evitar que duas threads entrem no `if` simultaneamente. No Node.js (TypeScript), como o loop de eventos é single-threaded para execução de código síncrono, essa implementação simples é segura.

#### 2. Ausência do `readonly`

Diferente da versão Eager, não podemos usar `readonly` na variável `instance`. Isso ocorre porque precisamos que o método `getInstance()` tenha permissão para alterar o valor de `null` para o novo objeto quando for necessário.

#### 3. Tipagem Union

No TypeScript, definimos o tipo como `DatabaseConnection | null`. Isso força o desenvolvedor a lidar com a possibilidade de o estado inicial ser nulo, embora o método `getInstance` garanta que o retorno nunca será nulo para o cliente final.

---

### Comparativo Estratégico

| Característica | Lazy (Preguiçosa) | Eager (Antecipada) |
| --- | --- | --- |
| **Quando cria?** | No primeiro uso (`on-demand`). | No carregamento do módulo/classe. |
| **Uso de Memória** | Eficiente (só usa se precisar). | Pode ser desperdiçada. |
| **Velocidade do Boot** | Rápida. | Mais lenta (acumula criações). |
| **Velocidade do Acesso** | Primeira chamada é lenta. | Todas as chamadas são rápidas. |

---

### Qual escolher?

Se o seu objeto Singleton for "leve" e você tiver certeza de que ele será usado sempre, vá de **Eager**. Se o objeto for "pesado" (como conexões de rede ou leitura de arquivos grandes) e houver cenários onde ele pode não ser necessário, vá de **Lazy**.