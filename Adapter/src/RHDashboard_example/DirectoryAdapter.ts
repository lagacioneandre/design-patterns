// Adapter

import { UserProfile } from "./interfaces/user-profile.interface";
import { UserProvider } from "./interfaces/user-provider.interface";
import { LegacyDirectorySystem } from "./LegacyDirectorySystem";

export class DirectoryAdapter implements UserProvider {
    private legacySystem: LegacyDirectorySystem;

    constructor(
        legacySystem: LegacyDirectorySystem
    ) {
        this.legacySystem = legacySystem;
    }

    fetchUser(id: string): UserProfile {
        // 1. Conversao de tipo de entrada
        const numericId = parseInt(id, 10);

        // 2. Chamada ao sistema incompativel
        const xmlData = this.legacySystem.getEntryById(numericId);

        // 3. Logica de traducao complexa (Parsing manual simplificado para o exemplo)
        const rawName = this.extractXmlAttr(xmlData, 'name'); // "Silva, Joao"
        const email = this.extractXmlAttr(xmlData, 'email');
        const rawRoles = this.extractXmlAttr(xmlData, 'access');

        // 4. Transformacao dos dados: "Silva, Joao" -> "Joao Silva"
        const [surname, firstName] = rawName.split(', ');
        const formattedName = `${firstName} ${surname}`;

        // 5. Transformacao de dados: String para array
        const rolesArray = rawRoles.split(',');

        // Retorna o objeto exatamente como o sistema novo exige
        return {
            id,
            fullName: formattedName,
            email,
            roles: rolesArray
        }
    }

    private extractXmlAttr(xml: string, key: string) {
        const regex = new RegExp(`key="${key}">(.*?)<\/attr>`);
        const match = xml.match(regex);
        return match ? match[1] : '';
    }
}