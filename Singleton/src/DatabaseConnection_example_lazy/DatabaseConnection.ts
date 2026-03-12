/**
 * O Singleton Lazy economiza recursos, criando uma instancia
 * apenas quando o metodo getInstance() 'e invocado.
 */

export class DatabaseConnection {
    // 1. Iniciamos a variavel estatica como 'null'
    // Ela nao 'e criada imediatamente, ocupando quase zero de memoria inicial.
    private static instance: DatabaseConnection | null = null;
    private connectionString: string;
    private isConnected = false;

    // 2. Construtor PRIVADO continua sendo a regra de ouro.
    private constructor() {
        this.connectionString = 'postgresql://admin:password@localhost:5432/main_db';
        console.log('Iniciando conexao pesada com o Banco de Dados...');
        // Imagine aqui uma logica de abertura de socket que leva 2 segundos
        this.isConnected = true;
    }

    // 3. O metodo de acesso contem a LOGICA DE CRIACAO
    static getInstance(): DatabaseConnection {
        // Se a instancia ainda nao existir, nos a criamos agora
        if (!DatabaseConnection.instance) {
            DatabaseConnection.instance = new DatabaseConnection();
        } else {
            console.log('Reutilizando conexao existente.');
        }

        return DatabaseConnection.instance;
    }

    query(sql: string) {
        console.log(`Executando: ${sql} na conexao [${this.connectionString}]`);
    }
}