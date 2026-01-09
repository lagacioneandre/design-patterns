import { DatabaseConfigType } from "./database-config.type";

export class DatabaseConfig {
    private readonly database: string;
    private readonly host: string;
    private readonly port: number;
    private readonly username: string;
    private readonly password: string;
    private readonly maxConnection: number;
    private readonly enablePooling: boolean;
    private readonly timeoutSeconds: number;
    
    constructor (data: {
        database: string;
        host: string;
        port: number;
        username: string;
        password: string;
        maxConnection: number;
        enablePooling: boolean;
        timeoutSeconds: number;
    }) {
        this.database = data.database;
        this.host = data.host;
        this.port = data.port;
        this.username = data.username;
        this.password = data.password;
        this.maxConnection = data.maxConnection;
        this.enablePooling = data.enablePooling;
        this.timeoutSeconds = data.timeoutSeconds;
    }

    getDatabaseConfiguration() {
        console.log('\n\n === DATABASE CONFIGURATION ===');
        console.log(`Database type : ${this.database}`);
        console.log(`Host : ${this.host}`);
        console.log(`Port number : ${this.port}`);
        console.log(`Username : ${this.username}`);
        console.log(`Password : ${this.password}`);
        console.log(`Max connections : ${this.maxConnection}`);
        console.log(`Is pooling enabled : ${this.enablePooling ? 'Yes' : 'No'}`);
        console.log(`Timeout seconds : ${this.timeoutSeconds}`);
    }
}