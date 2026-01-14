"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NetworkCOnfigurator = void 0;
var NetworkCOnfigurator = /** @class */ (function () {
    function NetworkCOnfigurator() {
    }
    NetworkCOnfigurator.prototype.criarConfigPadrao = function (builder) {
        return builder
            .configurarTimeout(4000)
            .definirTentativas(1)
            .build();
    };
    NetworkCOnfigurator.prototype.criarConfigRobusta = function (builder) {
        return builder
            .adicionarAutenticacao('TOKEN_SECURE_HASH')
            .ativarCache()
            .definirTentativas(5)
            .configurarTimeout(5000)
            .build();
    };
    NetworkCOnfigurator.prototype.criarConfigMonitoramento = function (builder) {
        return builder
            .configurarTimeout(15000)
            .definirTentativas(2)
            .build();
    };
    return NetworkCOnfigurator;
}());
exports.NetworkCOnfigurator = NetworkCOnfigurator;
