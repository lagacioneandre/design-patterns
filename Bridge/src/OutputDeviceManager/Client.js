"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BasicPlayer_1 = require("./BasicPlayer");
var LocalMonitor_1 = require("./LocalMonitor");
var NetworkProjector_1 = require("./NetworkProjector");
var PremiumPlayer_1 = require("./PremiumPlayer");
var Client = /** @class */ (function () {
    function Client() {
    }
    Client.prototype.execute = function () {
        var localMonitor = new LocalMonitor_1.LocalMonitor();
        var networkProjector = new NetworkProjector_1.NetworkProjector();
        var localMonitorBasicPlayer = new BasicPlayer_1.BasicPlayer(localMonitor);
        var localMonitorPremiumPlayer = new PremiumPlayer_1.PremiumPlayer(localMonitor);
        var networkProjectorBasicPlayer = new BasicPlayer_1.BasicPlayer(networkProjector);
        var networkProjectorPremiumPlayer = new PremiumPlayer_1.PremiumPlayer(networkProjector);
        localMonitorBasicPlayer.play('Hoje a noite');
        localMonitorPremiumPlayer.play('aqui na selva');
        localMonitorPremiumPlayer.rewind();
        networkProjectorBasicPlayer.play('quem dorme');
        networkProjectorPremiumPlayer.play('e o leao');
        networkProjectorPremiumPlayer.rewind();
    };
    return Client;
}());
(function () {
    new Client().execute();
})();
