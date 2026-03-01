"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Caretaker_1 = require("./Caretaker");
var Originator_1 = require("./Originator");
var Client = /** @class */ (function () {
    function Client() {
    }
    Client.prototype.execute = function () {
        // --- THE HAND-OFF IN ACTION ---
        var agent = new Originator_1.Originator();
        var vault = new Caretaker_1.Caretaker();
        // 1. The agent has a secret
        agent.state = 'Secret password';
        // 2. The Agent saves it into an envelope and hands it to the Vault
        var envelope = agent.save();
        vault.store(envelope);
        // 3. Time passes... the Agent changes
        agent.state = 'Somenthing else';
        // 4. The Agent asks for the envelope back to remember the secret
        var returnedEnvelope = vault.retrieve();
        agent.restore(returnedEnvelope);
    };
    return Client;
}());
(function () {
    new Client().execute();
})();
