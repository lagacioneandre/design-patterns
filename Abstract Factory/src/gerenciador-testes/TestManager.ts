import { TestConfiguration } from "./factories/interface/test-configuration.interface";
import { AuthService } from "./interfaces/auth-service.interface";
import { DatabaseConnection } from "./interfaces/database-connection.interface";

// client
export class TestManager {
    private authService: AuthService;
    private databaseConnection: DatabaseConnection;

    constructor (factory: TestConfiguration) {
        this.authService = factory.authenticate();
        this.databaseConnection = factory.databaseConnection();
    }

    run() {
        console.log(this.authService.authenticate());
        console.log(this.databaseConnection.connect());
    }
}