"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Group = void 0;
class Group {
    constructor() {
        this.entities = [];
        this.permissions = new Set();
    }
    setPermission(permission) {
        this.permissions.add(permission);
    }
    add(entity) {
        this.entities.push(entity);
    }
    hasPermission(permission) {
        return this.permissions.has(permission) || this.entities.some(item => item.hasPermission(permission));
    }
    countTotalUsers() {
        return this.entities.length;
    }
}
exports.Group = Group;
