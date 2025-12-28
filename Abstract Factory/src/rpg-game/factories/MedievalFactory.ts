import { Classe } from "../interfaces/classe.interface";
import { Habilidade } from "../interfaces/habilidade.interface";
import { Personagem } from "../interfaces/personagem.interface";
import { Weapon } from "../interfaces/weapon.interface";
import { BolaDeFogo } from "../medieval/BolaDeFogo";
import { Cavaleiro } from "../medieval/Cavaleiro";
import { Espada } from "../medieval/Espada";
import { Mago } from "../medieval/Mago";
import { PersonagensRPG } from "./interface/rpg.interface";

// concrete factory
export class MedievalFactory implements PersonagensRPG {
    getArma(): Weapon {
        return new Espada();
    }

    getClasse(): Classe {
        return new Mago();
    }

    getHabilidade(): Habilidade {
        return new BolaDeFogo();
    }

    getPersonagem(): Personagem {
        return new Cavaleiro();
    }
}