export interface AccessEntity {
    hasPermission(permission: string): boolean;
    countTotalUsers(): number;
}