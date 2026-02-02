"use strict";
/**
 * RECEPTOR 1: Sistema de arquivos (Simulacao)
 * Responsavel por lidar com arquivos.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileSystem = void 0;
var FileSystem = /** @class */ (function () {
    function FileSystem() {
    }
    FileSystem.prototype.copyFiles = function (source, destination) {
        console.log("[Sistema de arquivos] Copiando arquivos de ".concat(source, " para ").concat(destination, "..."));
        // Logica real de copia de arquivos
        return true;
    };
    return FileSystem;
}());
exports.FileSystem = FileSystem;
