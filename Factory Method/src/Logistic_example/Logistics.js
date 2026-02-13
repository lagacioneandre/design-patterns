"use strict";
// 3. O criador (a logica de negocio fica aqui)
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logistics = void 0;
var Logistics = /** @class */ (function () {
    function Logistics() {
    }
    // A comunicaco principal
    Logistics.prototype.planDelivery = function () {
        // A classe pai chama o metodo que ela mesmo nao sabe como funciona
        var transport = this.createTransport();
        console.log('Logistics: O plano foi feito. Iniciando transporte...');
        transport.deliver();
    };
    return Logistics;
}());
exports.Logistics = Logistics;
