import { DirectoryAdapter } from "./DirectoryAdapter";
import { UserProvider } from "./interfaces/user-provider.interface";
import { LegacyDirectorySystem } from "./LegacyDirectorySystem";

class Client {
    constructor(
        private userProvider: UserProvider
    ) {}

    renderUserCard(id: string) {
        const user = this.userProvider.fetchUser(id);
        console.log('--- Card de usuario ---');
        console.log(`Nome: ${user.fullName}`);
        console.log(`Email: ${user.email}`);
        console.log(`Permissoes: ${user.roles.join(' | ')}`);
    }
}

(() => {
    // Setup
    const legacy = new LegacyDirectorySystem();
    const adapter = new DirectoryAdapter(legacy);
    const dashboard = new Client(adapter);
    dashboard.renderUserCard('123');
})();