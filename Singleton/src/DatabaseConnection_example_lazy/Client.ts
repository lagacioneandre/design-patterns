import { DatabaseConnection } from "./DatabaseConnection";

class Client {
    execute() {
        console.log('Aplicacao iniciada...');

        // A conexao NAO existe aqui ainda.
        // ... passamos muito tempo fazendo outra coisa

        console.log('Precisamos salvar um log no banco...');
        const db1 = DatabaseConnection.getInstance(); // A instancia 'e criada AQUI.
        db1.query('SELECT * FROM users');

        const db2 = DatabaseConnection.getInstance(); // Apenas retorna a instancia pronta.
        db2.query('DELETE FROM sessions');

        console.log('As instancias sao iguais?', db1 === db2); // true
    }
}

(() => {
    new Client().execute();
})();