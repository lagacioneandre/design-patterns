"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(name, permissions) {
        this.name = name;
        this.permissions = permissions;
    }
    hasPermission(permission) {
        return this.permissions.has(permission);
    }
    countTotalUsers() {
        return 1;
    }
}
exports.User = User;
