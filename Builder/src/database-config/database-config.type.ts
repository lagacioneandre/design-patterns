import { CreateDatabaseType } from "./create-database.type";

export type DatabaseConfigType = CreateDatabaseType & {
    maxConnection?: number;
    enablePooling?: boolean;
    timeoutSeconds?: number;
}