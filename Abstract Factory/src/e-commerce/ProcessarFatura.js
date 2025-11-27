"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessarFatura = void 0;
// client
var ProcessarFatura = /** @class */ (function () {
    function ProcessarFatura(factory, valor) {
        this.factory = factory;
        this.valor = valor;
    }
    ProcessarFatura.prototype.processar = function () {
        var fatura = this.factory.criarFatura();
        console.log(fatura.gerar());
        var pagamento = this.factory.criarMetodoPagament();
        console.log(pagamento.processar(this.valor));
    };
    return ProcessarFatura;
}());
exports.ProcessarFatura = ProcessarFatura;
