import { AuthService } from "../interfaces/auth-service.interface";
import { DatabaseConnection } from "../interfaces/database-connection.interface";
import { ProductionAuthService } from "../production/ProductionAuthService";
import { RealDatabase } from "../production/RealDatabase";
import { TestConfiguration } from "./interface/test-configuration.interface";

// concrete factory
export class ProductionTestFactory implements TestConfiguration {
    authenticate(): AuthService {
        return new ProductionAuthService();
    }

    databaseConnection(): DatabaseConnection {
        return new RealDatabase();
    }
}