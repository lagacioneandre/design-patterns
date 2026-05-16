"use strict";
/**
 * O Flyeight: Dados que sao compartilhados
 * Esta classe contem os dados pesados que se repetem (nome, cor, textura)
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.TreeType = void 0;
var TreeType = /** @class */ (function () {
    function TreeType(name, color, texture) {
        this.name = name;
        this.color = color;
        this.texture = texture;
    }
    // o estado extrinsicao (x, y) 'e passado por parametro
    TreeType.prototype.render = function (x, y) {
        console.log("Renderizando ".concat(this.name, " (").concat(this.color, " em [").concat(x, ", ").concat(y, "] com textura ").concat(this.texture, ")"));
    };
    return TreeType;
}());
exports.TreeType = TreeType;
