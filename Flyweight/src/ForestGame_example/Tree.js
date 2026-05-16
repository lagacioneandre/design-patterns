"use strict";
/**
 * O Contexto (Estao extrinseco)
 * Esta 'e a classe "leve" que o cliente usara aos milhares. ela apenas aponta para o Flyweight
 * O Contexto: Contem apenas o que 'e UNICO para cada arvore
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tree = void 0;
var Tree = /** @class */ (function () {
    function Tree(x, y, type) {
        this.x = x;
        this.y = y;
        this.type = type;
    }
    Tree.prototype.draw = function () {
        this.type.render(this.x, this.y);
    };
    return Tree;
}());
exports.Tree = Tree;
