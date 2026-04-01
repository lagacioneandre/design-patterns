import { AccessEntity } from "./access-entity.interface";

export class User implements AccessEntity {
    constructor(
        private name: string,
        private permissions: Set<string>
    ) {}

    hasPermission(permission: string): boolean {
        return this.permissions.has(permission);
    }

    countTotalUsers() {
        return 1;
    }
}