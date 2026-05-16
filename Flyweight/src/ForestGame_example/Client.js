"use strict";
/**
 * O Cliente (A Floresta)
 * Veja como podemos crias milhares de arvores usando quase nenhuma memoria adicional para os tipos de dados repetidos.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var Tree_1 = require("./Tree");
var TreeFactory_1 = require("./TreeFactory");
var Forest = /** @class */ (function () {
    function Forest() {
        this.trees = [];
    }
    Forest.prototype.plantTree = function (x, y, name, color, texture) {
        // A fabrica decide se cria um novo tipo ou reutiliza
        var type = TreeFactory_1.TreeFactory.getTreeType(name, color, texture);
        var tree = new Tree_1.Tree(x, y, type);
        this.trees.push(tree);
    };
    Forest.prototype.renderForest = function () {
        this.trees.forEach(function (tree) { return tree.draw(); });
    };
    return Forest;
}());
// Execucao
var myForest = new Forest();
// Plantando 3 arvores, mas apenas e tipos reais sao criados na memoria
myForest.plantTree(10, 20, 'Carvalho', 'Verde', 'oak_texture.png');
myForest.plantTree(50, 80, 'Pinheiro', 'Verde Escuro', 'pine_texture.png');
myForest.plantTree(100, 200, 'Carvalho', 'Verde', 'oak_texture.png'); // Reutiliza o primeiro!
console.log('--- Total de arvores na lista: 3 ---');
myForest.renderForest();
