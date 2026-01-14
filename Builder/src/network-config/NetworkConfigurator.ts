import { INetworkConfigBuilder } from "./network-config-builder.interface";
import { NetworkConfig } from "./NetworkConfig";

export class NetworkCOnfigurator {
    public criarConfigPadrao(builder: INetworkConfigBuilder): NetworkConfig {
        return builder
            .configurarTimeout(4000)
            .definirTentativas(1)
            .build();
    }

    criarConfigRobusta(builder: INetworkConfigBuilder): NetworkConfig {
        return builder
            .adicionarAutenticacao('TOKEN_SECURE_HASH')
            .ativarCache()
            .definirTentativas(5)
            .configurarTimeout(5000)
            .build();
    }

    criarConfigMonitoramento(builder: INetworkConfigBuilder): NetworkConfig {
        return builder
            .configurarTimeout(15000)
            .definirTentativas(2)
            .build();
    }
}