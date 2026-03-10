"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Enemy = void 0;
var Enemy = /** @class */ (function () {
    function Enemy(name, health, weapon, texture) {
        this.name = name;
        this.health = health;
        this.weapon = weapon;
        this.texture = texture;
    }
    // Implementacao da clonagem (copia rasa nesse caso)
    Enemy.prototype.clone = function () {
        var clone = Object.assign(Object.create(Object.getPrototypeOf(this)), this);
        return clone;
    };
    Enemy.prototype.displayStatus = function () {
        console.log("Inimigo: ".concat(this.name, " | Vida: ").concat(this.health, " | Arma: ").concat(this.weapon));
    };
    return Enemy;
}());
exports.Enemy = Enemy;
