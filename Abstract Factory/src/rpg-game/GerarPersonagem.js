"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GerarPersonagem = void 0;
// client
var GerarPersonagem = /** @class */ (function () {
    function GerarPersonagem(factory) {
        this.classe = factory.getClasse();
        this.habilidade = factory.getHabilidade();
        this.personagem = factory.getPersonagem();
        this.arma = factory.getArma();
    }
    GerarPersonagem.prototype.generate = function () {
        console.log("\n             Personagem definido: ".concat(this.personagem.setName(), ", da classe ").concat(this.classe.setClass(), ",\n             com a arma ").concat(this.arma.setWeapon(), " e a habilidade especial ").concat(this.habilidade.setHabilidade(), "\n            "));
    };
    return GerarPersonagem;
}());
exports.GerarPersonagem = GerarPersonagem;
