"use strict";
/**
 * RECEPTOR 3: Notificacao (Simulacao)
 * Responsavel por enviar mensagens.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Notifier = void 0;
var Notifier = /** @class */ (function () {
    function Notifier() {
    }
    Notifier.prototype.sendEmail = function (recipient, message) {
        console.log("[Notificador] Enviando email para ".concat(recipient, ": \"").concat(message, "\""));
        // Logica real para envio de email via API
    };
    return Notifier;
}());
exports.Notifier = Notifier;
