"use strict";
// Adaptee
Object.defineProperty(exports, "__esModule", { value: true });
exports.LegacyDirectorySystem = void 0;
// O sistema antigo retorna algo como:
// <user><attr key="uid">123</attr><attr key="name">Silva, Joao</attr><attr key="mail">joao@empresa.com</attr></user>
var LegacyDirectorySystem = /** @class */ (function () {
    function LegacyDirectorySystem() {
    }
    LegacyDirectorySystem.prototype.getEntryById = function (id) {
        // Simulacao de retorno XML de um banco antigo
        return "<user><attr key=\"uid\">".concat(id, "</attr><attr key=\"name\">Silva, Joao</attr><attr key=\"mail\">joao@oldcorp.com</attr><attr key=\"access\">admin,editor</attr></user>");
    };
    return LegacyDirectorySystem;
}());
exports.LegacyDirectorySystem = LegacyDirectorySystem;
