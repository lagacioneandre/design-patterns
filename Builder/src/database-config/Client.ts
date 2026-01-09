import { ConfigurationDirector } from "./ConfigurationDirector";
import { CreateDatabaseType } from "./create-database.type";
import { DatabaseConfigType } from "./database-config.type";
import { DatabaseConfigBuilder } from "./DatabaseConfigBuilder";

export class Client {
    createDevConfig() {
        const builder = new DatabaseConfigBuilder();
        const data: CreateDatabaseType = {
            database: 'MySQL',
            host: 'localhost',
            port: 3000,
            username: 'andre',
            password: '123456',
        }
        const director = new ConfigurationDirector();
        const config = director.createDevConfig(builder, data);
        config.getDatabaseConfiguration();
    }

    createProdConfig() {
        const builder = new DatabaseConfigBuilder();
        const data: CreateDatabaseType = {
            database: 'PostgreSQL',
            host: 'host:prod-host',
            port: 8080,
            username: 'admin',
            password: '102030',
        }
        const director = new ConfigurationDirector();
        const config = director.createProdConfig(builder, data);
        config.getDatabaseConfiguration();
    }

    createCustomConfig() {
        const builder = new DatabaseConfigBuilder();
        const data: DatabaseConfigType = {
            database: 'SQLServer',
            host: 'host:homol-host',
            port: 9834,
            username: 'user',
            password: '1234500',
            maxConnection: 23,
            enablePooling: true,
            timeoutSeconds: 60,
        }
        const director = new ConfigurationDirector();
        const config = director.createCustomConfig(builder, data);
        config.getDatabaseConfiguration();
    }

    createConfigTestPortNumber() {
        try {
            const builder = new DatabaseConfigBuilder();
            const data: CreateDatabaseType = {
                database: 'SQLServer',
                host: 'localhost',
                port: 1000,
                username: 'andre',
                password: '123456',
            }
            const director = new ConfigurationDirector();
            const config = director.createDevConfig(builder, data);
            config.getDatabaseConfiguration();
        } catch (error) {
            console.error((error as Error).message);
        }
    }

    createConfigTestMaxConnection() {
        try {
            const builder = new DatabaseConfigBuilder();
            const data: DatabaseConfigType = {
                database: 'PostgreSQL',
                host: 'host:homol-host',
                port: 9834,
                username: 'user',
                password: '1234500',
                maxConnection: -10,
                enablePooling: true,
                timeoutSeconds: 60,
            }
            const director = new ConfigurationDirector();
            const config = director.createCustomConfig(builder, data);
            config.getDatabaseConfiguration();
        } catch (error) {
            console.error((error as Error).message);
        }
    }

    createConfigTestOtherMaxConnection() {
        try {
            const builder = new DatabaseConfigBuilder();
            const data: DatabaseConfigType = {
                database: 'MySQL',
                host: 'host:homol-host',
                port: 9834,
                username: 'user',
                password: '1234500',
                maxConnection: 101,
                enablePooling: true,
                timeoutSeconds: 60,
            }
            const director = new ConfigurationDirector();
            const config = director.createCustomConfig(builder, data);
            config.getDatabaseConfiguration();
        } catch (error) {
            console.error((error as Error).message);
        }
    }

    createConfigTestMissingField() {
        try {
            const builder = new DatabaseConfigBuilder();
            const data: CreateDatabaseType = {
                database: 'PostgreSQL',
                host: 'localhost',
                port: 3000,
                username: 'teste',
                password: '',
            }
            builder.setDatabaseType(data.database)
                   .setHost(data.host)
                   .setPort(data.port)
                   .setUsername(data.username)
                   .build();
        } catch (error) {
            console.error((error as Error).message);
        }
    }

    createInvalidDB() {
        try {
            const builder = new DatabaseConfigBuilder();
            const data: DatabaseConfigType = {
                database: 'MongoBD',
                host: 'host:homol-host',
                port: 9834,
                username: 'user',
                password: '1234500',
                maxConnection: 101,
                enablePooling: true,
                timeoutSeconds: 60,
            }
            const director = new ConfigurationDirector();
            const config = director.createCustomConfig(builder, data);
            config.getDatabaseConfiguration();
        } catch (error) {
            console.error((error as Error).message);
        }
    }
}

(function() {
   const client = new Client();
   client.createDevConfig();
   client.createProdConfig();
   client.createCustomConfig();
   client.createConfigTestPortNumber();
   client.createConfigTestMaxConnection();
   client.createConfigTestOtherMaxConnection();
   client.createConfigTestMissingField();
   client.createInvalidDB();
})()