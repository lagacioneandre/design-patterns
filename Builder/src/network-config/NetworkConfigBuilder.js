"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NetworkConfigBuilder = void 0;
var NetworkConfig_1 = require("./NetworkConfig");
var NetworkConfigBuilder = /** @class */ (function () {
    function NetworkConfigBuilder(urlBase) {
        this.config = NetworkConfig_1.NetworkConfig.criar(urlBase);
    }
    NetworkConfigBuilder.prototype.configurarTimeout = function (ms) {
        this.config.timeoutMS = ms;
        return this;
    };
    NetworkConfigBuilder.prototype.ativarCache = function () {
        this.config.cacheAtivado = true;
        return this;
    };
    NetworkConfigBuilder.prototype.definirTentativas = function (max) {
        this.config.tentativasMaximas = max;
        return this;
    };
    NetworkConfigBuilder.prototype.adicionarAutenticacao = function (token) {
        this.config.tokenAuth = token;
        return this;
    };
    NetworkConfigBuilder.prototype.build = function () {
        return this.config;
    };
    return NetworkConfigBuilder;
}());
exports.NetworkConfigBuilder = NetworkConfigBuilder;
