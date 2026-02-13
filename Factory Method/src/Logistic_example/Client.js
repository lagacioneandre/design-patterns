"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RoadLogistics_1 = require("./creators/RoadLogistics");
var SeaLogistics_1 = require("./creators/SeaLogistics");
var Client = /** @class */ (function () {
    function Client() {
    }
    Client.prototype.delivery = function (factory) {
        console.log('Invocando a factory');
        factory.planDelivery();
    };
    return Client;
}());
(function () {
    var client = new Client();
    client.delivery(new RoadLogistics_1.RoadLogistics());
    client.delivery(new SeaLogistics_1.SeaLogistics());
})();
