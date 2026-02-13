"use strict";
// 2. Produto concreto
Object.defineProperty(exports, "__esModule", { value: true });
exports.Truck = void 0;
var Truck = /** @class */ (function () {
    function Truck() {
    }
    Truck.prototype.deliver = function () {
        console.log('Entrega via estrada em caixa.');
    };
    return Truck;
}());
exports.Truck = Truck;
