// abstract product
export interface DatabaseConnection {
    connect(): string;
}