import { NetworkConfigBuilder } from "./NetworkConfigBuilder";
import { NetworkCOnfigurator } from "./NetworkConfigurator";

export class Client {
    private configurador = new NetworkCOnfigurator();

    configBasica() {
        console.log("Criação 1: Configuração Básica");
        const configBasica = new NetworkConfigBuilder("https://api.servico-externo.com/v1")
            .configurarTimeout(2000)
            .build();
        configBasica.mostrarConfig();
    }

    configRobusta() {
        console.log("Criação 2: Configuração Robusta (Premium)");
        const configRobusta = new NetworkConfigBuilder("https://api.interno.com/secure/v2")
            .adicionarAutenticacao('TOKEN_SECRETO_123')
            .ativarCache()
            .definirTentativas(3)
            .build();
        configRobusta.mostrarConfig();
    }

    configPadrao() {
        console.log("Criação 3: Configuração Padrão");
        const configPadrao = new NetworkConfigBuilder("https://api.padrao.com/data")
            .build();
        configPadrao.mostrarConfig();
    }

    configRobutaBuilder() {
        console.log("Criação 1: Robusta (Gerenciador)");
        const builderRobusto = new NetworkConfigBuilder('https://api.bancodedados.com/secure');
        const configRobusta = this.configurador.criarConfigRobusta(builderRobusto);
        configRobusta.mostrarConfig();
    }

    configPadraoBuilder() {
        console.log("Criação 2: Padrão (Gerenciador)");
        const builderPadrao = new NetworkConfigBuilder('https://api.publica.com/data');
        const configPadrao = this.configurador.criarConfigPadrao(builderPadrao);
        configPadrao.mostrarConfig();
    }

    configMonitorBuilder() {
        console.log("Criação 3: Monitoramento (Gerenciador)");
        const builderMonitor = new NetworkConfigBuilder('https://api.monitor.com/logs');
        const configMonitoramento = this.configurador.criarConfigMonitoramento(builderMonitor);
        configMonitoramento.mostrarConfig();
    }

    customConfig() {
        const configCustom = new NetworkConfigBuilder('https://custom.com/teste')
            .adicionarAutenticacao('TEMP_TKN')
            .configurarTimeout(1000)
            .build();
        configCustom.mostrarConfig();
    }
}

(function() {
    const client = new Client();
    client.configBasica();
    client.configRobusta();
    client.configPadrao();
    client.configRobutaBuilder();
    client.configPadraoBuilder();
    client.configMonitorBuilder();
    client.customConfig();
})();