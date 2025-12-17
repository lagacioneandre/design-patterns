"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuildFOrniture = void 0;
//client
var BuildFOrniture = /** @class */ (function () {
    function BuildFOrniture(factory) {
        this._factory = factory;
        this._chair = this._factory.createChair();
        this._sofa = this._factory.createSofa();
        this._table = this._factory.createTable();
    }
    BuildFOrniture.prototype.chairDetails = function () {
        return "\n            Cor: ".concat(this._chair.color(), ".\n            Material: ").concat(this._chair.material(), ".\n        ");
    };
    BuildFOrniture.prototype.sofaDetails = function () {
        return "\n            Cor: ".concat(this._sofa.color(), ".\n            Tamanho: ").concat(this._sofa.size(), ".\n        ");
    };
    BuildFOrniture.prototype.tableDetails = function () {
        return "\n            Largura: ".concat(this._table.width(), ".\n            Comprimento: ").concat(this._table.length(), ".\n        ");
    };
    return BuildFOrniture;
}());
exports.BuildFOrniture = BuildFOrniture;
