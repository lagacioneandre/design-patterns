import { IDatabaseConfig } from "./database-config-builder.interface";
import { DatabaseConfig } from "./DatabaseConfig";

export class DatabaseConfigBuilder implements IDatabaseConfig {
    private database!: string;
    private host!: string;
    private port!: number;
    private username!: string;
    private password!: string;
    private maxConnection?: number | undefined;
    private enablePooling?: boolean | undefined;
    private timeoutSeconds?: number | undefined;
    private PORTS_STARTS_AT = 1024;
    private MAX_CONNECTIONS_STARTS_AT = 1;
    private MAX_CONNECTIONS_ENDS_AT = 100;
    private VALID_DB_TYPES = ["PostgreSQL", "MySQL", "SQLServer"];

    constructor () {}

    setDatabaseType(database: string): this {
        this.database = database;
        return this;
    }

    setHost(host: string): this {
        this.host = host;
        return this;
    }

    setMaxConnections(maxConnection?: number): this {
        this.maxConnection = maxConnection;
        return this;
    }

    setPassword(password: string): this {
        this.password = password;
        return this;
    }

    setPort(port: number): this {
        this.port = port;
        return this;
    }

    setUsername(username: string): this {
        this.username = username;
        return this;
    }

    setEnablePooling(enable?: boolean): this {
        this.enablePooling = enable;
        return this;
    }

   setTimeoutSeconds(timeout?: number): this {
       this.timeoutSeconds = timeout;
       return this;
   } 

    build(): DatabaseConfig {
        this.validateRequiredParams();
        this.validateDBTypes();
        this.validatePortNumber();
        this.validateMaxConnections();
        this.validateTimeoutSeconds();
        const finalMaxConnection = this.maxConnection || 10;
        const finalEnablePooling = this.enablePooling ?? true; 
        const finalTimeoutSeconds = this.timeoutSeconds || 30;
        return new DatabaseConfig({
            database: this.database,
            host: this.host,
            port: this.port,
            username: this.username,
            password: this.password,
            maxConnection: finalMaxConnection,
            enablePooling: finalEnablePooling,
            timeoutSeconds: finalTimeoutSeconds,
        });
    }

    private validateRequiredParams() {
         if (!this.database || !this.host || !this.port || !this.username || !this.password) {
            throw new Error("BUILDER ERROR: All mandatory fields (database, host, port, username, password) must be set.");
        }
    }

    private validateDBTypes() {
        if (!this.VALID_DB_TYPES.filter(item => item === this.database).length) {
             throw new Error(`BUILDER ERROR: Database type must be one of: ${this.VALID_DB_TYPES.join(', ')}.`);
        }
    }

    private validatePortNumber() {
        const isPortValid = this.port > this.PORTS_STARTS_AT;
        if (!isPortValid) {
            throw new Error(`The port number needs to be more than ${this.PORTS_STARTS_AT}!`);
        }
    }

    private validateMaxConnections() {
        if (this.maxConnection === undefined) {
            return;
        }

        const isMaxConnectionValid = 
            this.maxConnection >= this.MAX_CONNECTIONS_STARTS_AT && this.maxConnection <= this.MAX_CONNECTIONS_ENDS_AT;
        
        if (!isMaxConnectionValid) {
            throw new Error(
                `Max connections needs to be between ${this.MAX_CONNECTIONS_STARTS_AT} and ${this.MAX_CONNECTIONS_ENDS_AT}!`
            );
        }
    }

    private validateTimeoutSeconds() {
        if (this.timeoutSeconds !== undefined && this.timeoutSeconds <= 0) {
            throw new Error("BUILDER ERROR: Timeout seconds must be a positive number.");
        }
    }
}