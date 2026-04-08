"use strict";
// Subsistema 3: Servico de logistica
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogisticService = void 0;
var LogisticService = /** @class */ (function () {
    function LogisticService() {
    }
    LogisticService.prototype.calculateShipping = function (zipCode) {
        console.log("[Logisitica] Calculando frete para ".concat(zipCode, "..."));
        return 25;
    };
    LogisticService.prototype.scheduleDelivery = function (prodcutId, zipCode) {
        console.log("[Logisitica] Entrega agendada para o produto ".concat(prodcutId, " no CEP ").concat(zipCode));
    };
    return LogisticService;
}());
exports.LogisticService = LogisticService;
