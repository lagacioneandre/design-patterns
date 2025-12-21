import { AuthService } from "../../interfaces/auth-service.interface";
import { DatabaseConnection } from "../../interfaces/database-connection.interface";

// abstract factory
export interface TestConfiguration {
    authenticate(): AuthService;
    databaseConnection(): DatabaseConnection;
}