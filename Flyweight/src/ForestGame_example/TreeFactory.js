"use strict";
/**
 * A Flyweight Factory (O gerenciador)
 * Esta fabrica garante que nao criaremos dois tipos de arvores identicos
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.TreeFactory = void 0;
var TreeType_1 = require("./TreeType");
var TreeFactory = /** @class */ (function () {
    function TreeFactory() {
    }
    TreeFactory.getTreeType = function (name, color, texture) {
        var key = "".concat(name, "_").concat(color, "_").concat(texture);
        if (!this.treeTypes[key]) {
            console.log("[Factory]: Criando um novo tipo de arvore: ".concat(name));
            this.treeTypes[key] = new TreeType_1.TreeType(name, color, texture);
        }
        else {
            console.log("[Factory]: Reutilizando tipo de existente: ".concat(name));
        }
        return this.treeTypes[key];
    };
    TreeFactory.treeTypes = {};
    return TreeFactory;
}());
exports.TreeFactory = TreeFactory;
