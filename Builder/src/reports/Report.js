"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Relatorio = void 0;
var Relatorio = /** @class */ (function () {
    function Relatorio() {
        this.partes = [];
    }
    Relatorio.criarVazio = function () {
        return new Relatorio();
    };
    Relatorio.prototype.adicionarParte = function (parte) {
        this.partes.push(parte);
    };
    Relatorio.prototype.imprimir = function () {
        console.log("\n========================================");
        console.log("|         RELAT\u00D3RIO FINALIZADO         |");
        console.log("========================================");
        this.partes.forEach(function (p) { return console.log("| ".concat(p)); });
        console.log("========================================\n");
    };
    return Relatorio;
}());
exports.Relatorio = Relatorio;
