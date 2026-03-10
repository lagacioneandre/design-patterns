"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnemyRegistry = void 0;
var EnemyRegistry = /** @class */ (function () {
    function EnemyRegistry() {
        this.prototypes = {};
    }
    EnemyRegistry.prototype.addItem = function (id, prototype) {
        this.prototypes[id] = prototype;
    };
    EnemyRegistry.prototype.getById = function (id) {
        var prototype = this.prototypes[id];
        if (!prototype)
            throw new Error('Prototipo nao encontrado.');
        // Retornamos um CLONE, numca o original do registro
        return prototype.clone();
    };
    return EnemyRegistry;
}());
exports.EnemyRegistry = EnemyRegistry;
