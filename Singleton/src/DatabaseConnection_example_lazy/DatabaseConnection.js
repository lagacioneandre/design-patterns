"use strict";
/**
 * O Singleton Lazy economiza recursos, criando uma instancia
 * apenas quando o metodo getInstance() 'e invocado.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseConnection = void 0;
var DatabaseConnection = /** @class */ (function () {
    // 2. Construtor PRIVADO continua sendo a regra de ouro.
    function DatabaseConnection() {
        this.isConnected = false;
        this.connectionString = 'postgresql://admin:password@localhost:5432/main_db';
        console.log('Iniciando conexao pesada com o Banco de Dados...');
        // Imagine aqui uma logica de abertura de socket que leva 2 segundos
        this.isConnected = true;
    }
    // 3. O metodo de acesso contem a LOGICA DE CRIACAO
    DatabaseConnection.getInstance = function () {
        // Se a instancia ainda nao existir, nos a criamos agora
        if (!DatabaseConnection.instance) {
            DatabaseConnection.instance = new DatabaseConnection();
        }
        else {
            console.log('Reutilizando conexao existente.');
        }
        return DatabaseConnection.instance;
    };
    DatabaseConnection.prototype.query = function (sql) {
        console.log("Executando: ".concat(sql, " na conexao [").concat(this.connectionString, "]"));
    };
    // 1. Iniciamos a variavel estatica como 'null'
    // Ela nao 'e criada imediatamente, ocupando quase zero de memoria inicial.
    DatabaseConnection.instance = null;
    return DatabaseConnection;
}());
exports.DatabaseConnection = DatabaseConnection;
