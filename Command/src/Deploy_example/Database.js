"use strict";
/**
 * RECEPTOR 2: Banco de dados (Simulacao)
 * Responsavel por aplicar migracoes no banco.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Database = void 0;
var Database = /** @class */ (function () {
    function Database() {
    }
    Database.prototype.runMigrations = function (version) {
        console.log("[Banco de dados] Executando migracoes para a versao ".concat(version));
        // Logica real de migracao SQL
    };
    return Database;
}());
exports.Database = Database;
