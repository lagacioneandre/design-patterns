"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Starship = void 0;
var Starship = /** @class */ (function () {
    function Starship(identificador, combustivel, recursos) {
        this.identificador = identificador;
        this.combustivel = combustivel;
        this.recursos = recursos;
    }
    Starship.prototype.clone = function () {
        var clone = Object.assign(Object.create(Object.getPrototypeOf(this)), this);
        return clone;
    };
    Starship.prototype.display = function () {
        console.log("\n            Identificador: ".concat(this.identificador, ",\n            Combustivel: ").concat(this.combustivel, ",\n            Manual: ").concat(this.recursos.manualConteudo, ",\n            Codigo de seguranca: ").concat(this.recursos.codigoSegranca, "\n        "));
    };
    return Starship;
}());
exports.Starship = Starship;
