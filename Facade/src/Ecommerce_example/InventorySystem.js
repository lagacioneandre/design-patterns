"use strict";
// Subsistema 1: Gerenciamento de estoque
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventorySystem = void 0;
var InventorySystem = /** @class */ (function () {
    function InventorySystem() {
    }
    InventorySystem.prototype.checkStock = function (productId) {
        console.log("[Estoque] Verificando a disponibilidade do produto ".concat(productId));
        return true; // Simulacao: sempre tem estoque
    };
    InventorySystem.prototype.reserveProduct = function (productId) {
        console.log("[Estoque] Produto ".concat(productId, " reservado com sucesso."));
    };
    return InventorySystem;
}());
exports.InventorySystem = InventorySystem;
