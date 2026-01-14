"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
var NetworkConfigBuilder_1 = require("./NetworkConfigBuilder");
var NetworkConfigurator_1 = require("./NetworkConfigurator");
var Client = /** @class */ (function () {
    function Client() {
        this.configurador = new NetworkConfigurator_1.NetworkCOnfigurator();
    }
    Client.prototype.configBasica = function () {
        console.log("Criação 1: Configuração Básica");
        var configBasica = new NetworkConfigBuilder_1.NetworkConfigBuilder("https://api.servico-externo.com/v1")
            .configurarTimeout(2000)
            .build();
        configBasica.mostrarConfig();
    };
    Client.prototype.configRobusta = function () {
        console.log("Criação 2: Configuração Robusta (Premium)");
        var configRobusta = new NetworkConfigBuilder_1.NetworkConfigBuilder("https://api.interno.com/secure/v2")
            .adicionarAutenticacao('TOKEN_SECRETO_123')
            .ativarCache()
            .definirTentativas(3)
            .build();
        configRobusta.mostrarConfig();
    };
    Client.prototype.configPadrao = function () {
        console.log("Criação 3: Configuração Padrão");
        var configPadrao = new NetworkConfigBuilder_1.NetworkConfigBuilder("https://api.padrao.com/data")
            .build();
        configPadrao.mostrarConfig();
    };
    Client.prototype.configRobutaBuilder = function () {
        console.log("Criação 1: Robusta (Gerenciador)");
        var builderRobusto = new NetworkConfigBuilder_1.NetworkConfigBuilder('https://api.bancodedados.com/secure');
        var configRobusta = this.configurador.criarConfigRobusta(builderRobusto);
        configRobusta.mostrarConfig();
    };
    Client.prototype.configPadraoBuilder = function () {
        console.log("Criação 2: Padrão (Gerenciador)");
        var builderPadrao = new NetworkConfigBuilder_1.NetworkConfigBuilder('https://api.publica.com/data');
        var configPadrao = this.configurador.criarConfigPadrao(builderPadrao);
        configPadrao.mostrarConfig();
    };
    Client.prototype.configMonitorBuilder = function () {
        console.log("Criação 3: Monitoramento (Gerenciador)");
        var builderMonitor = new NetworkConfigBuilder_1.NetworkConfigBuilder('https://api.monitor.com/logs');
        var configMonitoramento = this.configurador.criarConfigMonitoramento(builderMonitor);
        configMonitoramento.mostrarConfig();
    };
    Client.prototype.customConfig = function () {
        var configCustom = new NetworkConfigBuilder_1.NetworkConfigBuilder('https://custom.com/teste')
            .adicionarAutenticacao('TEMP_TKN')
            .configurarTimeout(1000)
            .build();
        configCustom.mostrarConfig();
    };
    return Client;
}());
exports.Client = Client;
(function () {
    var client = new Client();
    client.configBasica();
    client.configRobusta();
    client.configPadrao();
    client.configRobutaBuilder();
    client.configPadraoBuilder();
    client.configMonitorBuilder();
    client.customConfig();
})();
