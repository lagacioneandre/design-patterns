import { Enemy } from "./Enemy";

export class EnemyRegistry {
    private prototypes: { [ley: string]: Enemy } = {};

    addItem(id: string, prototype: Enemy) {
        this.prototypes[id] = prototype;
    }

    getById(id: string): Enemy {
        const prototype = this.prototypes[id];
        if (!prototype) throw new Error('Prototipo nao encontrado.');
        // Retornamos um CLONE, numca o original do registro
        return prototype.clone();
    }
}