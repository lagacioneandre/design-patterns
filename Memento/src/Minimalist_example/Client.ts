import { Caretaker } from "./Caretaker";
import { Originator } from "./Originator";

class Client {
    execute() {
        // --- THE HAND-OFF IN ACTION ---
        const agent = new Originator();
        const vault = new Caretaker();

        // 1. The agent has a secret
        agent.state = 'Secret password';

        // 2. The Agent saves it into an envelope and hands it to the Vault
        const envelope = agent.save();
        vault.store(envelope);

        // 3. Time passes... the Agent changes
        agent.state = 'Somenthing else';

        // 4. The Agent asks for the envelope back to remember the secret
        const returnedEnvelope = vault.retrieve();
        agent.restore(returnedEnvelope);
    }
}

(() => {
    new Client().execute();
})();