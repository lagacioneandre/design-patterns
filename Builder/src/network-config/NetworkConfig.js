"use strict";
/**
 * Essa 'e o objeto final que deve ser configurado, ou seja, esse 'e o formato completo de como o objeto deve ser,
 * esse objeto nao deve ser alterado pelas classes que o implementa, isso fere o padrao builder, essas classes devem
 * no maximo alterar os valores das propriedades que precisarem ou apenas nao implementar as propriedade que nao precisam.
 *
 * Você deve trabalhar com as propriedades e métodos definidas no objeto NetworkConfig,
 * mas pode criar variações na representação final do objeto.
 * Em um cenário ideal do padrão Builder, o Produto (NetworkConfig) deve ser uma classe estável com todas
 * as propriedades possíveis que poderiam ser configuradas. Você não deve alterar a estrutura do Produto (NetworkConfig)
 * a cada nova necessidade.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.NetworkConfig = void 0;
var NetworkConfig = /** @class */ (function () {
    function NetworkConfig(urlBase) {
        this.urlBase = '';
        this.timeoutMS = 5000;
        this.cacheAtivado = false;
        this.tentativasMaximas = 1;
        this.tokenAuth = null;
        this.urlBase = urlBase;
    }
    NetworkConfig.criar = function (urlBase) {
        return new NetworkConfig(urlBase);
    };
    NetworkConfig.prototype.mostrarConfig = function () {
        console.log("\n--- Configura\u00E7\u00E3o de Rede ---");
        console.log("URL Base: ".concat(this.urlBase));
        console.log("Timeout: ".concat(this.timeoutMS, "ms"));
        console.log("Cache: ".concat(this.cacheAtivado ? 'ATIVO' : 'DESATIVADO'));
        console.log("Retries: ".concat(this.tentativasMaximas));
        console.log("Autentica\u00E7\u00E3o: ".concat(this.tokenAuth ? 'Token OK' : 'NÃO REQUERIDO'));
        console.log("--------------------------\n");
    };
    return NetworkConfig;
}());
exports.NetworkConfig = NetworkConfig;
