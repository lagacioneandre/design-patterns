import { AccessEntity } from "./access-entity.interface";

export class Group implements AccessEntity {
    private entities: AccessEntity[] = [];
    private permissions: Set<string> = new Set<string>();

    setPermission(permission: string) {
        this.permissions.add(permission);
    }

    add(entity: AccessEntity) {
        this.entities.push(entity);
    }

    hasPermission(permission: string): boolean {
        return this.permissions.has(permission) || this.entities.some(item => item.hasPermission(permission));
    }

    countTotalUsers() {
        return this.entities.reduce((acc: number, item: AccessEntity) => acc + item.countTotalUsers(), 0);
    }
}