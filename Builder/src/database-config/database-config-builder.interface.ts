import { DatabaseConfig } from "./DatabaseConfig";

export interface IDatabaseConfig {
    setDatabaseType(database: string): this;
    setHost(host: string): this;
    setPort(port: number): this;
    setUsername(username: string): this;
    setPassword(password: string): this;
    setMaxConnections(maxConnection?: number): this;
    setEnablePooling(enable?: boolean): this;
    setTimeoutSeconds(timeout?: number): this;
    build(): DatabaseConfig;
}