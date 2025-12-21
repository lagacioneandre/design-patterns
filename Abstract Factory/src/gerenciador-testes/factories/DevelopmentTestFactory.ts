import { MockAuthService } from "../development/MockAuthService";
import { MockDatabase } from "../development/MockDatabase";
import { AuthService } from "../interfaces/auth-service.interface";
import { DatabaseConnection } from "../interfaces/database-connection.interface";
import { TestConfiguration } from "./interface/test-configuration.interface";

// concrete factory
export class DevelopmentTestFactory implements TestConfiguration {
    authenticate(): AuthService {
        return new MockAuthService();
    }

    databaseConnection(): DatabaseConnection {
        return new MockDatabase();
    }
}