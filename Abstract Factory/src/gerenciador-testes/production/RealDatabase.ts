import { DatabaseConnection } from "../interfaces/database-connection.interface";

// concrete class
export class RealDatabase implements DatabaseConnection {
    connect(): string {
        return 'Conncected to real database.';
    }
}