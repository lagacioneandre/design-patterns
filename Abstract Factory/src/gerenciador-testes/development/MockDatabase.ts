import { DatabaseConnection } from "../interfaces/database-connection.interface";

// concrete product
export class MockDatabase implements DatabaseConnection {
    connect(): string {
        return 'Connected to mock database.';
    }
}