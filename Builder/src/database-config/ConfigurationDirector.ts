import { CreateDatabaseType } from "./create-database.type";
import { DatabaseConfigType } from "./database-config.type";
import { DatabaseConfigBuilder } from "./DatabaseConfigBuilder";

export class ConfigurationDirector {
    constructor () {}

    createDevConfig(
        builder: DatabaseConfigBuilder, {
            database,
            host,
            port,
            username,
            password,       
        }: CreateDatabaseType
    ) {
        return builder
            .setDatabaseType(database)
            .setHost(host)
            .setPort(port)
            .setUsername(username)
            .setPassword(password)
            .build();
    }

    createProdConfig(
        builder: DatabaseConfigBuilder, {
            database,
            host,
            port,
            username,
            password,       
        }: CreateDatabaseType
    ) {
        return builder
            .setDatabaseType(database)
            .setHost(host)
            .setPort(port)
            .setUsername(username)
            .setPassword(password)
            .setEnablePooling(true)
            .setMaxConnections(50)
            .setTimeoutSeconds(15)
            .build();
    }

    createCustomConfig(
        builder: DatabaseConfigBuilder, {
            database,
            host,
            port,
            username,
            password,
            maxConnection,
            enablePooling,
            timeoutSeconds,
        }: DatabaseConfigType
    ) {
        return builder
            .setDatabaseType(database)
            .setHost(host)
            .setPort(port)
            .setUsername(username)
            .setPassword(password)
            .setEnablePooling(enablePooling)
            .setMaxConnections(maxConnection)
            .setTimeoutSeconds(timeoutSeconds)
            .build();
    }
}