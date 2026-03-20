import { BasicPlayer } from "./BasicPlayer";
import { LocalMonitor } from "./LocalMonitor";
import { NetworkProjector } from "./NetworkProjector";
import { PremiumPlayer } from "./PremiumPlayer";

class Client {
    execute() {
        const localMonitor = new LocalMonitor();
        const networkProjector = new NetworkProjector();
        const localMonitorBasicPlayer = new BasicPlayer(localMonitor);
        const localMonitorPremiumPlayer = new PremiumPlayer(localMonitor);
        const networkProjectorBasicPlayer = new BasicPlayer(networkProjector);
        const networkProjectorPremiumPlayer = new PremiumPlayer(networkProjector);
        localMonitorBasicPlayer.play('Hoje a noite');
        localMonitorPremiumPlayer.play('aqui na selva');
        localMonitorPremiumPlayer.rewind();
        networkProjectorBasicPlayer.play('quem dorme');
        networkProjectorPremiumPlayer.play('e o leao');
        networkProjectorPremiumPlayer.rewind();
    }
}

(() => {
    new Client().execute();
})();